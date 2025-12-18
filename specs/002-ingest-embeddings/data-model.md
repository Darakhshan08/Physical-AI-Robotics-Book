# Data Model: Content Chunk

This document describes the data structure for a content chunk, which is the core entity for the ingestion pipeline.

## Entity: ContentChunk

A `ContentChunk` represents a piece of text (500-1000 tokens) extracted from the source book, ready to be vectorized and stored.

### Attributes

| Attribute | Type | Description | Required |
|---|---|---|---|
| `content` | String | The actual text content of the chunk. | Yes |
| `source_url` | String | The URL of the page from which the chunk was extracted. | Yes |
| `chapter` | String | The book chapter the chunk belongs to. | Yes |
| `section` | String | The specific section within the chapter. | Yes |
| `embedding` | Vector | The numerical vector representation of the content from Cohere. | Yes |

### Validation Rules

- `content` must not be empty.
- `source_url` must be a valid URL.
- `embedding` vector dimensionality must match the Cohere model's output (`embed-english-v3.0` produces 1024 dimensions).

### Example

```json
{
  "content": "A humanoid robot is a robot with its body shape built to resemble the human body. The design may be for functional purposes, such as interacting with human tools and environments...",
  "source_url": "https://physical-ai-robotics-book-inky.vercel.app/docs/intro/why-humanoid-robots",
  "chapter": "Introduction",
  "section": "Why Humanoid Robots",
  "embedding": [0.018, -0.032, ..., 0.009]
}
```