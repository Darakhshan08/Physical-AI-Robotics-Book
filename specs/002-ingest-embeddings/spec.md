# Feature Specification: Embeddings & Vector Storage

**Feature Branch**: `002-ingest-embeddings`  
**Created**: 2025-12-17  
**Status**: Draft  
**Input**: User description: "Embeddings & Vector Storage Target: Ingest book content, generate embeddings, store in Qdrant Scope: - Crawl deployed website URLs - Chunk markdown content (500-1000 tokens) - Generate embeddings via Cohere embed-english-v3.0 - Store vectors in Qdrant with metadata Success Criteria: - [ ] All pages crawled successfully - [ ] Chunks stored with metadata (chapter, section, URL) - [ ] Qdrant collection queryable Deliverables: - /app/services/crawler.py - /app/services/chunker.py - /app/services/embeddings.py - /app/db/qdrant_client.py - /scripts/ingest.py Constraints: - Cohere Free: 1000 calls/month - Qdrant Free: 1GB storage Not Building: - API endpoints (Spec-3) - Retrieval logic (Spec-2) - Frontend integration (Spec-4)"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Content Ingestion Pipeline (Priority: P1)

As a developer/admin, I want to run a script that automatically crawls the deployed book website, chunks the content, generates embeddings, and stores them in a vector database, so that the book's content is available for RAG queries.

**Why this priority**: This is the foundational step for the entire RAG chatbot. Without the content in the vector database, no queries can be answered.

**Independent Test**: This can be tested by running the ingestion script and then querying the Qdrant collection directly to verify that the chunks and their metadata have been successfully stored.

**Acceptance Scenarios**:

1. **Given** a deployed Docusaurus website, **When** the ingestion script is run, **Then** all pages are crawled and their markdown content is extracted.
2. **Given** extracted markdown content, **When** the chunking process runs, **Then** the content is divided into chunks of 500-1000 tokens.
3. **Given** content chunks, **When** the embedding process runs, **Then** embeddings are generated for each chunk using the Cohere API.
4. **Given** chunks with embeddings and metadata, **When** the storage process runs, **Then** they are all successfully stored in the Qdrant vector database.

### Edge Cases

- What happens if a website URL is unreachable during crawling? (The script should log the error and continue with other URLs).
- How does the system handle non-markdown pages? (It should ignore them and only process pages with markdown content).
- What happens if the Cohere API or Qdrant Cloud is unavailable? (The script should fail with a clear error message).
- What happens if the Cohere or Qdrant free tier limits are exceeded? (The script should fail with a clear error message indicating the limit was reached).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide a script to trigger the ingestion process.
- **FR-002**: The system MUST crawl a given website URL to find all content pages.
- **FR-003**: The system MUST extract markdown content from the crawled pages.
- **FR-004**: The system MUST split the markdown content into chunks between 500 and 1000 tokens.
- **FR-005**: The system MUST generate vector embeddings for each content chunk using the Cohere `embed-english-v3.0` model.
- **FR-006**: The system MUST store each vector in a Qdrant collection.
- **FR-007**: Each stored vector MUST include metadata: the source URL, chapter, and section.

### Key Entities

- **Content Chunk**: A piece of text (500-1000 tokens) extracted from the book. Attributes: `content`, `source_url`, `chapter`, `section`, `embedding_vector`.

## Out of Scope

- API endpoints for querying (to be handled in Spec-3).
- Core retrieval logic (e.g., reranking) for the RAG pipeline (to be handled in Spec-2).
- Frontend chatbot UI integration (to be handled in Spec-4).

## Assumptions

- The deployed book website has a sitemap or a predictable URL structure for crawling.
- Chapter and section information can be reliably extracted from the URL or page content.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of the book's content pages are successfully crawled and processed by the ingestion script.
- **SC-002**: All processed content is chunked and stored in the Qdrant collection, verifiable by querying the collection count.
- **SC-003**: All vectors in the Qdrant collection have complete metadata (URL, chapter, section).
- **SC-004**: A sample query to the Qdrant collection successfully retrieves relevant chunks, confirming the collection is queryable.
