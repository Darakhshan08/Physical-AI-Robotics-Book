# ADR-0001: Docusaurus Version

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-07
- **Feature:** 1-physical-ai-book
- **Context:** The project requires a static site generator for the technical book, with Docusaurus being the chosen framework. A decision is needed on which major version of Docusaurus to use for development.

## Decision

The project will use **Docusaurus 3.x**.

## Consequences

### Positive

- Leverage the latest features, performance improvements, and ongoing support from the Docusaurus team.
- Ensure the book is built on a modern and future-proof platform.

### Negative

- Potential for encountering newer, less documented bugs compared to a more mature 2.x release.
- Potentially a smaller immediate community support base for very new issues.

## Alternatives Considered

- **Docusaurus 2.x:**
  - Pros: More stable, larger and more established community support, extensive documentation and examples.
  - Cons: Missing out on the latest features and performance optimizations of 3.x, potentially shorter future support window.
  - Why rejected: Prioritized modern features and long-term relevance over immediate stability which 3.x is expected to achieve quickly.

## References

- Feature Spec: specs/1-physical-ai-book/spec.md
- Implementation Plan: specs/1-physical-ai-book/plan.md
- Related ADRs: null
- Evaluator Evidence: null
