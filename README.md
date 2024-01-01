# Vue 3, Typescript & SQL Assessment

This is a monorepo for a fullstack typescript app, using Nuxt 3 on the frontend. It runs using [Turborepo](https://turbo.build/repo) & [pnpm](https://pnpm.io) Workspaces features.

Main technologies used in this app are:
- TRPC API Server (attached to fastify)
- Drizzle ORM
- Zod for both API & UI validation, with VeeValidate integration in the frontend
- Nuxt 3 & Vue 3, with typescript
- Tailwindcss
- Trpc Client, with TanStack Query to wrap the client

### Monorepo Structure

This monorepo is broken down into two types of packages:

- **Apps** - These are the applications that are deployed and have a runtime. They are located in the `apps` directory. They usually don't import other apps.
- **Packages** - These are packages that are usually used by the apps, and don't have an independant runtime. They are located in the `packages` directory.

### Using The Monorepo

Requirements & steps to run the app:

- Node v18+, pnpm v8+ (recommended to install using corepack)
- `pnpm install`
- Postgres with an Empty DB setup mapped to the URL you will use at `./apps/api/src/env.config.ts`
- Populate the DB schema with `pnpm db:push`, from within the api app directory
- Run the app using `pnpm dev` on the root directory

### The Assessment

The app currently has a basic user accounts system with a few core auth features.

We want to introduce three new resource types in the API/DB, along with frontend UI that allows the user to interact with those resources:

- Teams: A team is the definition which can own other resource types, and controls access permissions. The user who creates the team is the team owner.
- Team Tasks: Team Owners can create tasks, mark tasks as done, or delere tasks.

Bonus (if you have time):
- Team Members Feature: Team owners can add or remove users to a team to grant them access. To keep things simple, we will assume a user can be directly added to a team just by their email directly by the team owner.
- Team Members can create tasks, mark tasks as done, or mark them as deleted. But only a team owner can perform a true delete on the record.

### Evaluation Criteria

1. Typesafety & Formatting: at a minimum, the app should still run `pnpm typecheck` & `pnpm lint` without any errors/warnings.
2. Architecture: Components, functions, or any other definitions should exist in the right package. You're not expected to create any new packages, just to use/extend the existing ones when needed.
3. Code Style Criteria: names of components, functions, and anything else along the way should be self-documenting. Names should be clear and consistent.
4. Design: You are expected to use/extend the UI package available in the repo as needed. Beauty of the design of the implementation is part of the evaluation. It would be okay if you needed to add a components UI package you're used to and wrap it with a simpler API if needed.
5. UX: User navigation & app state should make sense at all points in time. Resembling loading state correctly, intuitive UI/UX, should be seamless to use.

Thank you.

### Bonus Question

**If you were to implement testing for the above stated app. What kind of testing framework would you use and why? What are the main test cases you would want to write tests for?**

*Note: No coding is expected for this. You can just leave an answer in a couple of paragraphs below.*

Answer:
