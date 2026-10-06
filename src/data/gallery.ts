// Team photo gallery — group photos of the Dev Bhoomi Enterprises team at
// heritage sites. These are NOT solar installations or projects; alt text
// describes only what is visible, inventing no place names or events.

export const galleryCopy = {
  eyebrow: "Our team",
  title: "The people behind the work",
  lede: "The Dev Bhoomi team — the people who survey, install and service solar across Uttarakhand.",
} as const;

export type GalleryImage = {
  id: string;
  /** 1280w WebP. */
  src: string;
  /** 720w WebP for small viewports. */
  srcSmall: string;
  alt: string;
  caption?: string;
};

export const galleryImages: readonly GalleryImage[] = [
  {
    id: "team-1",
    src: "/assets/gallery/team-1-1280.webp",
    srcSmall: "/assets/gallery/team-1-720.webp",
    alt: "The Dev Bhoomi Enterprises team standing together outdoors beside a large rock, with a hilltop fort wall behind them.",
  },
  {
    id: "team-2",
    src: "/assets/gallery/team-2-1280.webp",
    srcSmall: "/assets/gallery/team-2-720.webp",
    alt: "The Dev Bhoomi Enterprises team posing in front of an ornate heritage palace building.",
  },
  {
    id: "team-3",
    src: "/assets/gallery/team-3-1280.webp",
    srcSmall: "/assets/gallery/team-3-720.webp",
    alt: "The Dev Bhoomi Enterprises team on the steps of an ornate heritage building with carved arches.",
  },
] as const;

export const galleryAutoplayMs = 5000;
