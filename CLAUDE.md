# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a Turborepo monorepo containing a UI component library built with React 19 and Tailwind CSS 4. The workspace structure is:

- **`apps/web/`**: Next.js application that serves as documentation site and Storybook host
- **`packages/ui/`**: Core UI component library with reusable primitives
- **`packages/typescript-config/`**: Shared TypeScript configurations

Components are built on Radix Primitives with a custom OKLCH-based color system using CSS `color-mix()` functions.

## Development Commands

**Setup:**
```bash
pnpm install  # Install all workspace dependencies
```

**Development:**
```bash
pnpm dev                    # Start all packages in dev mode with Turbopack
pnpm --filter web dev       # Start only the web app
pnpm --filter web storybook # Start Storybook on port 6006
```

**Build & Production:**
```bash
pnpm build                       # Build all packages
pnpm --filter web build          # Build web app and Storybook
pnpm --filter web storybook:build # Build Storybook to public/storybook
```

**Code Quality:**
```bash
pnpm check-types         # TypeScript check across all packages
pnpm biome:check         # Lint and format check
pnpm biome:fix           # Auto-fix lint and format issues
pnpm biome:web:check     # Check only web app
pnpm biome:ui:check      # Check only UI package
```

**Testing:**
```bash
pnpm --filter web vitest run --coverage  # Run tests with coverage
pnpm --filter web vitest                 # Run tests in watch mode
```

Tests are configured in `apps/web/vitest.config.ts` with Storybook integration using Playwright browser provider.

## Code Style & Conventions

- **Formatter**: Biome with 2-space indentation, 100-character lines, single quotes, minimal semicolons
- **Components**: PascalCase for files (`ButtonGroup.tsx`), kebab-case for directories
- **Utilities**: camelCase naming
- **Import organization**: React first, then external packages, then internal imports with type imports grouped separately
- **Pre-commit**: Husky runs lint-staged with Biome auto-fixes

## UI Library Structure

- **Components**: Located in `packages/ui/src/components/[component-name]/`
- **Exports**: Each component has an `index.ts` barrel export
- **Styling**: Global CSS in `packages/ui/styles/` with color tokens and Tailwind configuration
- **Stories**: Co-located `.stories.tsx` files for Storybook documentation

## Package Manager

- **Required**: Node.js >= 22.0.0, pnpm 10.22.0
- **Workspace**: Uses `pnpm-workspace.yaml` for monorepo management
- **Lock**: Committed `pnpm-lock.yaml` for reproducible builds