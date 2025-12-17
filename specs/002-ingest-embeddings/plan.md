# Implementation Plan: Embeddings & Vector Storage

**Branch**: `002-ingest-embeddings` | **Date**: 2025-12-17 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `specs/002-ingest-embeddings/spec.md`

**Note**: This template is filled in by the `/sp.plan` command.

## Summary

This plan outlines the implementation for a content ingestion pipeline. The system will crawl a deployed website, chunk the markdown content, generate vector embeddings using Cohere, and store them in a Qdrant Cloud collection. This is the foundational step for the RAG chatbot, making the book's content searchable.

## Technical Context

**Language/Version**: Python 3.11+
**Primary Dependencies**:
- `uv`: For package management.
- `requests` or `httpx`: For crawling the website.
- `beautifulsoup4`: For parsing HTML and extracting markdown.
- `cohere`: The official Python SDK for Cohere API.
- `qdrant-client`: The official Python SDK for Qdrant.
- `python-dotenv`: For managing environment variables.
**Storage**: Qdrant Cloud (Vector Database)
**Testing**: `pytest` for unit and integration tests.
**Target Platform**: Docker container hosted on Vercel, Railway, or Render.
**Project Type**: Single script application.
**Performance Goals**: Efficiently crawl and process the entire book content in a single run.
**Constraints**:
- Adherence to Cohere Free Tier (1000 API calls/month).
- Adherence to Qdrant Free Tier (1GB storage).
- Secrets must be managed via a `.env` file.
**Scale/Scope**: The pipeline must be capable of ingesting the entire content of the "Physical AI Robotics Book".

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

This feature directly implements the "Part 2: RAG Chatbot Backend" section of the project constitution.
- **Tech Stack**: Aligns with FastAPI, Cohere, and Qdrant.
- **RAG Pipeline**: Implements the Chunking, Embeddings, and Vector Search (storage) steps.
- **Constraints**: Acknowledges and respects the free tier limits defined in the constitution.
- **Verdict**: ✅ PASS. The plan is in full alignment with the project constitution.

## Project Structure

### Documentation (this feature)

```text
specs/002-ingest-embeddings/
├── plan.md              # This file
├── spec.md              # The feature specification
├── data-model.md        # The data model for this feature
└── quickstart.md        # Instructions to run the ingestion script
```

### Source Code (repository root)

```text
backend/
├── .env                 # Store API keys and environment variables (Cohere, Qdrant)
├── main.py              # Main script containing the ingestion pipeline
├── pyproject.toml       # Project metadata and dependencies for uv package manager
└── README.md            # Setup instructions and how to run the ingestion pipeline

tests/
├── test_main.py     # Unit and integration tests for the ingestion pipeline
└── .env.example     # Example environment file
```

**Structure Decision**: Per the user's request, the implementation will be consolidated into a single `main.py` file within a `backend` directory. This simplifies the initial implementation, focusing on core functionality rather than a complex application structure.

## Complexity Tracking

No violations of the constitution were identified. This section is not needed.
