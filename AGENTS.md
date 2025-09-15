# Repository Guidelines

## Project Structure & Module Organization
- Monorepo managed by PNPM and Turborepo.
- Apps: `apps/web` (Next.js 15, React 19).
- Packages: `packages/ui` (shared React components), `packages/eslint-config`, `packages/typescript-config`.
- UI components live in `packages/ui/src/*.tsx` (e.g., `button.tsx`, `card.tsx`).

## Build, Test, and Development Commands
- Root (runs via Turborepo):
  - `pnpm dev` — run `dev` across packages (non-cached, persistent).
  - `pnpm build` — build all buildable apps/packages.
  - `pnpm lint` — lint all workspaces.
  - `pnpm format` — Prettier format `**/*.{ts,tsx,md}`.
  - `pnpm check-types` — TypeScript type checks.
- Filter to a project:
  - `pnpm --filter web dev` — start Next.js on port 3000.
  - `pnpm --filter @repo/ui lint` — lint the UI package.
- Production start (web app): `pnpm --filter web start` (after build).

## Coding Style & Naming Conventions
- Use Prettier 3 for formatting; do not hand-format. Run `pnpm format`.
- ESLint configs live in `packages/eslint-config` and are consumed by apps/packages.
- TypeScript 5.9; Node >= 18.
- React components export names in PascalCase; filenames in `packages/ui/src` are lowercase (e.g., `button.tsx`).
- Prefer module boundaries: shared UI belongs in `packages/ui`, app-specific code in `apps/web`.

## Testing Guidelines
- No test runner is configured yet. If adding tests:
  - Co-locate as `*.test.ts(x)` next to sources or in `__tests__/`.
  - Prefer Vitest or Jest; add workspace scripts and a Turbo task.
  - Keep fast unit tests in packages; e2e tests under `apps/web`.

## Commit & Pull Request Guidelines
- Use clear, present-tense messages; Conventional Commits encouraged: `feat:`, `fix:`, `chore:`.
- PRs should include: purpose/summary, linked issues, screenshots for UI changes, and a checklist confirming `lint`, `build`, and `check-types` pass.

## Security & Configuration Tips
- Do not commit secrets. Use `.env.local` under `apps/web` and reference via Next.js `process.env.*`.
- Turbo caches consider `.env*`; rebuild when envs change.
- Avoid adding new root scripts without discussing repo-wide impact.

## Agent Notes
- Respect monorepo boundaries and existing configs.
- Prefer minimal diffs; update docs when changing commands or structure.
