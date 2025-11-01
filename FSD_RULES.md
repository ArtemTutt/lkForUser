## Feature-Sliced Design (FSD) layers

- app — app shell, providers, routing, global styles, app-wide config
- processes — long-lived business processes (auth flow, onboarding)
- pages — route-level composition of widgets/features/entities
- widgets — page sections composed from features/entities
- features — user-scenarios and actions (search, add-to-cart)
- entities — business domain models (user, product) with UI/data
- shared — cross-cutting stuff (ui, lib, config, api, styles, assets)

Conventions
- One public entry per slice via `index.ts`
- No cross-layer circular deps; depend only downward: app→…→shared
- Use path aliases: `@/app`, `@/pages/...`, `@/shared/ui/...`



