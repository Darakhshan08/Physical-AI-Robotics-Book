import os
import cohere
import logging
import hashlib
import uuid # Added for UUID generation
from dotenv import load_dotenv
from qdrant_client import QdrantClient, models
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Load environment variables from .env file
load_dotenv()

COHERE_API_KEY = os.getenv("COHERE_API_KEY")
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

# Validate environment variables
if not COHERE_API_KEY:
    logging.error("COHERE_API_KEY not found in environment variables.")
    exit(1)
if not QDRANT_URL or not QDRANT_API_KEY:
    logging.error("QDRANT_URL or QDRANT_API_KEY not found in environment variables.")
    exit(1)

def get_cohere_client():
    """Initializes and returns the Cohere client."""
    try:
        return cohere.Client(api_key=COHERE_API_KEY)
    except Exception as e:
        logging.error(f"Failed to initialize Cohere client: {e}")
        exit(1)

def get_qdrant_client():
    """Initializes and returns the Qdrant client."""
    try:
        return QdrantClient(api_key=QDRANT_API_KEY, url=QDRANT_URL)
    except Exception as e:
        logging.error(f"Failed to initialize Qdrant client: {e}")
        exit(1)

def create_qdrant_collection(qdrant_client: QdrantClient, collection_name: str):
    """Creates a Qdrant collection only if it does not already exist."""
    try:
        if not qdrant_client.collection_exists(collection_name=collection_name):
            qdrant_client.create_collection(
                collection_name=collection_name,
                vectors_config=models.VectorParams(size=1024, distance=models.Distance.COSINE),
            )
            logging.info(f"Collection '{collection_name}' created successfully.")
        else:
            logging.info(f"Collection '{collection_name}' already exists. Skipping creation.")
    except Exception as e:
        logging.error(f"Failed to create Qdrant collection '{collection_name}': {e}")
        exit(1)

def get_all_urls(sitemap_url: str, root_url: str, depth_limit: int = 2):
    """
    Crawls a website to get all unique URLs using a hybrid strategy.
    Primary source: sitemap.xml
    Secondary source: link following from the root URL.
    """
    urls = set()
    root_netloc = urlparse(root_url).netloc

    # Helper to clean and validate URL
    def clean_and_validate_url(url: str) -> str | None:
        parsed_url = urlparse(url)
        # Remove fragments (e.g., #anchor)
        clean_url_no_fragment = parsed_url._replace(fragment="").geturl()
        # Ignore anchor-only URLs (e.g., http://example.com/#top when path is empty)
        if not parsed_url.path and parsed_url.fragment:
            return None
        return clean_url_no_fragment

    # 1. Sitemap parsing
    logging.info(f"Attempting to fetch sitemap from {sitemap_url}")
    try:
        response = requests.get(sitemap_url, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, "xml")
        for loc in soup.find_all("loc"):
            sitemap_entry_url = clean_and_validate_url(loc.text)
            if sitemap_entry_url:
                sitemap_url_parsed = urlparse(sitemap_entry_url)
                if sitemap_url_parsed.netloc == root_netloc:
                    urls.add(sitemap_entry_url)
                else:
                    logging.warning(f"Sitemap contained an external URL: {loc.text}. Skipping.")
        logging.info(f"Found {len(urls)} URLs in sitemap within the root domain.")
    except requests.exceptions.RequestException as e:
        logging.warning(f"Could not fetch sitemap from {sitemap_url}: {e}")

    # 2. Link following
    # Ensure homepage is processed, even if not explicitly linked or in sitemap
    cleaned_root_url = clean_and_validate_url(root_url)
    if cleaned_root_url:
        queue = [(cleaned_root_url, 0)]
    else:
        queue = [] # Should not happen if root_url is valid

    visited = set()

    while queue:
        current_url, depth = queue.pop(0)

        # Do not visit if already visited or depth limit exceeded
        if current_url in visited or depth > depth_limit:
            continue
        
        try:
            logging.info(f"Crawling {current_url} (depth: {depth})")
            response = requests.get(current_url, timeout=10)
            response.raise_for_status() # Raises HTTPError for bad responses (4xx or 5xx) 
            
            urls.add(current_url) # Only add to final list if successful
            visited.add(current_url) # Mark as visited only if successfully fetched

            soup = BeautifulSoup(response.content, "html.parser")

            for link in soup.find_all("a", href=True):
                href = link["href"]
                absolute_url = clean_and_validate_url(urljoin(current_url, href))
                
                if absolute_url: # Check if clean_and_validate_url returned a valid URL
                    parsed_absolute_url = urlparse(absolute_url)
                    
                    # Stay on the same domain and ignore non-content assets
                    if parsed_absolute_url.netloc == root_netloc:
                        if not any(absolute_url.endswith(ext) for ext in ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg']):
                            if absolute_url not in visited: # Only add to queue if not already visited
                                queue.append((absolute_url, depth + 1))
        except requests.exceptions.RequestException as e:
            logging.warning(f"Could not fetch or read {current_url}: {e}")

    return list(urls)

def extract_markdown_from_url(url: str) -> str:
    """Extracts the main markdown content from a given URL."""
    try:
        logging.info(f"Extracting markdown from {url}")
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, "html.parser")
        
        main_content = soup.find("article") or soup.find("main")
        if main_content:
            return main_content.get_text(separator='\n', strip=True)
        else:
            logging.warning(f"No main content found for {url}")
            return ""
    except requests.exceptions.RequestException as e:
        logging.error(f"Could not fetch or read {url}: {e}")
        return ""

