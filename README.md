# Nexus AI — Sprint 1 Foundation 1

Enterprise commercial intelligence platform for sales, inventory, demand forecasting, and purchase planning.

## Included in this release

- Executive dashboard
- Demo login and application shell
- Product and variant catalogue
- Inventory position and stock-risk view
- Supplier management view
- Purchase-order control view
- Commercial analytics view
- Demand forecast and suggested purchasing view
- Administration settings
- Prisma 6 enterprise data model and demo seed
- Vercel deployment configuration

## Demo access

Open `/login` and use the prefilled demo credentials. Authentication is intentionally simulated in Sprint 1; database-backed user access is planned for Sprint 2.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Database setup

Copy `.env.example` to `.env`, set `DATABASE_URL`, then run:

```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

## Vercel

Import the GitHub repository into Vercel. The project includes `vercel.json`; Vercel should detect Next.js after the code is pushed.

## Release status

UI and source structure are complete for Sprint 1. Package installation could not be fully executed in the artifact environment because the external npm operation timed out; run `npm install && npm run build` after upload to GitHub or locally.
