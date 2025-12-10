# ADR-0004: Simulation Platform

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-07
- **Feature:** 1-physical-ai-book
- **Context:** Robotic simulation is a critical component for testing and development in Physical AI. A decision is needed regarding the primary simulation platform(s) for the book.

## Decision

The project will utilize **both Gazebo and NVIDIA Isaac Sim** as simulation platforms, highlighting their respective strengths and use cases.

## Consequences

### Positive

- **Comprehensive Exposure**: Readers gain experience with both a widely adopted open-source simulator (Gazebo) and a high-fidelity, GPU-accelerated commercial simulator (Isaac Sim).
- **Diverse Use Cases**: Gazebo is excellent for basic ROS 2 integration and simpler physics, while Isaac Sim excels in photorealistic rendering, synthetic data generation, and complex physics.
- **Learning Tradeoffs**: Provides a practical understanding of the tradeoffs between different simulation approaches.

### Negative

- **Increased Setup Complexity**: Documenting and supporting two distinct simulation environments increases the setup burden for readers and the content creation effort.
- **Potential for Overwhelm**: Readers might find it challenging to master two simulation platforms simultaneously.

## Alternatives Considered

- **Gazebo only:**
  - Pros: Lower system requirements, open-source, large community, good for basic ROS integration.
  - Cons: Lower graphical fidelity, less capable for synthetic data generation, weaker GPU utilization, less advanced physics.
  - Why rejected: Would limit the scope of advanced topics like synthetic data and photorealistic simulation crucial for modern Physical AI.

- **NVIDIA Isaac Sim only:**
  - Pros: High fidelity, excellent for synthetic data generation, GPU-accelerated, strong integration with NVIDIA AI ecosystem.
  - Cons: Higher hardware requirements (NVIDIA GPU), proprietary software, steeper learning curve for some, potential cost implications.
  - Why rejected: Would exclude a large portion of the audience without high-end NVIDIA hardware or those preferring open-source tools.

## References

- Feature Spec: specs/1-physical-ai-book/spec.md
- Implementation Plan: specs/1-physical-ai-book/plan.md
- Related ADRs: null
- Evaluator Evidence: null
