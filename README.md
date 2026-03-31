# zoziologie.github.io

Main website built with Vite + Vue.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content model

Homepage content is centralized in `src/data/site.js`.

- `navItems`: navbar links (`label`, `targetId`)
- `webapps`: cards (`title`, `url`, `description`, `image`, optional `hoverImage`, `alt`)
- `footer.socialLinks`: social buttons (`label`, `url`, `icon` or `image`)
