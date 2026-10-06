# Reference Spec — Hero + Marquee

This is the client-supplied specification, preserved verbatim. It is the authority on layout, class names, and motion for the hero section and marquee. Where it conflicts with the brand layer in `PROJECT-BRIEF.md`, **this spec wins on structure and styling; the brief wins on colour, copy, and content.**

Three documented deviations, required by the brand or the client:
1. **Body background** — spec says `#f9fafb`; use `--surface` `#FDFBF7` instead. Warm off-white keeps the amber from glaring.
2. **Marquee logos** — spec supplies eight SaaS brand logos (Shopify, Figma, Spotify etc.) as placeholders. Replace with the solar manufacturer brands Dev Bhoomi is authorized to trade, once confirmed. Card styling, gradient-on-hover behaviour, and the `group-hover:brightness-0 group-hover:invert` treatment stay exactly as specified. Until brands are confirmed, keep the spec's logos in place as visible placeholders.
3. **Marquee card styling** — the rounded-full pill cards with borders and shadows were replaced at the client's request with a quiet, borderless logo band (hairline-ruled strip, logos sitting directly on the page); the greyscale→colour hover is preserved.

---

## 1. Dependencies & Setup

Libraries: Install `lucide-react`, `motion`, `clsx`, and `tailwind-merge`.

Fonts & CSS: In `index.css`, import the Inter and Outfit fonts from Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600&display=swap');
```
Configure the Tailwind theme in your CSS to use Inter as `--font-sans` and Outfit as `--font-display`.

The global body background should be `#f9fafb`.

## 2. Main Hero Container & Video Background

Create a hero section container with these exact classes:
```
relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col
```

Inside, add an absolutely positioned underlying layer (`absolute inset-0 pointer-events-none z-0 overflow-hidden select-none`) for the background video.

The video tag must point to exactly this URL:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4
```
It must include `autoPlay`, `loop`, `muted`, and `playsInline` attributes, with the classes:
```
w-full h-full object-cover scale-105 transition-transform duration-1000
```
No overlays.

## 3. Hero Text Content

Create a content wrapper positioned relative:
```
z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start
```

Use `motion.div` from `motion/react` to animate the text layer in (fade in, slide up slightly).

**Headline:** `"Foundation of the<br />new digital epoch"`. Should use the `font-display` font, sizes `text-[42px] md:text-[56px]`, medium weight, tight tracking, color `#0a1b33`.

**Subheadline:** `"Designing products, powering ecosystems and laying the foundation of a decentralized web for enterprises, builders and communities alike."` Should use `font-sans`, sizes `text-[14px] md:text-[15px]`, color `#64748b`.

**Contact Button:** Text `"Contact Us"`, using a dark background (`bg-[#0a152d]`), white text, `rounded-full`, with hover scale animations via `motion.button`.

## 4. Floating Bottom Navbar

Create an absolutely positioned navbar wrapper at the bottom center of the hero:
```
absolute bottom-10 left-1/2 -translate-x-1/2 z-30
```

The nav element should use `motion.nav` to fade in and slide up (delayed after the text). It must have the classes:
```
flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40
```

**Nav Elements:**
- A small circular logo placeholder on the left (`w-9 h-9 bg-white border-slate-100 shadow-sm`) containing the star character `"✦"`.
- Two standard text buttons: `"Products"` and `"Docs"` (`text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33]`).
- A `"Get in touch"` button on the right containing the text and a small `ChevronRight` (from lucide-react). Styled identically to the marquee cards:
```
bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all
```

## 5. Seamless Marquee Logo Scroller Component

Below the hero container (`mt-10`), add a custom highly-performant Marquee Scroller component.

The scroller must use a pure CSS `@keyframes` animation (`transform: translateX(0)` to `translateX(-50%)`) for infinite scrolling, pausing on hover. It needs a left/right masking gradient (`maskImage` linear-gradient fading to transparent on the edges). No title or description text above the scroller.

**The Logos List:** Supply an array of 8 objects with `src` URLs from svgl.app, alt names, and hex gradient objects:
- Procure (procure.svg, blue gradient)
- Shopify (shopify.svg, yellow gradient)
- Blender (blender.svg, blue gradient)
- Figma (figma.svg, purple gradient)
- Spotify (spotify.svg, pink/red gradient)
- Lottielab (lottielab.svg, yellow/green)
- Google Cloud (google-cloud.svg, light blue)
- Bing (bing.svg, cyan/teal)

Render the list twice inline to ensure a seamless loop.

**Card Design:** Make each logo's container card exactly match the "Get in touch" navbar button's styling. The container classes must be exactly:
```
group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden
```

Inside the card, add an absolute div using the specific gradient colors, scaled at 1.5 and 0 opacity, which drops to scale 1 and opacity 100 on group-hover.

The image tag should invert/turn black on hover (`group-hover:brightness-0 group-hover:invert`).

---

## Copy substitution

The spec's placeholder headline and subheadline are generic Web3 copy and must be replaced with Dev Bhoomi content at build time. Keep every class, size, weight, and colour token exactly as specified.

- Headline → credential-led, two lines, `<br />` split preserved
- Subheadline → what the business does, plainly, in one sentence
- "Contact Us" button → "Book a site survey"
- Nav "Products" / "Docs" → "Products" / "Projects"
- Nav "Get in touch" → keep as-is
