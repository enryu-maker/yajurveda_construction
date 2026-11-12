/* eslint-disable react-refresh/only-export-components -- server entry, never hot-reloaded */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import i18n from './i18n';
import App from './App';
import { getSeo, headTags } from './seo';

export { ROUTES, SITE } from './seo';

export function render(url) {
  const seo = getSeo(url);
  i18n.changeLanguage(seo.lng);
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, head: headTags(seo), lng: seo.lng, noindex: !!seo.noindex, alternates: seo.alternates };
}
