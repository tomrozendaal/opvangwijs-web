// Build a URL that respects Astro's configured `base` path.
// Works for the project-page URL (/opvangwijs-web/) now and a custom domain (/) later.
const base = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  return base.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}
