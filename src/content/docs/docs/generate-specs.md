---
title: Generate Specs
description: The Generate Specs feature creates an OpenAPI/Swagger specification automatically from endpoints discovered by ApiWatchdog. It turns observed endpoints, parameters, and sample payloads into a shareable, versioned API specification ready for documentation, testing, and client generation.
---
The **Generate Specs** feature creates an OpenAPI/Swagger specification automatically from endpoints discovered by ApiWatchdog. It turns observed endpoints, parameters, and sample payloads into a shareable, versioned API specification ready for documentation, testing, and client generation.

---

- AI-powered generation of OpenAPI/Swagger specs from discovered endpoints (logs, Postman collections, OpenAPI fragments, response samples).
- Provides coverage metrics and parameter counts to indicate how complete the generated spec is.
- Export options include downloading YAML and copying the spec to clipboard.
- Endpoint details (parameters, responses, examples) are shown in an accordion style for quick inspection.

---

## Summary Banner / Key Metrics

The generation results banner provides these quick metrics:

- **Endpoints** — Total number of endpoints included in the generated specification.
- **Parameters** — Total number of unique parameters inferred across all endpoints.
- **Coverage** — Percentage of discovered endpoints included in the spec (higher is better).

Use these metrics to assess whether additional samples/files are needed to improve specification completeness.

---

## Export & Actions

- **Download YAML** — Download the generated OpenAPI specification as a YAML file.
- **Copy Spec** — Copy the full spec (YAML/JSON) to clipboard for pasting into editors or other tools.

Typical next steps after export:
- Open in **Swagger Editor** or **Swagger UI** for visualization and validation.
- Import into **Postman** or other API tooling.
- Use **OpenAPI Generator** to scaffold client or server code.

---

## Generated Specification Card

The generated spec card shows:
- **Title** — the generated API name (e.g., the collection name or inferred title).
- **Description** — short explanation that the spec was generated from discovered files.
- **Version** — the spec version assigned at generation (semantic versioning).

---

## Endpoints Listing (Generalized)

Each endpoint entry contains:

- **Method** — HTTP method (GET, POST, PUT, PATCH, DELETE).
- **Path** — templated path (e.g., `/resources/{id}`).
- **Short description** — human-readable explanation.
- **Expandable details**:
  - **Parameters** — path/query/body/header parameter names with type and `required` flag.
  - **Responses** — HTTP status codes with short descriptions and optionally sample response bodies.
  - **Request/Response examples** — extracted from logs or samples to illustrate actual usage.

---

## Example Endpoint Entry (Generalized)

**Endpoint:** `POST /api/resource`  
**Description:** Create a new resource.

**Parameters**
- `name` — `string` (required)  
- `metadata` — `object` (optional)

**Responses**
- `201` — Resource created successfully (sample body/schema included)
- `400` — Validation error

---

## How it works (high level)

1. ApiWatchdog discovers endpoints and captures request/response examples during file analysis.
2. The Generate Specs engine infers paths, parameters, request/response schemas, and status codes.
3. A draft OpenAPI/Swagger spec is produced and surfaced in the UI for inspection.
4. Users can download the YAML, copy the spec, or review endpoint-level details and examples.
5. If coverage is incomplete, upload more files (different environments or error examples) and re-generate.

---

## Validation & Tools

Validate and iterate on the generated spec using:
- **Swagger Editor** — live editing and validation.
- **Swagger UI** — host the spec for interactive API docs.
- **OpenAPI Generator** — generate client/server code.
- **API linter / spectral** — apply best-practice rules and fix warnings.

---

## Best Practices to Improve Generated Specs

- Upload request/response examples from multiple environments (dev/staging/prod).
- Include both successful and error responses to enable complete response schemas.
- Ensure path parameters are present in request logs (e.g., `/resource/123`) so they can be inferred as path params.
- Provide representative body payloads (cover optional and required fields).
- Add a version or notes in your sources to produce better spec metadata.

---

## Example: Minimal OpenAPI Snippet (generalized)

```yaml
openapi: 3.0.0
info:
  title: Generated API
  version: 1.0.0
  description: OpenAPI spec generated from discovered endpoints
paths:
  /items:
    get:
      summary: List items
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
  /items:
    post:
      summary: Create item
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                description:
                  type: string
      responses:
        '201':
          description: Item created
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  name:
                    type: string
```

---

## Next Steps & Integrations

- Export the generated spec and validate it in Swagger Editor.
- Publish the spec to internal documentation portals or API gateways.
- Use the spec to generate SDKs and server stubs for faster onboarding.
- Re-run generation after adding more sample files to improve coverage.

---

## Troubleshooting

- **Low coverage:** Upload additional logs/samples with missing endpoints or responses.
- **Incorrect parameter types:** Provide representative examples for body and query parameters.
- **Missing responses:** Ensure your logs contain full response bodies and status codes.

---

## Summary

The **Generate Specs** feature accelerates API documentation by converting real-world observed traffic and files into a usable OpenAPI spec. It reduces manual spec authoring, provides visibility via coverage and parameter metrics, and gives convenient export options to integrate with the broader API lifecycle.

