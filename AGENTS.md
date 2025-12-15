# Repository Guidelines

## Project Structure & Module Organization
- `apps/web`: Next 15 site with docs/Storybook; public assets in `public/`, routing/config in `next.config.ts`.
- `packages/ui`: React 19 component library on Radix + Tailwind 4; components in `src/components/*`, shared hooks in `src/hooks`, theme files in `styles/*.css`.
- `packages/typescript-config`: Shared TS configs for the app and library (strict, DOM-ready, module-next settings).
- Root configs: `turbo.json` (pipelines), `pnpm-workspace.yaml` (workspace), `biome.json` (lint/format). Keep changes aligned with these.

## Build, Test, and Development Commands
- `pnpm install` (Node >=22, pnpm 10) to bootstrap all workspaces.
- `pnpm dev` runs Turborepo `dev` tasks (Next app via Turbopack).
- `pnpm --filter web dev` starts the site at `http://localhost:3000`; `pnpm --filter web storybook` serves Storybook at `http://localhost:6006`.
- `pnpm build` builds everything; `pnpm --filter web build` also outputs static Storybook to `apps/web/public/storybook`.
- `pnpm check-types` or `pnpm --filter @lesenelir/ui check-types` for TypeScript validation.
- `pnpm biome:check` / `pnpm biome:fix` for linting/formatting (scoped variants exist for `web` and `@lesenelir/ui`).
- `pnpm --filter @lesenelir/ui generate:component "ComponentName"` scaffolds a new component folder.

## Coding Style & Naming Conventions
- Biome enforces 2-space indents, 100-char lines, single quotes, ES5 trailing commas, and semicolons only as needed.
- TypeScript is strict; prefer type-only imports, keep React components typed with explicit props, and avoid default exports in shared UI.
- Components and directories use `PascalCase`; hooks start with `use*`; local helpers can use `camelCase`.
- Tailwind 4 + OKLCH tokens live in `styles/`; keep variant/tint props distinct when adding component APIs.

## Testing Guidelines
- Vitest with the Storybook addon is configured in `apps/web/vitest.config.ts` (Playwright-powered browser runs).
- Execute `pnpm --filter web vitest run` for the headless suite; colocate tests with stories when possible.
- Add/extend Storybook stories for new UI states; keep fixtures deterministic and accessible (keyboard/focus/color).

## Commit & Pull Request Guidelines
- Use Conventional Commit prefixes seen in history (`feat:`, `fix:`, `chore:`); scopes welcome. Example: `feat(button): add loading state`.
- PRs should explain intent, link related issues, and list verification commands.
- For UI changes, include before/after screenshots or a Storybook URL and call out accessibility implications (focus order, contrast, keyboard support).
