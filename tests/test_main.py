import pytest
from unittest.mock import Mock, patch
from backend import main

def test_chunk_text():
    """Tests the chunk_text function."""
    text = "a" * 5000
    chunks = main.chunk_text(text, chunk_size=2000, chunk_overlap=200)
    
    assert len(chunks) == 3
    assert len(chunks[0]) == 2000
    assert len(chunks[1]) == 2000
    assert len(chunks[2]) == 1400 # 5000 - (2 * (2000-200))
    assert chunks[0] == "a" * 2000
    assert chunks[1].startswith("a" * 200)

def test_chunk_text_empty():
    """Tests the chunk_text function with empty input."""
    chunks = main.chunk_text("")
    assert len(chunks) == 0

@patch('backend.main.requests.get')
def test_extract_markdown_from_url(mock_get):
    """Tests the extract_markdown_from_url function."""
    mock_response = Mock()
    mock_response.status_code = 200
    mock_response.content = '<html><body><article><h1>Title</h1><p>Content</p></article></body></html>'
    mock_get.return_value = mock_response

    text = main.extract_markdown_from_url("http://fakeurl.com")
    assert "Title" in text
    assert "Content" in text

@patch('backend.main.requests.get')
def test_extract_markdown_from_url_no_article(mock_get):
    """Tests the extract_markdown_from_url function when no <article> or <main> tag is found."""
    mock_response = Mock()
    mock_response.status_code = 200
    mock_response.content = '<html><body><div><p>Some other content</p></div></body></html>'
    mock_get.return_value = mock_response

    text = main.extract_markdown_from_url("http://fakeurl.com")
    assert text == ""

@patch('backend.main.requests.get')
def test_get_all_urls(mock_get):
    """Tests the get_all_urls function."""
    sitemap_content = """
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url><loc>http://fakeurl.com/page1</loc></url>
        <url><loc>http://fakeurl.com/page2</loc></url>
    </urlset>
    """
    page1_content = '<html><body><a href="/page3">Page 3</a></body></html>'
    page2_content = '<html><body><a href="http://external.com">External</a></body></html>'
    page3_content = '<html><body></body></html>'

    def mock_requests_get(url, *args, **kwargs):
        response = Mock()
        response.status_code = 200
        if url == "http://fakeurl.com/sitemap.xml":
            response.content = sitemap_content
        elif url == "http://fakeurl.com/":
            response.content = page1_content
        elif url == "http://fakeurl.com/page1":
            response.content = page1_content
        elif url == "http://fakeurl.com/page2":
            response.content = page2_content
        elif url == "http://fakeurl.com/page3":
            response.content = page3_content
        else:
            response.status_code = 404
        return response

    mock_get.side_effect = mock_requests_get

    urls = main.get_all_urls("http://fakeurl.com/sitemap.xml", "http://fakeurl.com/")
    
    assert len(urls) == 4
    assert "http://fakeurl.com/page1" in urls
    assert "http://fakeurl.com/page2" in urls
    assert "http://fakeurl.com/page3" in urls
    assert "http://fakeurl.com/" in urls

@patch('backend.main.cohere.Client')
def test_generate_embedding(mock_cohere_client):
    """Tests the generate_embedding function."""
    mock_client_instance = Mock()
    mock_cohere_client.return_value = mock_client_instance
    
    mock_client_instance.embed.return_value = Mock(embeddings=[[0.1, 0.2], [0.3, 0.4]])

    chunks = ["chunk 1", "chunk 2"]
    embeddings = main.generate_embedding(mock_client_instance, chunks)

    mock_client_instance.embed.assert_called_once_with(
        texts=chunks,
        model="embed-english-v3.0",
        input_type="search_document"
    )
    assert embeddings == [[0.1, 0.2], [0.3, 0.4]]

@patch('backend.main.QdrantClient')
def test_save_chunk_to_qdrant(mock_qdrant_client):
    """Tests the save_chunk_to_qdrant function."""
    mock_client_instance = Mock()
    mock_qdrant_client.return_value = mock_client_instance

    collection_name = "test_collection"
    embeddings = [[0.1, 0.2], [0.3, 0.4]]
    chunks = ["text 1", "text 2"]
    urls = ["url1", "url2"]

    main.save_chunk_to_qdrant(mock_client_instance, collection_name, embeddings, chunks, urls)

    mock_client_instance.upsert.assert_called_once()
    args, kwargs = mock_client_instance.upsert.call_args
    points = kwargs['points']
    
    assert len(points) == 2
    assert points[0].id == 0
    assert points[0].vector == [0.1, 0.2]
    assert points[0].payload == {"text": "text 1", "url": "url1"}
    assert points[1].id == 1
    assert points[1].vector == [0.3, 0.4]
    assert points[1].payload == {"text": "text 2", "url": "url2"}
