# ADR-0003: Programming Language

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-07
- **Feature:** 1-physical-ai-book
- **Context:** The book covers AI and robotics, which can be implemented in various languages. A primary programming language needs to be chosen for the majority of code examples and tutorials.

## Decision

The primary programming language for the book's code examples will be **Python (using rclpy for ROS 2 integration)**.

## Consequences

### Positive

- **Accessibility**: Python has a gentler learning curve, making it accessible to students and developers with existing Python backgrounds (as per target audience).
- **Rapid Prototyping**: Python is excellent for rapid development and iteration, which is beneficial for AI and robotics experimentation.
- **AI Ecosystem**: Strong existing ecosystem of AI/ML libraries and tools in Python.
- **ROS 2 Integration**: `rclpy` provides robust and idiomatic Python bindings for ROS 2.

### Negative

- **Performance**: Python can be slower than compiled languages like C++ for performance-critical robotics tasks (e.g., real-time control loops).
- **Lower-Level Access**: Might abstract away some lower-level hardware interactions that C++ could expose.

## Alternatives Considered

- **C++ (using rclcpp for ROS 2 integration):**
  - Pros: High performance, direct hardware access, traditional language for robotics.
  - Cons: Steeper learning curve for beginners, longer development cycles, less accessible for the target audience of Python-background students.
  - Why rejected: While powerful for performance-critical applications, it would raise the barrier to entry for the book's target audience and slow down the learning process, which is counter to the book's goal.

## References

- Feature Spec: specs/1-physical-ai-book/spec.md
- Implementation Plan: specs/1-physical-ai-book/plan.md
- Related ADRs: null
- Evaluator Evidence: null
