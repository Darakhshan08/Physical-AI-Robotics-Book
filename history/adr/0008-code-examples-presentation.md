# ADR-0008: Code Examples Presentation

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-07
- **Feature:** 1-physical-ai-book
- **Context:** Code examples are central to a technical book on AI and robotics. A clear strategy is needed for how code examples are presented and integrated into the content.

## Decision

Code examples will be presented as **snippets within the chapter content**, with references to **complete files** in a companion repository where necessary. The approach will be **progressive**, building up complexity incrementally.

## Consequences

### Positive

- **Readability**: Short snippets within the text improve immediate comprehension and reduce cognitive load.
- **Contextual Learning**: Examples are presented exactly where they are relevant to the explanation.
- **Maintainability**: Smaller snippets are easier to update and verify.
- **Progressive Learning**: Allows readers to follow the development of a concept step-by-step.

### Negative

- **Fragmented View**: Readers might need to switch between the book and a separate repository to see full working examples.
- **Duplication Risk**: Careful management needed to avoid duplicating large code blocks within the book.

## Alternatives Considered

- **Snippets only:**
  - Pros: Keeps the book concise.
  - Cons: May not provide enough context for complex examples, making it difficult for readers to replicate or understand the full program flow.
  - Why rejected: Insufficient for comprehensive learning in robotics, where system integration is crucial.

- **Complete files only (referenced externally):**
  - Pros: Ensures readers always have full working code, reduces book clutter.
  - Cons: Interrupts reading flow, requires constant switching, can make it harder to see the specific code being discussed in the text.
  - Why rejected: While offering completeness, it would make the reading experience less fluid and direct.

- **Progressive examples only (full code built up in text):**
  - Pros: Excellent for showing incremental development.
  - Cons: Can lead to very long chapters, making it hard to follow the narrative if too much code is embedded.
  - Why rejected: Risk of overwhelming the reader and making chapters excessively long.

## References

- Feature Spec: specs/1-physical-ai-book/spec.md
- Implementation Plan: specs/1-physical-ai-book/plan.md
- Related ADRs: null
- Evaluator Evidence: null
