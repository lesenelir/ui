# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React 19 UI component library built on Radix Primitives with Tailwind CSS 4, using an OKLCH-based color system with `color-mix()` for natural color blending. Key differentiator from shadcn/ui: separate `variant` (structural) and `tint` (color) props.

## Commands

```bash
# Install dependencies (requires Node >=22, pnpm 10)
pnpm install

# Development
pnpm dev                           # Run all workspaces
pnpm --filter web dev              # Next.js site at localhost:3000
pnpm storybook                     # Storybook at localhost:6006

# Build
pnpm build                         # Build all (includes static Storybook to apps/web/public/storybook)

# Type checking
pnpm check-types                   # All workspaces
pnpm --filter @lesenelir/ui check-types

# Linting/Formatting (Biome)
pnpm biome:check                   # Check all
pnpm biome:fix                     # Fix all
pnpm biome:ui:check                # UI package only
pnpm biome:ui:fix

# Testing
pnpm --filter web vitest run       # Headless Vitest with Playwright

# Scaffold new component
pnpm --filter @lesenelir/ui generate:component "ComponentName"
```

## Architecture

**Monorepo Structure (Turborepo + pnpm workspaces):**
- `apps/web` - Next.js 15 documentation site with Storybook
- `packages/ui` - Component library (`@lesenelir/ui`)
- `packages/typescript-config` - Shared TypeScript configs

**Component Pattern:**
- Components in `packages/ui/src/components/{name}/`
- Each component folder has `index.ts` (exports) and `{name}.tsx` (implementation)
- Uses `class-variance-authority` (cva) for variant styling
- Components use `data-slot` attributes for styling hooks
- Props separate `variant` (structure) from `tint` (color)

**Styling System:**
- Theme CSS in `packages/ui/styles/` - `headwind.css` (Tailwind theme), `main.css` (animations/utilities)
- OKLCH color tokens: `--color-bg`, `--color-fg`, `--color-ac` (accent), `--color-hl` (highlight)
- All Tailwind colors redefined using `color-mix()` with `--mix-factor` and `--mix-base` variables
- Custom shadows derive from `--color-ac` and `--color-bg-rev`

**Import Conventions:**
- Components: `import { Button } from '@lesenelir/ui/button'`
- Hooks: `import { useMediaQuery } from '@lesenelir/ui/hooks'`
- Utils: `import { cn } from '@lesenelir/ui/lib/utils'`
- Styles: `import '@lesenelir/ui/styles/main.css'`

## Code Style

- Biome: 2-space indent, 100-char lines, single quotes, ES5 trailing commas, semicolons as needed
- PascalCase for components/directories, `use*` for hooks
- Prefer type-only imports, avoid default exports in shared UI
- Icons from Tabler via `@egoist/tailwindcss-icons` (e.g., `i-tabler-loader-2`)

## Commit Convention

Use Conventional Commits: `feat:`, `fix:`, `chore:` with optional scopes (e.g., `feat(button): add loading state`)
