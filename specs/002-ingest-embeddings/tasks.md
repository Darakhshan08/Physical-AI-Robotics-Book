# Tasks for Feature: Embeddings & Vector Storage

**Feature Branch**: `002-ingest-embeddings`
**Date**: 2025-12-17
**Spec**: [spec.md](spec.md)
**Plan**: [plan.md](plan.md)

## Summary

This document outlines the detailed, dependency-ordered tasks required to implement the "Embeddings & Vector Storage" feature. The primary goal is to establish a robust content ingestion pipeline that crawls the book website, chunks markdown content, generates Cohere embeddings, and stores them in Qdrant.

## User Story Dependencies

*   User Story 1 (Content Ingestion Pipeline) has no external dependencies beyond foundational setup.

## Phase 1: Setup (Project Initialization)

- [X] T001 Create `backend/` directory in the repository root.
- [X] T002 Create `pyproject.toml` file in `backend/pyproject.toml` for `uv` package management.
- [X] T003 Create `main.py` file in `backend/main.py` as the main script for the ingestion pipeline.
- [X] T004 Create `.env` example file in `backend/.env` for API keys and environment variables.
- [X] T005 Create `README.md` file with setup and run instructions in `backend/README.md`.
- [X] T006 Create `test_main.py` file in `tests/test_main.py` for unit and integration tests.
- [X] T007 Initialize `uv` environment and install core dependencies (`requests` or `httpx`, `beautifulsoup4`, `cohere`, `qdrant-client`, `python-dotenv`).

## Phase 2: Foundational (Blocking prerequisites for all user stories)

- [X] T008 Implement `create_qdrant_collection` function to manage Qdrant collection (including deletion for re-ingestion) in `backend/main.py`.
- [X] T009 Implement `get_qdrant_client` function for Qdrant client initialization in `backend/main.py`.
- [X] T010 Implement `get_cohere_client` function for Cohere client initialization in `backend/main.py`.

## Phase 3: User Story 1 - Content Ingestion Pipeline (Priority: P1)

**Story Goal**: As a developer/admin, I want to run a script that automatically crawls the deployed book website, chunks the content, generates embeddings, and stores them in a vector database, so that the book's content is available for RAG queries.
**Independent Test Criteria**: The ingestion script runs successfully, and a direct query to the Qdrant collection confirms that chunks and their metadata are correctly stored.

- [X] T011 [US1] Implement `get_all_urls` function for hybrid crawling (sitemap + link following) in `backend/main.py`.
- [X] T012 [P] [US1] Implement `extract_markdown_from_url` function to extract markdown content from a given URL in `backend/main.py`.
- [X] T013 [P] [US1] Implement `chunk_text` function for markdown-aware chunking (500-1000 tokens) in `backend/main.py`.
- [X] T014 [P] [US1] Implement `generate_embedding` function using Cohere `embed-english-v3.0` in `backend/main.py`.
- [X] T015 [P] [US1] Implement `save_chunk_to_qdrant` function to store `ContentChunk` with metadata in `backend/main.py`.
- [X] T016 [US1] Implement main orchestration logic to tie all ingestion functions together in `backend/main.py`.
- [X] T017 [US1] Write unit/integration tests for `get_all_urls` in `tests/test_main.py`.
- [X] T018 [P] [US1] Write unit/integration tests for `extract_markdown_from_url` in `tests/test_main.py`.
- [X] T019 [P] [US1] Write unit/integration tests for `chunk_text` in `tests/test_main.py`.
- [X] T020 [P] [US1] Write unit/integration tests for `generate_embedding` in `tests/test_main.py`.
- [X] T021 [P] [US1] Write unit/integration tests for `save_chunk_to_qdrant` in `tests/test_main.py`.
- [X] T022 [US1] Write end-to-end test for the full ingestion pipeline in `tests/test_main.py`.

## Final Phase: Polish & Cross-Cutting Concerns

- [X] T023 Update `pyproject.toml` with `pytest` and other test dependencies in `backend/pyproject.toml`.
- [X] T024 Refine error handling and logging for robustness across all functions in `backend/main.py`.

## Parallel Execution Opportunities

- **User Story 1 - Content Ingestion Pipeline:**
    - Tasks `T012`, `T013`, `T014`, `T015`, `T018`, `T019`, `T020`, `T021` can be worked on in parallel once their preceding dependencies (T001-T011) are met.

## Implementation Strategy

*   **MVP First:** The primary focus is on delivering User Story 1, which represents the Minimal Viable Product for content ingestion.
*   **Incremental Delivery:** Tasks are structured to allow for step-by-step implementation and testing, ensuring stability at each stage.
