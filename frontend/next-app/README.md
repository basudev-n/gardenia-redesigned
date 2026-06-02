Next.js 14 blog sample for The Gardenia

Quick start (from frontend/next-app):

1. Install dependencies

```bash
cd frontend/next-app
npm install
```

2. Configure Sanity environment variables in `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

3. Run dev server

```bash
npm run dev
```

Notes:
- This scaffold assumes you have a Sanity dataset with `post` documents and common fields used in queries.
- Uses Tailwind for styling; run `npx tailwindcss init -p` if you need to reconfigure.
- Components are minimal and intended as a starting point to integrate into your Next.js app.
