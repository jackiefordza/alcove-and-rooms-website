# alcove-and-rooms-website

Static website for The Alcove & Rooms — a café, bar, art workshop and craft shop
at 206 High Street, Elstow, Bedfordshire, MK42 9XU.

No frameworks or build step — plain HTML, CSS and JS in `alcove-site/`.

## Preview locally

Requires only Node.js (no packages to install):

```
npm run dev
```

Then open http://localhost:8080 in your browser.

Alternatively, with Python 3:

```
cd alcove-site
python3 -m http.server 8080
```

## Structure

- `alcove-site/index.html` — homepage
- `alcove-site/menu.html` — menu (built from `menu-data.json`)
- `alcove-site/about.html` — our story
- `alcove-site/events.html` — events (placeholder)
- `alcove-site/art-studio.html` — art studio & craft shop (placeholder)
- `alcove-site/contact.html` — address, email, socials & map
- `alcove-site/css/styles.css` — design system & all page styles
- `alcove-site/js/script.js` — mobile nav + menu tabs
- `alcove-site/menu-data.json` — source menu data
