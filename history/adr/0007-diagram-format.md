# ADR-0007: Diagram Format

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-07
- **Feature:** 1-physical-ai-book
- **Context:** Technical books require diagrams to illustrate complex concepts. A consistent and maintainable approach to diagramming is essential.

## Decision

The book will use a **mixed approach of Mermaid diagrams for structural/flow diagrams and optimized static images (PNG/WebP) for complex or photorealistic visuals.**

## Consequences

### Positive

- **Maintainability (Mermaid)**: Mermaid diagrams are text-based, allowing them to be version-controlled, easily updated, and consistent in style.
- **Visual Fidelity (Images)**: Static images can provide high visual detail and realism where Mermaid might be insufficient (e.g., hardware schematics, simulation screenshots).
- **Optimization**: All images will be optimized (WebP/PNG, max 500KB) for fast loading times within the Docusaurus site.

### Negative

- **Workflow Complexity**: Managing two different diagramming workflows adds a layer of complexity for content creators.
- **Learning Curve (Mermaid)**: Authors might need to learn Mermaid syntax.

## Alternatives Considered

- **Mermaid only:**
  - Pros: High maintainability, version control friendly, all diagrams text-based.
  - Cons: Limited in expressing highly complex, photorealistic, or arbitrary visual concepts (e.g., detailed hardware renders, intricate simulation scenes).
  - Why rejected: Would compromise visual clarity for certain types of diagrams essential for robotics.

- **Static images only (PNG/JPG):**
  - Pros: Maximum visual flexibility and detail.
  - Cons: Difficult to version control changes, updates can be manual and prone to inconsistencies, larger file sizes impacting performance.
  - Why rejected: High maintenance burden and lack of version control for diagrams would be a significant drawback for a technical book.

## References

- Feature Spec: specs/1-physical-ai-book/spec.md
- Implementation Plan: specs/1-physical-ai-book/plan.md
- Related ADRs: null
- Evaluator Evidence: null
