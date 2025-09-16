# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server for all apps (runs on port 3000 for web app)
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Run ESLint across all packages with zero warnings tolerance
- `pnpm check-types` - Run TypeScript type checking across all packages
- `pnpm format` - Format code using Prettier

### Package-specific commands
- `cd apps/web && pnpm dev` - Start only the web app in development mode with Turbopack
- `cd packages/ui && pnpm generate:component` - Generate a new React component in the UI package using Turbo generators

## Architecture

This is a monorepo using:
- **pnpm** with workspaces for package management
- **Turborepo** for build system and task orchestration
- **TypeScript** throughout the codebase
- **React 19** and **Next.js 15** for the web application
- **ESLint 9** with flat config format

### Workspace Structure

```
├── apps/
│   └── web/                 # Next.js application (main app)
└── packages/
    ├── ui/                  # Shared React components library
    ├── eslint-config/       # Shared ESLint configurations
    └── typescript-config/   # Shared TypeScript configurations
```

### Component Architecture

- **UI Package**: Components in `packages/ui/src/*.tsx` are exported using path mapping (`"./*": "./src/*.tsx"`)
- **Component Pattern**: UI components follow a simple functional component pattern with TypeScript interfaces
- **Import Pattern**: Web app imports UI components as `@lesenelir/ui/component-name`

### Configuration Packages

- **ESLint Config**: Provides multiple configurations (`base`, `next-js`, `react-internal`) with Turbo plugin integration
- **TypeScript Config**: Provides specialized configs (`base.json`, `nextjs.json`, `react-library.json`) for different package types
- **Strict Linting**: All packages use `--max-warnings 0` ensuring zero linting warnings

### Key Technologies

- **Next.js 15** with Turbopack in development
- **React 19** with new concurrent features
- **Tailwind CSS**, **Radix UI**, and **shadcn/ui** for styling and components
- **Storybook** for component development and documentation

### Development Workflow

1. The monorepo uses Turborepo's dependency graph for efficient builds and caching
2. All packages share common ESLint and TypeScript configurations
3. Type checking and linting run across the entire workspace
4. Components can be generated using `turbo gen react-component` in the UI package