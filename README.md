# spiralbrowser.com

> Marketing site for **Spiral Browser** — a from-scratch Rust browser, LLM-assisted, human-directed, adversarially reviewed.
>
> Website: <https://spiralbrowser.com> · Engine: <https://github.com/foundryseven/spiral-browser>

This repository contains the source for `spiralbrowser.com`. The browser engine itself lives in [`foundryseven/spiral-browser`](https://github.com/foundryseven/spiral-browser); the methodology, the failure log, and the design canon live there.

## Stack

- **Astro 5** with `@astrojs/cloudflare` (static output, Cloudflare Pages deploy).
- **Tailwind CSS** + a small set of shadcn-style primitives.
- **TypeScript strict**.
- **i18n** via Astro's built-in `i18n` config. Locales: `en` (default), `de`, `fr`, `ja`. Translations fall back to English.
- **Cloudflare Web Analytics** — cookie-less, server-side, one script tag (to be added post-deploy).

## License

AGPL-3.0. See [`LICENSE`](./LICENSE).

## Local development

```bash
npm install
npm run dev
```

The dev server is on `http://localhost:4321`.

## Build

```bash
npm run build
```

The static output is in `dist/`. Cloudflare Pages deploys on push to `main`.

## Deployment

This site is deployed via Cloudflare Pages. The `CNAME` file at the repo root contains the canonical domain (`spiralbrowser.com`). Cloudflare Pages reads it automatically and configures the custom domain.

The Cloudflare Web Analytics beacon is injected at the Pages level after the first deploy.

## Contributing

The site source is open. Issues, typo fixes, and translation PRs are welcome. The methodology and the failure log live in the engine repo.

## See also

- **Engine repository:** <https://github.com/foundryseven/spiral-browser>
- **Methodology:** the `docs/methodology.md` in the engine repo is the source of truth.
- **Failure log:** `docs/failures/` in the engine repo, mirrored at `/failures` on this site.
