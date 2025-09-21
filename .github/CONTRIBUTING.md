# Contributing to HeapFox

Thanks for your interest in contributing! This repo is a pnpm + Turborepo monorepo with a Next.js app (`apps/landing`) and a shared UI package (`packages/ui`).

## Prerequisites

- Node.js 20+
- pnpm 9 (use Corepack: `corepack enable`)
- Git

## Getting started

1. Fork and clone the repo
2. Enable Corepack and install deps at the workspace root
3. Run the app

### Commands (run at repo root)

- Enable Corepack: `corepack enable`
- Install deps: `pnpm -w install`
- Dev (landing): `pnpm run dev:landing`
- Build (landing): `pnpm run build:landing`

### Package-specific

- Lint UI package: `pnpm --filter @heapfox/ui run lint`
- Type-check UI package: `pnpm --filter @heapfox/ui run type-check`

## Branching and PRs

- Create feature branches from `main`
- Write clear commits and PR descriptions
- Keep PRs focused and small when possible
- Ensure CI is green (type-check, build)

## Code style

- EditorConfig and Prettier are recommended; VS Code settings are included
- Prefer TypeScript and strict types where possible

## Reporting issues

- Use the Issue Templates (Bug / Feature)
- Provide repro steps, expected/actual results, and environment details

## Security

For vulnerabilities, please do not open a public issue—follow the process in [SECURITY.md](./SECURITY.md).

## License

By contributing, you agree that your contributions will be licensed under the repository’s LICENSE.
