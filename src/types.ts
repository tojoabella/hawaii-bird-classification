export const PAGES = [
  "home",
  "models",
  "birds",
  "abstract",
  "upcoming",
  "contact",
] as const;

export type Page = (typeof PAGES)[number];
