# Physical AI Robotics Book - Ingestion Pipeline

This directory contains the ingestion pipeline for the Physical AI Robotics Book.

## Setup

1.  **Create a `.env` file:**
    Copy the contents of `.env.example` to a new file named `.env` and add your API keys:
    ```env
    # .env

    # Get your key from https://cohere.com/
    COHERE_API_KEY="YOUR_COHERE_API_KEY"

    # Get your key and URL from https://cloud.qdrant.io/
    QDRANT_API_KEY="YOUR_QDRANT_API_KEY"
    QDRANT_URL="YOUR_QDRANT_CLOUD_URL"
    ```

2.  **Install dependencies:**
    Set up a virtual environment and install the required packages using `uv`.
    ```bash
    # Create a virtual environment
    python -m venv .venv
    source .venv/bin/activate  # On Windows, use `.venv\Scripts\activate`

    # Install dependencies using uv
    uv pip install -r requirements.txt
    ```

## Run the Ingestion Script

Execute the `main.py` script to start the ingestion process.

```bash
python main.py
```
