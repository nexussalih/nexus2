# Architecture

Nexus AI is designed as a modular monolith for the first production stage. This keeps deployment and operations manageable while preserving clear domain boundaries.

## Domains

- Identity and access
- Company and organization
- Product master data
- Inventory and warehousing
- Sales and profitability
- Purchasing and supplier management
- Demand forecasting
- Supply planning
- Commercial AI and recommendations

## Technology

- Next.js App Router and TypeScript
- PostgreSQL
- Prisma ORM 6
- REST/route handlers initially
- Python forecasting service introduced after baseline models are validated
- n8n for integrations and scheduled workflows

## Data principles

- Every operational record is scoped to a company.
- Inventory is recorded per warehouse and product.
- Financial values use decimal database types.
- Transactions are preserved; balances are derived and reconciled.
- Forecasts record model name, horizon and confidence range.
