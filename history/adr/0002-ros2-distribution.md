# ADR-0002: ROS 2 Distribution

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-07
- **Feature:** 1-physical-ai-book
- **Context:** The book will heavily feature ROS 2 for robot control. A decision is needed on which ROS 2 distribution to standardize on for all code examples and explanations.

## Decision

The project will standardize on **ROS 2 Humble**.

## Consequences

### Positive

- Humble is an LTS (Long-Term Support) release, providing stability and extended support, which is ideal for educational content.
- A large and mature community, ensuring ample resources and troubleshooting support.
- Code examples built on Humble will remain relevant for a longer period.

### Negative

- Readers might miss out on the very latest features and improvements introduced in newer, non-LTS releases (e.g., Jazzy).
- Some bleeding-edge hardware or software integrations might be optimized for newer distributions.

## Alternatives Considered

- **ROS 2 Jazzy:**
  - Pros: Access to the newest features, bug fixes, and performance improvements.
  - Cons: Shorter support cycle (non-LTS), potentially less community stability, higher likelihood of breaking changes.
  - Why rejected: Prioritized stability and long-term relevance for educational content over cutting-edge features.

- **ROS 2 Iron:**
  - Pros: Newer than Humble, with some improvements.
  - Cons: Non-LTS, shorter support cycle.
  - Why rejected: Similar reasons to Jazzy; Humble provides more stability for the educational context.

## References

- Feature Spec: specs/1-physical-ai-book/spec.md
- Implementation Plan: specs/1-physical-ai-book/plan.md
- Related ADRs: null
- Evaluator Evidence: null
