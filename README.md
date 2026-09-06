# Everest Trading Co. — Website

Next.js 14 (App Router) site for Everest Trading Company, a Kirloskar/Stihl
water pump and motor dealer in Gandhi Nagar, Jammu.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. This project has **not** been built or run in
this sandbox — the sandbox has network egress disabled, so `npm install`
cannot reach the npm registry here. Run `npm run build` yourself once after
`npm install` to confirm it compiles before you deploy; if anything doesn't
compile, send me the error output and I'll fix it directly.

## Structure

```
app/
  layout.js       — fonts, metadata
  page.js         — assembles all sections
  globals.css     — Tailwind layers, base styles, reduced-motion support
components/       — one file per section (Nav, Hero, Products, etc.)
lib/business.js   — all real business data in one place (edit here to
                    update phone number, hours, products, reviews, FAQs)
public/images/    — product and storefront photos
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy on Vercel

1. Go to vercel.com → **New Project**
2. Import the GitHub repo you just pushed
3. Framework preset auto-detects as **Next.js** — leave build settings default
4. Deploy

No environment variables are required — everything is static data in
`lib/business.js`.

## Editing content

- **Phone, hours, address, GST**: `lib/business.js` → `business` object
- **Products**: `lib/business.js` → `products` array (swap images in
  `public/images/` and update the `image` path)
- **Reviews**: `lib/business.js` → `reviews` array
- **FAQ**: `lib/business.js` → `faqs` array

## Design notes

Palette and type are deliberately industrial/catalog-styled (charcoal, brass,
rust, warm paper background) rather than a generic tech-startup navy/aqua
look, to match a real hardware shop rather than a water-tech SaaS product.
Fraunces (serif) is used for headings, Inter for body text.
