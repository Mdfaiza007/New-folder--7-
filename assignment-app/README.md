# Assignment — Flowkit landing

Production-ready React (Vite) landing page with modular components, CSS modules, responsive layout, and a Docker production image.

> **Figma:** The shared file could not be loaded from this environment (login / timeout). Design tokens live in `src/styles/variables.css` — replace colors, radii, and spacing there to match your Figma styles for a closer pixel match.

## Run locally

```bash
cd assignment-app
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Production preview

```bash
npm run build
npm run preview
```

## Docker (production)

Build the image and run the static site on port **3000**:

```bash
cd assignment-app
docker build -t assignment-app .
docker run --rm -p 3000:3000 assignment-app
```

Then visit `http://localhost:3000`.

The image uses a multi-stage build (`node:22-alpine`), runs `npm ci` and `vite build`, then serves `dist/` with [`serve`](https://www.npmjs.com/package/serve).

## Project structure

```
src/
  assets/          # Static assets (images, etc.)
  components/      # Reusable UI (Button, Card, Navbar, …)
  pages/           # Page-level composition (Home)
  styles/          # Global CSS and design tokens
```

## Stack

- React 19
- Vite 8
- CSS Modules + global tokens
