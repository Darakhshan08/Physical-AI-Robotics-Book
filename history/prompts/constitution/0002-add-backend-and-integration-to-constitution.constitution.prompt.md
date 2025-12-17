---
id: 0002
title: Add Backend and Integration to Constitution
stage: constitution
date: 2025-12-17
surface: agent
model: Gemini
feature: none
branch: main
user: User
command: /sp.constitution
labels: [constitution, backend, integration]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

/sp.constitution

Add a new section "## Part 2: RAG Chatbot Backend" to /sp.constitution after the existing frontend content. Do NOT modify any existing frontend content.

Add this backend constitution:

---

## Part 2: RAG Chatbot Backend

### Tech Stack
- FastAPI (Python 3.11+)
- OpenAI Agents SDK / ChatKit SDK
- Cohere (Reranking & Embeddings - embed-english-v3.0)
- Neon Serverless Postgres
- Qdrant Cloud Free Tier

### Core Principles
- Answers grounded in book content only
- Support full-book and user-selected text queries
- Sub-3-second response time
- No hallucinations (strict "I don't know" fallback)

### RAG Pipeline
- Chunking: Markdown-aware (500-1000 tokens)
- Embeddings: Cohere embed-english-v3.0
- Vector Search: Qdrant (top-10 retrieval)
- Reranking: Cohere Rerank API (top-5 refinement)
- Generation: OpenAI GPT-4o-mini

### API Endpoints
- POST /chat - Full book RAG query
- POST /chat/selected - Selected text context query
- POST /ingest - Book content ingestion
- GET /health - Health check

### Database Schema
- Neon: chat_sessions, query_logs, feedback
- Qdrant: book_chunks collection (content, chapter, section metadata)

### Folder Structure
- /app (main FastAPI app)
- /app/routers (API routes)
- /app/services (RAG logic, embeddings, reranking)
- /app/models (Pydantic schemas)
- /app/db (Neon & Qdrant clients)

### Constraints
- Cohere Free: 1000 API calls/month
- Qdrant Free: 1GB storage
- Neon Free: Auto-suspend after 5 min
- Secrets via .env only

### Deployment
- Docker containerization
- Host: Vercel/Railway/Render
- CI/CD: GitHub Actions

### Backend Success Criteria
- [ ] Accurate RAG answers from book content
- [ ] Selected text mode functional
- [ ] Zero hallucinations on test set
- [ ] API response < 3 seconds
- [ ] Deployed and integrated with Docusaurus frontend

---

Also add at the end:

## Integration
- Chatbot embedded in Docusaurus as React component
- CORS configured for frontend domain (GitHub Pages or Vercel)
- SSE streaming for responses

Update version to 1.1.0 and Last Amended date.

## Response snapshot

Constitution updated to v1.1.0, adding a new "Part 2: RAG Chatbot Backend" and an "Integration" section. The existing frontend constitution remains untouched as requested. The title was updated to reflect the combined project.

## Outcome

- ✅ Impact: The constitution was successfully updated to include the new backend and integration sections. The version and date were also updated.
- 🧪 Tests: n/a
- 📁 Files: 1 modified
- 🔁 Next prompts: Potentially creating a plan or spec for the new backend.
- 🧠 Reflection: The user's instructions were very clear and specific, which made the update straightforward. The request to not modify the existing content was a key constraint that was followed.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): n/a
