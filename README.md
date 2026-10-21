# nash-portfolio-react

**This repo powers <https://brucequiros18.github.io/> as a React SPA.**
The root also contains the prebuilt output (`index.html`, `404.html`, `assets/`, `images/`)
so GitHub Pages serves it directly via branch deploy — no Pages reconfiguration needed.
Source of the original static site is preserved in git history (see first 40 commits).

React conversion of [brucequiros18.github.io](https://brucequiros18.github.io/) — the original
static HTML/CSS site rebuilt as a component-driven **Vite + React** app with `react-router-dom`.

Layout, design tokens, motion system and copy are carried over 1:1 from the original
(`src/styles/main.css`), with the two vanilla-JS behaviors (nav dropdown, theme toggle) and the
mobile checkbox-hack replaced by idiomatic React state.

## Stack

| Layer      | Choice                                     |
| ---------- | ------------------------------------------ |
| Build      | Vite 7 + @vitejs/plugin-react              |
| UI         | React 18                                   |
| Routing    | react-router-dom 7 (BrowserRouter)         |
| Styling    | Original design-system CSS, theme-scoped   |
| Deploy     | GitHub Pages (SPA fallback via `404.html`) |

## Project structure

```
nash-portfolio-react/
├── index.html                  # head: fonts, meta, favicons (mirrors original)
├── public/images/              # original site assets (avatar, per-project shots, favicons)
├── scripts/copy-404.js         # postbuild: clones dist/index.html → dist/404.html (SPA fallback)
├── .github/workflows/deploy.yml# builds + deploys to GitHub Pages
└── src/
    ├── main.jsx                # createRoot + BrowserRouter
    ├── App.jsx                 # theme provider, background, routes
    ├── data/site.js            # ALL site content — single source of truth
    ├── styles/main.css         # original design system (teal theme re-keyed to [data-theme])
    ├── hooks/
    │   ├── useTheme.jsx        # gold/teal accent swap, persisted to localStorage
    │   ├── usePageTitle.js     # per-route document titles
    │   └── ScrollToTop.jsx     # scroll restore on navigation
    ├── components/
    │   ├── Background.jsx      # aurora mesh, glow orbs, data rain, floor grid, floating shapes
    │   ├── Header.jsx          # sticky nav + Work dropdown + mobile menu + theme switch
    │   ├── Footer.jsx          # contact CTA + socials
    │   ├── Socials.jsx         # SVG brand icons
    │   ├── TerminalCard.jsx    # signature glass terminal (CSS-only status cycler)
    │   ├── Ticker.jsx          # skills marquee (CSS animation)
    │   ├── SectionHead.jsx     # h2/h1 + mono index label
    │   ├── ImgSlot.jsx         # dashed image frames
    │   ├── ChipsList.jsx       # chip rows (plain + accent variants)
    │   ├── Job.jsx             # experience timeline entry
    │   ├── Experience.jsx      # experience section (Home + Work)
    │   ├── ProjectRow.jsx      # hover-lift project rows (Home + Work)
    │   ├── Projects.jsx        # projects section (Home + Work)
    │   └── TechGrid.jsx        # Skills & Tools twin chips (Home + Work + About)
    └── pages/
        ├── Home.jsx            # hero, ticker, focus grid, about, experience, projects, stack
        ├── Work.jsx            # page-intro + shared Experience/Projects/TechGrid
        ├── ProjectDetail.jsx   # gallery, about/highlights, prev–all–next nav
        ├── About.jsx           # narrative, quick facts, principles, expertise, stack
        ├── Uses.jsx            # stack columns + workflow principles
        ├── Contact.jsx         # contact list + mailto form card
        └── NotFound.jsx        # 404
```

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server → http://localhost:5173
npm run build      # production build + write dist/404.html (SPA fallback)
npm run preview    # serve the production build locally
```

Pages load instantly client-side; direct visits to like `/work/seekret` work on GitHub Pages
through the generated `404.html` clone.

## Editing content

Everything lives in **`src/data/site.js`** — profile copy, projects (with copy, tags, galleries,
highlights), experience, skills, quick facts, principles, contact list, socials. Add or reorder a
project there and the home/work lists, dropdown, prev/next navigation and `NN / NN` indices all
update automatically.

## Deploying to GitHub Pages

**Option A — GitHub Actions (recommended):** push this folder to the `brucequiros18/brucequiros18`
repo, then in *Settings → Pages → Build and deployment* choose **Source: GitHub Actions**. The
included workflow builds and deploys on every push to `main`.

**Option B — from a project repo:** change `base: '/'` in `vite.config.js` to
`base: '/<repo-name>/'`, build, then push `dist/` to the `gh-pages` branch of that repo.

## Theme accent

The header pill toggles the gold ⇄ teal accent — implemented as a `ThemeProvider` writing
`data-theme="teal"` on `<html>`; it persists across visits. CSS variable sets for both themes are
unchanged from the original stylesheet.
