// Brands strip below the hero — solar manufacturers Dev Bhoomi supplies.
//
// Source files: public/assets/brands/*.png (client-supplied, transparent).
// Web copies:   public/assets/brands/web/*.webp — trimmed to the artwork and
//               resized to ~360px wide, ~11–17 KB each. Regenerate these if
//               the source PNGs change; never point the marquee at the PNGs.
//
// `width`/`height` are the DISPLAY size in px, chosen so every logo covers
// roughly the same visual area (≈3,600 px²). Wide wordmarks (Farmson,
// Saatvik) get less height, compact badges (Sun Stellar, Xwatt) get more —
// otherwise the badges look oversized and the wordmarks look tiny.

export type MarqueeLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const marqueeLogos: readonly MarqueeLogo[] = [
  { name: "Farmson Solar", src: "/assets/brands/web/farmson.webp",    width: 132, height: 27 },
  { name: "Microtek",      src: "/assets/brands/web/microtek.webp",   width: 109, height: 33 },
  { name: "Saatvik",       src: "/assets/brands/web/saatvik.webp",    width: 125, height: 29 },
  { name: "Sun Stellar",   src: "/assets/brands/web/sunstellar.webp", width: 93,  height: 39 },
  { name: "Xwatt",         src: "/assets/brands/web/xwatt.webp",      width: 97,  height: 37 },
] as const;
