# Repository Guidelines

## Project Structure & Module Organization
The workspace uses Turborepo with `pnpm-workspace.yaml` grouping `apps/*` and `packages/*`. `apps/web` is the Next.js host; routes live under `src/app`, while shared UI for pages sits in `src/components`. Reusable primitives live in `packages/ui/src/components`, with supporting helpers in `packages/ui/src/lib`. TypeScript base configs are centralized in `packages/typescript-config` so new packages can extend them. Static assets (favicons, Storybook build) stay inside each app’s `public/` folder.

## Build, Test, and Development Commands
Run `pnpm install` once per clone to hydrate all workspaces. Use `pnpm dev` for a multi-package dev server (Turbo spawns `apps/web` via Turbopack). Ship builds with `pnpm build`, which runs every package’s `build` task and emits the Next.js output. For focused work, `pnpm --filter web dev` starts only the web app, and `pnpm --filter web storybook` serves component docs. Execute unit/interaction tests with `pnpm --filter web vitest run --coverage` and regenerate Chromatic assets with `pnpm --filter web storybook:build`.

## Coding Style & Naming Conventions
Biome enforces formatting: two-space indentation, 100-character lines, single quotes, and no semicolons unless required. Prefer PascalCase for components (`ButtonGroup.tsx`), camelCase for utilities, and kebab-case for directories. Keep Tailwind classes grouped by purpose (layout → spacing → color) and emit shared tokens through `packages/ui/styles/*.css`. Let lint-staged (via `.husky/pre-commit`) fix minor issues; commit only clean trees.

## Testing Guidelines
Vitest is configured in `apps/web/vitest.config.ts` with Storybook integration and Playwright-powered DOM shims. Place specs beside source as `ComponentName.test.tsx` so Vitest can pick them up. Run the suite locally with `pnpm --filter web vitest`, adding `--run` in CI-style loops, and track coverage through V8 reports in `coverage/`. Visual regressions should be exercised in Storybook; capture new states before opening PRs.

## Commit & Pull Request Guidelines
Follow Conventional Commits (`feat:`, `fix:`, `chore:`) as seen in recent history, and pair them with matching branch prefixes (`feat/*`, `fix/*`) so Biome CI triggers. Squash commits that only address review feedback. PRs should describe scope, testing evidence, and link to tracking issues; include screenshots or Chromatic URLs for UI changes. Ensure Biome (`pnpm biome:check`) and relevant tests are green before requesting review.

## Tooling & CI Notes
CI runs `biome ci .` on pushes and PRs targeting `master`; replicate locally with `pnpm biome:check`. Husky’s pre-commit hook executes `pnpm lint-staged`, so keep staged files small and staged in logical groups. Node 22 and `pnpm@10.18.1` are required—use `corepack enable` if needed. EOF
