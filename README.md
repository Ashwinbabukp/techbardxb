# Techbar Technology — Next.js rebuild

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/` — App Router entry (layout, page, global styles)
- `components/` — Header (with hover/tap dropdowns for Products & Services),
  Hero (with the Three.js AI network sphere), About, Products, Services,
  Process, Contact, Footer
- `components/AiNetworkSphere.tsx` — Three.js particle-network visual, client-only
- `lib/data.ts` — Product list, service list, features, process steps (single
  source of truth also feeding the nav dropdowns)
