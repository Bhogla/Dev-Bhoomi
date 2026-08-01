// PLACEHOLDER
// Spec-supplied SaaS logos, kept verbatim as visible placeholders.
// Replace with the solar manufacturer brands Dev Bhoomi is authorized to trade
// once confirmed (PROJECT-BRIEF open item 5). Card styling, gradient-on-hover,
// and the brightness-0/invert treatment stay exactly as specified.

export type MarqueeLogo = {
  name: string;
  src: string;
  gradient: { from: string; to: string };
};

export const marqueeLogos: readonly MarqueeLogo[] = [
  { name: "Procure",      src: "https://svgl.app/library/procure.svg",      gradient: { from: "#2563EB", to: "#60A5FA" } },
  { name: "Shopify",      src: "https://svgl.app/library/shopify.svg",      gradient: { from: "#EAB308", to: "#FACC15" } },
  { name: "Blender",      src: "https://svgl.app/library/blender.svg",      gradient: { from: "#1D4ED8", to: "#3B82F6" } },
  { name: "Figma",        src: "https://svgl.app/library/figma.svg",        gradient: { from: "#7C3AED", to: "#A78BFA" } },
  { name: "Spotify",      src: "https://svgl.app/library/spotify.svg",      gradient: { from: "#DB2777", to: "#F43F5E" } },
  { name: "Lottielab",    src: "https://svgl.app/library/lottielab.svg",    gradient: { from: "#CA8A04", to: "#84CC16" } },
  { name: "Google Cloud", src: "https://svgl.app/library/google-cloud.svg", gradient: { from: "#38BDF8", to: "#7DD3FC" } },
  { name: "Bing",         src: "https://svgl.app/library/bing.svg",         gradient: { from: "#06B6D4", to: "#2DD4BF" } },
] as const;
