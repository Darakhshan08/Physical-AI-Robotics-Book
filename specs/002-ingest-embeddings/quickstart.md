# Quickstart: Content Ingestion

This guide explains how to set up and run the content ingestion pipeline.

## Prerequisites

- Python 3.11+
- `uv` package installer (`pip install uv`)

## 1. Setup Environment

Create a `.env` file in the root of the repository and add your API keys:

```env
# .env

# Get your key from https://cohere.com/
COHERE_API_KEY="YOUR_COHERE_API_KEY"

# Get your key and URL from https://cloud.qdrant.io/
QDRANT_API_KEY="YOUR_QDRANT_API_KEY"
QDRANT_URL="YOUR_QDRANT_CLOUD_URL"
```

## 2. Install Dependencies

Set up a virtual environment and install the required packages.

```bash
# Create a virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows, use `.venv\Scripts\activate`

# Install dependencies using uv
uv pip install -r requirements.txt
```
*(Note: A `requirements.txt` file will be created during implementation).*

## 3. Run the Ingestion Script

Execute the `main.py` script to start the ingestion process.

```bash
python app/main.py
```

The script will:
1.  Crawl the website specified within it.
2.  Chunk the content.
3.  Generate embeddings via Cohere.
4.  Create a Qdrant collection named `reg_embedding`.
5.  Save the chunks to the collection.

You can monitor the progress via the console output.
