# ADR-0009: Deployment Platform

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-07
- **Feature:** 1-physical-ai-book
- **Context:** The Docusaurus-based technical book needs a reliable, free, and easy-to-manage platform for deployment to make it publicly accessible.

## Decision

The book will be deployed to **GitHub Pages**.

## Consequences

### Positive

- **Free Hosting**: GitHub Pages offers free static site hosting, which is ideal for an open-source educational resource.
- **Version Control Integration**: Seamless integration with the project's Git repository, simplifying CI/CD workflows for publishing updates.
- **Simplicity**: Straightforward setup and configuration, especially for Docusaurus projects.

### Negative

- **Limited Features**: GitHub Pages is primarily for static content; advanced dynamic features are not supported.
- **Domain Configuration**: Custom domain setup can be slightly more involved than dedicated platforms.
- **Build Times**: Dependent on GitHub Actions runner availability and performance.

## Alternatives Considered

- **Vercel:**
  - Pros: Excellent developer experience, powerful CDN, automatic deployments from Git, good for dynamic apps too.
  - Cons: Free tier has limitations, potentially overkill for a static Docusaurus site, could introduce additional configuration overhead.
  - Why rejected: While powerful, GitHub Pages fulfills the core requirement of free static site hosting with strong Git integration, which is sufficient for this project.

- **Netlify:**
  - Pros: Similar to Vercel, good DX, generous free tier, powerful build system.
  - Cons: Similar to Vercel, may offer more than needed for a purely static site, could introduce additional configuration.
  - Why rejected: GitHub Pages provides direct integration with the existing GitHub repository, simplifying the overall workflow.

## References

- Feature Spec: specs/1-physical-ai-book/spec.md
- Implementation Plan: specs/1-physical-ai-book/plan.md
- Related ADRs: null
- Evaluator Evidence: null
