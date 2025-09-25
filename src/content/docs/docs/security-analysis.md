---
title: Security Analysis
description: The **Security Analysis** view surfaces security findings discovered from analyzed API files and runtime logs. It groups findings by severity, shows affected endpoints, provides evidence, and recommends remediations — enabling fast triage and secure development.
---

The **Security Analysis** view surfaces security findings discovered from analyzed API files and runtime logs. It groups findings by severity, shows affected endpoints, provides evidence, and recommends remediations — enabling fast triage and secure development.

---

- Issues are grouped by **severity levels**: High, Medium, and Low.  
- A summary dashboard highlights the total count of issues by severity.  
- Findings are filtered by severity for focused analysis.  

---

## Findings

Each finding includes:

- **Title & Severity** — short summary of the issue.  
- **Endpoint Affected** — the specific API path involved.  
- **Description** — explanation of the issue and its potential impact.  
- **Category Tag** — classification of the issue (e.g., authentication, authorization, input validation).  
- **View Details** — expands to show possible remediation steps.  

---

## Finding Details (Expanded View)

When expanded, a finding typically includes:

### Remediation Steps
Actionable fixes such as:
- Adding authentication or authorization controls  
- Using token-based authentication (e.g., JWT)  
- Validating API keys for external access  
- Implementing rate limiting to prevent abuse  

### Learn More
Links to external references or best-practice documentation for deeper understanding.  

---

## Best Practices

- Address **High severity findings first**, as they represent the most critical risks.  
- Use the **Learn More** links to align fixes with security best practices.  
- Re-run security analysis after remediation to confirm that issues are resolved. 