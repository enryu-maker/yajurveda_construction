// Writes a static HTML file per route so crawlers and AI bots get real content,
// plus 404.html and sitemap.xml. Runs after `vite build` and the SSR build.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const { render, ROUTES, SITE } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

function page(url) {
  const { html, head, lng } = render(url);
  return template
    .replace('<html lang="en">', `<html lang="${lng}">`)
    .replace(/<!--head-->[\s\S]*<!--\/head-->/, head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

// "/" -> index.html, "/about" -> about.html, "/hi/about" -> hi/about.html (vercel cleanUrls serves them)
for (const url of ROUTES) {
  const file = path.join(dist, url === '/' ? 'index.html' : `${url.slice(1)}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(url));
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404'));

const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.map((url) => {
  const { alternates } = render(url);
  const loc = SITE + (url === '/' ? '/' : url);
  const alts = alternates.map(([l, href]) => `\n    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`).join('');
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>${alts}\n  </url>`;
});
fs.writeFileSync(path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);

console.log(`prerendered ${ROUTES.length} routes + 404.html + sitemap.xml`);
