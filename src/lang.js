import { useLocation } from 'react-router';

export const LANGS = ['en', 'hi', 'mr'];

// Pages that exist in every language. Service pages are English-only for now.
export const PAGE_PATHS = ['/', '/about', '/our-company', '/financial-plan', '/instagram-feed', '/services', '/contact'];

// "/hi/about" -> ["hi", "/about"], "/about" -> ["en", "/about"]
export function splitLang(pathname) {
  const m = pathname.match(/^\/(hi|mr)(?=\/|$)/);
  return m ? [m[1], pathname.slice(3) || '/'] : ['en', pathname];
}

// withLang("hi", "/about") -> "/hi/about"; "/#services" -> "/hi#services"; "/services/x" stays English
export function withLang(lng, path) {
  if (lng === 'en' || path.startsWith('/services/')) return path;
  if (path === '/') return `/${lng}`;
  return `/${lng}${path.startsWith('/#') ? path.slice(1) : path}`;
}

// Hook: prefix an internal path with the current page's language.
export function useLocalePath() {
  const [lng] = splitLang(useLocation().pathname);
  return (path) => withLang(lng, path);
}
