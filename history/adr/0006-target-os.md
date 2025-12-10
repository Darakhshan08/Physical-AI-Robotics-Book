# ADR-0006: Target OS

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-07
- **Feature:** 1-physical-ai-book
- **Context:** Robotics development often involves specific operating system requirements and dependencies. A clear decision is needed on the primary target OS for the book's content and examples.

## Decision

The book will focus primarily on **Ubuntu 22.04 LTS** as the target operating system.

## Consequences

### Positive

- **Standardization**: Ubuntu is a de facto standard in robotics (especially with ROS 2), ensuring a consistent development and deployment environment for readers.
- **Simpler Content**: Avoids the complexity of documenting and supporting multiple OS-specific installation and configuration steps.
- **Maximized Compatibility**: Ensures compatibility with ROS 2 Humble, Gazebo, and NVIDIA Isaac tools which are typically optimized for Ubuntu.

### Negative

- **Limited Audience**: Excludes users who primarily work on Windows, macOS, or other Linux distributions without providing explicit guidance for them.
- **Potential for VM overhead**: Users on other operating systems will need to set up a virtual machine or dual-boot, which adds an extra layer of complexity to their setup.

## Alternatives Considered

- **Cross-platform support (Windows, macOS, other Linux distros):**
  - Pros: Broader audience reach.
  - Cons: Significantly increases content creation and maintenance complexity due to OS-specific instructions, potential for platform-specific bugs and inconsistencies.
  - Why rejected: The overhead of supporting multiple operating systems would dilute the quality and depth of the core robotics content, which is already substantial.

## References

- Feature Spec: specs/1-physical-ai-book/spec.md
- Implementation Plan: specs/1-physical-ai-book/plan.md
- Related ADRs: null
- Evaluator Evidence: null