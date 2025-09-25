---
title: Full Report
description: The Full Report section lets you generate, package, and download comprehensive artifacts derived from your API analysis. Use this area to produce shareable specifications, diagrams, security reports, and full documentation for stakeholders and tooling integrations.
---
The **Full Report** section lets you generate, package, and download comprehensive artifacts derived from your API analysis. Use this area to produce shareable specifications, diagrams, security reports, and full documentation for stakeholders and tooling integrations.

---

- Compile a **full report** containing API specs, sequence diagrams, security findings, and complete documentation.
- Download individual artifacts: OpenAPI spec (YAML/JSON), sequence diagrams (SVG/PNG), security report (PDF), and consolidated documentation (Markdown/PDF).
- Summary metrics provide a quick snapshot of endpoints, flows, and security issues included in the generated artifacts.

---

## Summary Banner

The top banner (after generation) typically displays:

- **Generation status** (e.g., Specification Generated Successfully).
- **Total Endpoints** — how many endpoints are included.
- **API Flows** — number of sequence diagrams created.
- **Security Issues** — number of findings included in the security report.

These metrics let you quickly judge coverage and whether more samples are needed for better spec completeness.

---

## Generate Full Report

- Click **Generate Full Report** to create a packaged report that may include:
  - OpenAPI / Swagger specification (YAML/JSON)
  - Sequence diagrams for flows (SVG/PNG)
  - Security analysis report (PDF)
  - Complete API documentation (Markdown/PDF)
- Generated reports should be timestamped and versioned for traceability.

---

## Available Downloads

Each artifact in the downloads list typically contains:

### OpenAPI Specification
- **Format:** YAML
- **Contents:** Complete API spec with paths, parameters, schemas, and example requests/responses.
- **Use:** Import into Swagger UI/Editor, Postman, or client/server generators.

### Sequence Diagrams
- **Format:** SVG / PNG
- **Contents:** Visual flow diagrams (one per flow) illustrating request/response sequences.
- **Use:** Embed in documentation, architecture reviews, or presentations.

### Security Analysis Report
- **Format:** PDF
- **Contents:** Detailed findings with severity, evidence, recommended remediation, and metadata.
- **Use:** Share with security teams, create tickets in issue trackers, or provide compliance evidence.

### Complete API Documentation
- **Format:** PDF
- **Contents:** Consolidated documentation containing endpoint descriptions, sample requests/responses, flow visuals, and security summaries.
- **Use:** Hand over to engineering, product, or documentation teams.

---

## Typical Report Contents (example structure)

1. Title / metadata (name, version, timestamp)
2. Executive summary (KPIs: endpoints, flows, security issues)
3. OpenAPI specification (attached or embedded)
4. Endpoint listing with descriptions and examples
5. Flow diagrams (embedded images)
6. Security findings and recommendations
7. Appendices (raw evidence, original files used)

---

## How to Use

1. Ensure your upload set includes representative samples (success/error responses, logs from different environments).
2. Click **Generate Full Report** to compile the artifacts.
3. Download the individual artifacts you need or download the full package.
4. Import the OpenAPI spec into your tooling (Swagger Editor, Postman).
5. Share the security report with the security/ops team and create remediation tickets.

---

## Export & Integrations

- **OpenAPI** -> Swagger UI, Postman, client code generators.
- **Sequence Diagrams** -> docs sites, slides, internal wikis.
- **Security Report** -> export to issue trackers (Jira/GitHub) as tickets.
- Prefer artifact versioning and timestamps to enable reproducible audits.

---

## Security & Privacy Considerations

- **Redact sensitive data** before exporting (API keys, PII, tokens).
- When sharing, restrict access to authorized stakeholders only.
- Keep an audit trail (who generated and downloaded reports).

---

## Best Practices to Improve Reports

- Upload files from multiple environments (dev/staging/prod).
- Include both normal and error responses to enable richer schema inference.
- Re-run generation after adding missing examples or addressing findings to improve coverage.


