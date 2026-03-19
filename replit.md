# Coutjure

A React + TypeScript + Vite web application.

## Architecture

- **Frontend**: React 19 + TypeScript + Vite
- **Build Tool**: Vite 6
- **Port**: 5000

## Project Structure

```
/
├── index.html          # Entry HTML
├── src/
│   ├── main.tsx        # React entry point
│   ├── App.tsx         # Root app component
│   ├── App.css         # App styles
│   └── index.css       # Global styles
├── vite.config.ts      # Vite configuration (host: 0.0.0.0, port: 5000, allowedHosts: true)
├── tsconfig.json       # TypeScript project references
├── tsconfig.app.json   # App TypeScript config
├── tsconfig.node.json  # Node TypeScript config
└── package.json        # npm dependencies and scripts
```

## Development

```bash
npm run dev    # Start dev server on port 5000
npm run build  # Build for production
```

## Deployment

Configured as a static site — builds with `npm run build` and serves `dist/`.
