# Portfolio TODO

A running list of things still needed to fully personalise the site for Omkar Wagholikar. References file paths and asset names that are currently broken or stale.

## Missing images (referenced in `src/data/resume.tsx`, not present in `public/`)

The site currently references these image paths but the files don't exist in `public/`. Until you drop the assets in, `next/image` and `<AvatarImage>` will fall back to the initials placeholder.

### Work experience logos (`work[].logoUrl`)
- [ ] `public/nice.png` — NiCE Ltd logo (Associate SDE role)
- [ ] `public/pkc.png` — Pune Knowledge Cluster logo (used twice: Project Assistant + Research Associate)
- [ ] `public/generalmills.png` — General Mills India logo

### Project covers (`projects[].image`)
- [ ] `public/edunexus.png` — EduNexus screenshot or banner
- [ ] `public/mavis.png` — Project MAVIS banner
- [ ] `public/brags.png` — BRAGS package logo / hero
- [ ] `public/termion.png` — Termion terminal emulator screenshot (newly added project)

### Hackathon / talk avatars (`hackathons[].image`)
- [ ] `public/fossunited.png` — FOSS United Pune logo
- [ ] `public/cummins.png` — Cummins College of Engineering crest (Innovation '25)
- [ ] `public/circuitverse.png` — CircuitVerse logo

### Already present (no action needed)
- `public/me.png` — avatar
- `public/pict.jpg` — used for Education + Impetus and Concepts hackathon
- `public/ait.png` — Army Institute of Technology

## Content / data

- [ ] **Avatar (`public/me.png`)** — currently inherited from the template. Replace with a recent photo of you.
- [ ] **Resume PDF (`public/resume.pdf`)** — the navbar's Resume link still serves the template's PDF. Export your current resume.tex to `public/resume.pdf`.
- [ ] **Summary & description** (`DATA.summary`, `DATA.description` in `src/data/resume.tsx`) — I paraphrased these from your LaTeX resume. Read once and adjust voice / details.
- [ ] **Age** — `DATA.description` says "22 year old". Confirm or update.
- [ ] **X / Twitter handle** — `DATA.contact.social.X` is a placeholder (`navbar: false`). Either fill in your handle or remove the entry.
- [ ] **Medium handle in contact socials** — currently only linked from the navbar. Consider adding a Medium entry under `DATA.contact.social` with a proper icon (the `Icons` set in `src/components/icons.tsx` doesn't have a Medium SVG yet).
- [ ] **Certifications section** — I added a `DATA.certifications` array, but no UI consumes it yet. Either render a Certifications section in `src/app/page.tsx` or remove the array.
- [ ] **Hackathons not in resume but worth adding** — only InC' 2025, Nexus 2.0, Innovation '25, and CircuitVerse OSS are listed. Add any other competitions / talks you want shown.

## Site cleanup

- [ ] **Internal `/blog` route** — `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx` still exist but the navbar Blog link now goes to Medium. Either delete the internal blog files (and the `content/` MDX dir if present) or repurpose the route.
- [ ] **Unused template assets in `public/`** — many leftover images from the previous owner (e.g. `aerocode.jpg`, `airhockey.png`, `apptware.png`, `arista.png`, `atomic.png`, `banner.png`, `barclays.png`, `bishops.png`, `bmc.png`, `buildspace.jpg`, `compliance-helper.png`, `email_classifier.png`, `google.png`, `hyperbloom.png`, `ib.png`, `idp.png`, `inc.png`, `laurier.png`, `lesa.png`, `lime.svg`, `messy-doodle.svg`, `minimalist.png`, `mitremedia.png`, `nvidia.png`, `pagetalk.png`, `rhythmflows.png`, `shopify.svg`, `sih.png`, `smartaipls.png`, `solarintelligence.png`, `splunk.svg`, `tatapower.png`, `team.jpg`, `tinysql.png`, `waterloo.png`). Safe to delete the ones you don't plan to use.
- [ ] **`package.json` name** — currently `"porfolio"` (typo from template). Rename to `"portfolio-v2"` or similar.
- [ ] **OG/Twitter meta image** — `src/app/layout.tsx` has no explicit `openGraph.images`; you may want to add a `public/og.png`.

## Build / dev environment

- [ ] **Self-hosted Inter font** — I removed `next/font/google` (TLS interception on the corporate proxy was failing the build) and pointed the `--font-sans` CSS variable at a system font stack starting with Inter. If you want guaranteed Inter rendering on machines that don't have it installed, self-host it via `next/font/local` with `.woff2` files dropped in `public/fonts/`.
- [ ] **Security audit** — `npm audit` reports 8 vulnerabilities (1 critical from `next@14.2.4`). Consider `npm audit fix` or bumping to a patched Next.js 14.x.
- [ ] **Old `.eslintrc.json`** — ESLint logs a "circular structure" warning during build (doesn't fail, but spams the output). Worth migrating to flat config or trimming the existing one.

## Recent changes (already done)

- Replaced the template's data with Omkar's profile in `src/data/resume.tsx`.
- Hero greeting in `src/app/page.tsx` now says "Omkar".
- Added the **Termion: Terminal Emulator** project (Rust, egui, nix, PTY).
- Marked the **FOSS United Pune** talk as completed (was "Upcoming Talk", now just speaker entry).
- Navbar Blog link now points at https://medium.com/@Omkar-Wagholikar (was internal `/blog`).
- Widened `HackathonCard.type` to include `"Speaker"` and `"Open Source"`.
- Swapped `next/font/google` → system font stack so the build works behind the corporate TLS-intercepting proxy.
