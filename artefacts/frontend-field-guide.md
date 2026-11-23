# Choosing a frontend for coding agents

**For a small utility, start with HTML, CSS and vanilla TypeScript. For an interactive app with several connected views, my default is React + TypeScript with Vite and React Router.** These are engineering judgments. No cross-framework agent benchmark underlies this guide.

Agents benefit from a predictable place to make a change, types that catch mistakes, documentation matching the installed version, and a browser test that proves the user flow works. Pick one example feature for the agent to follow. In React especially, decide how routes, forms and data fetching work before each feature grows its own convention.

| When the product needs… | A good starting point |
| --- | --- |
| A calculator, a form or independent controls | Vanilla JS or TS with native DOM events. Add jQuery when a valuable plugin or existing codebase warrants it. |
| Shared state across interactive views | React + TS. Consider Vue / Nuxt for template-oriented components, or SvelteKit for compact components and official agent tooling. |
| Server-rendered React with integrated routing | Next.js. Its dev server exposes errors and route information to agents. Review where code runs and how data is cached. |
| Strong conventions across a large application | Angular. Its CLI, framework conventions and official agent guidance give separate changes a common structure. |
| Content pages with isolated interactive widgets | Astro with islands. Reconsider the boundaries if many widgets routinely share live state. |

**State and rendering.** Keep a value local until multiple views need it. With vanilla TS, Zustand's `zustand/vanilla` store lets event handlers call named actions and views subscribe to changes. Render the initial value, update the affected DOM nodes and unsubscribe when a view is removed. Derive totals from source data. Nano Stores suits small independent stores. Signals Core suits linked calculations. For dynamic templates, standalone lit-html can handle updates. Once you are defining routing, mounting and cleanup conventions across screens, an established framework can save maintenance work.

**Rust and performance.** Leptos combines reactive state and rendering. Signals and keyed lists help keep edits local as a UI grows. A small JS app can update the same DOM node directly and ship less code. Measure cold startup and a representative interaction on a target device. If image processing or another calculation dominates, benchmark a Rust/Wasm module behind a TypeScript UI. Rust's compiler gives agents feedback about ownership and types. Browser tests still need to verify the experience.

**Desktop delivery.** Tauri can package vanilla TS or a client-rendered Leptos UI in a desktop window, with native Rust for local operations. Ship a build per target. Windows commonly uses an installer and WebView2, macOS an app bundle, and Linux can use a single-file AppImage. For a desktop-first Rust product, also consider Dioxus.

**Official reading:** [React framework choices](https://react.dev/learn/creating-a-react-app) · [Svelte agent tools](https://svelte.dev/docs/ai/overview) · [Zustand vanilla](https://zustand.docs.pmnd.rs/reference/apis/create-store) · [standalone lit-html](https://lit.dev/docs/libraries/standalone-templates/) · [Leptos book](https://book.leptos.dev/) · [Tauri distribution](https://v2.tauri.app/distribute/).