def chunk_text(text: str, chunk_size: int = 2000, chunk_overlap: int = 200) -> list[str]:
    """Splits a text into overlapping chunks."""
    if not text:
        return []
    
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start += chunk_size - chunk_overlap
    logging.info(f"Text chunked into {len(chunks)} pieces.")
    return chunks

def generate_embedding(cohere_client: cohere.Client, chunks: list[str]) -> list[list[float]]:
    """Generates embeddings for a list of text chunks."""
    if not chunks:
        return []
    
    try:
        response = cohere_client.embed(
            texts=chunks,
            model="embed-english-v3.0",
            input_type="search_document"
        )
        logging.info(f"Generated {len(response.embeddings)} embeddings.")
        return response.embeddings
    except Exception as e:
        logging.error(f"Failed to generate embeddings: {e}")
        return []

def save_chunk_to_qdrant(qdrant_client: QdrantClient, collection_name: str, embeddings: list[list[float]], chunks: list[str], urls: list[str]):
    """Saves chunks and their embeddings to a Qdrant collection."""
    if not embeddings:
        logging.warning("No embeddings to save to Qdrant.")
        return

    points = []
    for i, embedding in enumerate(embeddings):
        if len(embedding) != 1024:
            logging.error(f"Embedding at index {i} has incorrect size ({len(embedding)}). Expected 1024. Skipping.")
            continue
        
        # Generate unique ID for each chunk using hash of content + URL
        unique_id_hex = hashlib.sha256((chunks[i] + urls[i]).encode()).hexdigest()
        unique_uuid = str(uuid.UUID(unique_id_hex[:32])) # Convert first 32 chars of hash to UUID format

        points.append(
            models.PointStruct(
                id=unique_uuid, 
                vector=embedding,
                payload={"text": chunks[i], "url": urls[i]},
            )
        )
    
    try:
        qdrant_client.upsert(
            collection_name=collection_name,
            points=points,
            wait=True,
        )
        logging.info(f"Saved {len(points)} points to collection '{collection_name}'.")
    except Exception as e:
        logging.error(f"Failed to save chunks to Qdrant collection '{collection_name}': {e}")

def main():
    """Main function to run the ingestion pipeline."""
    SITEMAP_URL = "https://physical-ai-robotics-book-inky.vercel.app/sitemap.xml"
    ROOT_URL = "https://physical-ai-robotics-book-inky.vercel.app/"
    COLLECTION_NAME = "reg_embedding"
    MIN_CONTENT_LENGTH = 500 # Requirement: skip pages with text length < 500 characters

    logging.info("Initializing clients...")
    cohere_client = get_cohere_client()
    qdrant_client = get_qdrant_client()

    logging.info("Starting ingestion pipeline...")
    
    # Create the Qdrant collection (only if it doesn't exist)
    create_qdrant_collection(qdrant_client, COLLECTION_NAME)

    # Get all URLs
    all_urls = get_all_urls(SITEMAP_URL, ROOT_URL)
    logging.info(f"Found {len(all_urls)} unique URLs to process.")

    all_chunks = []
    all_chunk_urls = []

    for url in all_urls:
        logging.info(f"Processing {url}...")
        markdown_content = extract_markdown_from_url(url)
        
        # Content quality: Skip pages with extracted text length < 500 characters.
        if markdown_content and len(markdown_content) >= MIN_CONTENT_LENGTH:
            chunks = chunk_text(markdown_content)
            all_chunks.extend(chunks)
            all_chunk_urls.extend([url] * len(chunks))
        elif markdown_content:
            logging.info(f"Skipping {url} due to low content length ({len(markdown_content)} characters).")

    logging.info(f"Total chunks created: {len(all_chunks)}")

    if all_chunks:
        # Generate embeddings in batches
        batch_size = 96  # Cohere's API has a limit of 96 texts per call for embeds
        all_embeddings = []
        for i in range(0, len(all_chunks), batch_size):
            batch_chunks = all_chunks[i:i+batch_size]
            logging.info(f"Generating embeddings for batch {i//batch_size + 1}...")
            batch_embeddings = generate_embedding(cohere_client, batch_chunks)
            if batch_embeddings:
                all_embeddings.extend(batch_embeddings)
        
        logging.info(f"Total embeddings generated: {len(all_embeddings)}")

        if all_embeddings:
            # Save to Qdrant
            save_chunk_to_qdrant(qdrant_client, COLLECTION_NAME, all_embeddings, all_chunks, all_chunk_urls)

    logging.info("Ingestion pipeline finished.")

if __name__ == "__main__":
    main()