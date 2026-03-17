# Trail of China

Trail of China is a modern, SEO-focused travel planning website built with Next.js, React, TypeScript, and Tailwind CSS. The MVP is designed for first-time international travelers who need clear, practical guidance before visiting China.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Vercel-ready deployment

## Run Locally

1. Install Node.js 20 or newer.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the default framework setting as `Next.js`.
4. Set the production domain to `trailofchina.com` in Vercel.
5. Trigger deploy.

## What To Edit First

- Update shared brand and navigation content in `lib/site-config.ts`.
- Update page copy and featured content in `lib/content.ts`.
- Update global styling tokens in `styles/theme.css`.
- Replace CTA placeholder language when you are ready to add a lead magnet or service.

## Notes

- This MVP uses static content for simplicity and fast deployment.
- Metadata and canonical URLs are already structured around `https://trailofchina.com`.
- The site is organized so more destinations, guides, and itineraries can be added without refactoring the layout system.
