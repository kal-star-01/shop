# Shop

AndShop e-commerce storefront: a 50-route React SPA with a live catalog store
(products, cart, wishlist, compare, search), product listing/filtering, product
detail pages, cart/checkout flows, account + vendor dashboards, and content
pages (blog, FAQ, contact, lookbook).

## Tech

- React 18 + React Router 6
- Vite 5
- Swiper 14, owl.carousel (jQuery), ApexCharts
- ESLint 8 + eslint-plugin-boundaries (layered architecture enforcement)

## Structure

```
src/
  main.jsx            entry: mounts app, store provider, router
  App.jsx             routes + layout chrome
  components/         shared UI (header, footer, cards, sliders, modal…)
  data/               product catalog JSON, static constants
  lib/                store context, hooks, utilities
  styles/             global/vendor CSS
  features/<page>/    one slice per page, barrel index.jsx exports the page
```

Dependency direction: features → shared; features never import each other;
entry files wire shared + feature together (enforced by lint).

## Scripts

```
npm run dev      # dev server
npm run build    # production build
npm run preview  # serve the production build
npm run lint     # eslint incl. boundaries rules
```
