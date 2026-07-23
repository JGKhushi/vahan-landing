# VAHAN 4.0 — Citizen Services (Landing Page Rebuild)

A responsive, multilingual rebuild of the VAHAN 4.0 Citizen Services landing page,
built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

> Educational rebuild only — not affiliated with the Government of India.

## Live Demo
- **Deployed:** _add your Vercel URL here_
- **Repo:** _add your GitHub URL here_

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## Submission Notes

### 1. Responsiveness approach
Mobile-first with Tailwind's responsive utilities (`sm: md: lg:`). Layout stacks in a
single column on phones and expands to a two-column grid (`lg:grid-cols-2`) on desktop.
The header collapses into a hamburger menu below `lg`, and an accessibility **text-size
control (A- / A / A+)** scales the entire page via a root `--text-scale` variable (all
sizes are in `rem`, so they scale proportionally).

### 2. State management approach
- **Global (shared) state:** React **Context** (`LanguageProvider`) holds the active
  language and exposes `t()` (translate), `locale`, and `setLocale`. The chosen language
  and text scale are persisted to **localStorage** so they survive refreshes.
- **Local (component) state:** `useState` for UI-only concerns — each dropdown's open/closed
  state, the service tab, and the form fields (registration number, state, RTO, consent).
- No external state library is needed at this scale; Context + local state keeps it simple.

### 3. Multilingual strategy
- **6 languages:** English, Hindi, Marathi, Bengali, Tamil, Telugu.
- One **dictionary per language** in `src/i18n/dictionaries.ts`. English defines the key
  set and `type Dictionary = typeof en` **forces every other language to define the same
  keys** — a missing translation is a TypeScript build error.
- Components never hardcode text; they call `t("someKey")`, which looks the key up in the
  active language's dictionary. Switching language re-renders all text instantly, and the
  choice is remembered.

### 4. Dynamic fonts strategy
Each script needs its own font. Using `next/font/google`, the app self-hosts **Noto Sans**
for Devanagari, Bengali, Tamil, Telugu, and **Inter** for Latin — each exposed as a CSS
variable (`--font-devanagari`, etc.). The app renders using a single `--font-app` variable;
when the language changes, `LanguageProvider` re-points `--font-app` at that language's font
variable, so the whole UI instantly switches to the correct script's font. Fonts are
self-hosted at build time (no layout shift, no runtime request to Google).

### 5. Code structure
```
src/
├─ app/
│  ├─ layout.tsx        # root shell: loads fonts, wraps app in LanguageProvider
│  ├─ page.tsx          # assembles the landing page from sections
│  ├─ fonts.ts          # next/font definitions (one per script)
│  └─ globals.css       # Tailwind + font/text-scale variables
├─ i18n/
│  ├─ config.ts         # locales + which font each uses
│  ├─ dictionaries.ts   # all translations (type-checked)
│  └─ LanguageProvider.tsx  # Context: locale, t(), font switching
├─ components/
│  ├─ ui/Dropdown.tsx   # one reusable dropdown for the whole site
│  ├─ layout/           # TopBar, Header, Logo, Footer, LanguageSwitcher, TextSizeControls
│  └─ sections/         # Advisory, ServicePanel, StatsSection, MobileUpdate
├─ data/                # navigation menus + states/RTOs
└─ lib/                 # useClickOutside hook
```

### 6. Number of commits
The project was built in small, reviewable commits (see `git log`):
1. Scaffold (Next.js + TS + Tailwind)
2. Multilingual i18n + dynamic fonts
3. Government header (nav dropdowns, language & text-size)
4. Main content (advisory, service panel, dependent dropdowns, stats, mobile-update)
5. README + submission notes

## Working dropdowns (UI behaviour, no APIs)
- **Language** dropdown (switches all text + font)
- **3 nav menus** (Payment status / Apply / Administrative) — open on click, close on
  outside-click or Esc
- **State → RTO dependent dropdowns** — the RTO list updates from the selected state and
  is disabled until a state is chosen
- **Consent gate** — Proceed is validated against the consent checkbox
