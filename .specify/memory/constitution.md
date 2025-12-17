<!--
Sync Impact Report:
Version change: 0.1.0 -> 1.1.0
Modified principles: None (Backend principles added)
Added sections: Part 2: RAG Chatbot Backend, Integration
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ⚠ pending
  - .specify/templates/spec-template.md: ⚠ pending
  - .specify/templates/tasks-template.md: ⚠ pending
Follow-up TODOs: TODO(RATIFICATION_DATE): Not provided by user.
-->
# Physical-AI-Robotics-Book Constitution

## Part 1: Docusaurus Frontend

### Core Principles

#### Clarity
Content must be clear and easily understandable for both developers and learners.

#### Accuracy
All code examples and technical explanations must be verified and functional.

#### Consistency
Maintain consistent structure, terminology, and formatting throughout the book.

#### Deployability
All content must render correctly and be deployable to GitHub Pages.


### Key Standards

- All code examples must be tested and functional
- Writing style: conversational yet professional
- Markdown format: Docusaurus-compatible MDX
- Images: optimized for web (WebP/PNG, max 500KB)
- Reading level: accessible to intermediate developers

### Project Constraints

- Chapter length: 1,500-3,000 words each
- Code blocks: properly syntax-highlighted
- Format: Docusaurus static site deployed to GitHub Pages
- Version control: all changes tracked via Git

### Success Criteria

- Book builds without errors (npm run build)
- Successfully deploys to GitHub Pages
- All internal links functional
- Code examples execute as documented

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

## Integration
- Chatbot embedded in Docusaurus as React component
- CORS configured for frontend domain (GitHub Pages or Vercel)
- SSE streaming for responses

## Governance
This constitution serves as the foundational document for the project. Amendments to this document require a formal review and approval process by core contributors, followed by a minor or major version bump as appropriate. All changes will be tracked via version control. Compliance with these principles and standards will be regularly reviewed during project milestones.

**Version**: 1.1.0 | **Ratified**: TODO(RATIFICATION_DATE): Not provided by user. | **Last Amended**: 2025-12-17