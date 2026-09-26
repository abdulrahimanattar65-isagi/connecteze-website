# Connecteze — WhatsApp Marketing Landing Page

A complete, animated React + Tailwind landing page for a WhatsApp marketing/forms product, inspired by the layout patterns in your reference image (hero + phone mockup, "how it works" steps, template gallery, FAQ) with original copy and illustrations built entirely in CSS/SVG — no external stock images, so nothing will ever 404.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## What's inside

```
src/
  App.jsx                 assembles all sections
  main.jsx                React entry point
  index.css               Google Fonts import, Tailwind directives, animation keyframes
  components/
    Navbar.jsx             sticky nav with Log in / Sign up free buttons
    Hero.jsx                headline, signup input, stats, animated WhatsApp chat mockup
    LogoStrip.jsx           scrolling "trusted by" marquee
    Features.jsx            4-column feature grid
    HowItWorks.jsx          3-step process with connecting line
    Templates.jsx           6-card template gallery
    Testimonial.jsx         full-width dark quote section
    FAQ.jsx                 accordion
    CTA.jsx                 closing call-to-action banner
    Footer.jsx               site footer
```

## Notes

- **Animation**: the hero elements rise in on load, and the phone mockup plays a looping WhatsApp conversation (typing dots → message → reply) — this is the one deliberate animated moment, everything else only responds to hover/click so it stays calm rather than busy.
- **No broken images**: every visual (phone frame, chat bubbles, template thumbnails, avatar initials) is built with CSS/SVG/icons (`lucide-react`), so the page looks finished immediately with zero image hosting to set up. Swap in real photography later by replacing the gradient blocks in `Templates.jsx` with `<img>` tags.
- **Colors/fonts** are defined as Tailwind arbitrary values and CSS variables — to restyle, the fastest path is a find-and-replace on the hex codes (`#1FAF55` primary green, `#0E1F17` ink, `#EAF7EE` mint) and the two font families in `index.css` (`Sora` display, `Inter` body).
- Update the `href`s on **Log in** / **Sign up free** in `Navbar.jsx` to point at your real auth routes.
