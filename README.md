# Marwan Wareth — Portfolio (marwanwareth.com)

Personal site for **Marwan Wareth — Creative Director & Visual Artist**, Dubai.
**One file, no dependencies, no Wix, no monthly fees.** Fully yours to edit and host free.

- `index.html` — the entire site (HTML + CSS + JS in one file). Style: **Noir** (dark).
- `img/` — drop your photos, logo and reel poster here; they appear automatically.
- `manifest.json` — home-screen / PWA metadata.

## Switch the style
The site ships in **Noir**. To try the other looks, open `index.html` and change one attribute:
`<div class="site" data-skin="noir" ...>` → `data-skin="mono"` or `data-skin="signal"`.

## Your logo
Drop **two files** in `img/` and the header swaps them automatically per style:
- `img/logo-light.svg` — your **white** logo (used on Noir / dark)
- `img/logo-dark.svg` — a **dark** version (used on Mono / Signal / light)

SVG is best (crisp at any size). PNG works too — just name them `logo-light.png` / `logo-dark.png`
and change the two `'img/logo-'+k+'.svg'` references in the script to `.png`.
Until they exist, the "Marwan Wareth" text wordmark shows — nothing breaks.

## Photos — one list controls everything
All images are driven by a single **`PHOTOS`** list near the bottom of `index.html`
(search for `const PHOTOS`). Each line is:
```js
['photo-03', 'Rooftop Dining', 'Restaurants'],   // file in img/ , caption , tag
```
- **Reorder the site** → reorder the lines. The **first 5** show in *Selected work*
  (the very first is the big wide feature); the rest fill the *Gallery*.
- **Rename a caption** → edit the middle text.
- **Replace a photo** → drop a new image into `img/` with the **same name**
  (e.g. overwrite `img/photo-03.jpg`). Nothing else to change.
- **Add a photo** → add a line to the list + put `img/<name>.jpg` in the folder.

The photos currently in `img/` are named `photo-01.jpg … photo-27.jpg`.
Keep new images web-sized (long edge ~2000px, ~200–800 KB) — or just send them to
me and I'll pull, compress and place them from your Drive.

| Other files | Where it shows |
|------|----------------|
| `img/reel-cover.jpg` *(optional)* | Poster behind the showreel play button |
| `img/og.jpg` | Social-share preview (WhatsApp / LinkedIn), 1200×630 |

## Add your showreel
In `index.html`, find the `#reel` section, un-comment the `<iframe>` line and set its `src`
to your YouTube/Vimeo embed URL, then delete the `.play` + `.meta` divs.

## Edit the words
Plain text in `index.html` — search for what you want to change:
- **Name / roles** — the hero `<h1>` and the `.rot` rotator.
- **Studio / bio** — the `#studio` section.
- **Subjects** — the `.scat` blocks under `#shoot`.
- **Work titles** — the `work` and `idx` arrays in the script.
- **Contact links** — the `#contact` section (set real Instagram / WhatsApp / LinkedIn).

## Preview & host
Open `index.html` in a browser, or serve it: `python3 -m http.server 8080` (from the repo root).
Host free on **Netlify** (drag the folder), **GitHub Pages**, **Cloudflare Pages** or **Vercel** —
custom domain (e.g. `marwanwareth.com`) supported on all of them.
