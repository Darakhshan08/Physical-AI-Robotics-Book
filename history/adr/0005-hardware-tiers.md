# ADR-0005: Hardware Tiers

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-07
- **Feature:** 1-physical-ai-book
- **Context:** The book targets a diverse audience with varying access to robotics hardware. A decision is needed on how to address hardware requirements to ensure accessibility and practical application.

## Decision

The book will provide **multiple hardware tier recommendations** (Workstation, Edge Kit, and physical Robots) alongside a cloud alternative.

## Consequences

### Positive

- **Broad Accessibility**: Caters to a wide audience, from those with powerful development machines to those with limited budgets, as well as those wanting to work with physical robots.
- **Flexibility**: Readers can choose the tier that best suits their resources and learning objectives.
- **Practicality**: Enables hands-on learning, whether through simulation on a workstation, deployment to an edge device, or control of an actual robot.

### Negative

- **Increased Content Volume**: Requires extensive documentation for setup, configuration, and troubleshooting across multiple hardware platforms and the cloud alternative.
- **Maintenance Overhead**: Keeping hardware-specific instructions up-to-date for various tiers can be challenging.

## Alternatives Considered

- **Single hardware requirement (e.g., specific robot or workstation):**
  - Pros: Simplifies content creation and support, ensures a uniform experience.
  - Cons: Excludes a significant portion of the target audience due to cost or availability barriers.
  - Why rejected: Directly contradicts the goal of making the book accessible to a broad range of learners.

- **Cloud-only approach:**
  - Pros: Removes local hardware barriers entirely, consistent environment.
  - Cons: Introduces recurring costs, potential latency issues for real-time robotics, limits physical interaction.
  - Why rejected: While offering accessibility, it would detract from the "Physical AI" aspect of the book by eliminating local development and physical robot interaction.

## References

- Feature Spec: specs/1-physical-ai-book/spec.md
- Implementation Plan: specs/1-physical-ai-book/plan.md
- Related ADRs: null
- Evaluator Evidence: null
