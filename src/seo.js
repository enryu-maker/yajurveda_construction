import i18n from './i18n';
import { LANGS, PAGE_PATHS, splitLang, withLang } from './lang';
import { SERVICES } from './content/services';

export const SITE = 'https://www.yajurvedrealestate.com';
const ORG_ID = `${SITE}/#org`;
const OG_LOCALE = { en: 'en_IN', hi: 'hi_IN', mr: 'mr_IN' };

export const ROUTES = [
  ...LANGS.flatMap((l) => PAGE_PATHS.map((p) => withLang(l, p))),
  ...SERVICES.map((s) => `/services/${s.slug}`),
];

const ORG = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  '@id': ORG_ID,
  name: 'Yajurved Construction Pvt. Ltd.',
  alternateName: ['Yajurved Group', 'Yajurved Construction'],
  url: `${SITE}/`,
  logo: `${SITE}/logo-512.png`,
  image: `${SITE}/og-image.jpg`,
  telephone: '+91-9737073390',
  email: 'help.yajurved@gmail.com',
  foundingDate: '2025',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "B No-3, P No-4, Shaligram Apartment, D'Souza Colony",
    addressLocality: 'Nashik',
    addressRegion: 'Maharashtra',
    postalCode: '422002',
    addressCountry: 'IN',
  },
  areaServed: { '@type': 'City', name: 'Nashik' },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '11:00',
    closes: '17:00',
  }],
  sameAs: [
    'https://www.instagram.com/yajurvedgroup/',
    'https://www.facebook.com/profile.php?id=61584363862965',
  ],
  makesOffer: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: `${SITE}/services/${s.slug}` } })),
};

const faqLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

const crumbsLd = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })),
});

export function getSeo(pathname) {
  const [lng, path] = splitLang(pathname);
  const t = i18n.getFixedT(lng, 'common');
  const url = SITE + (pathname === '/' ? '/' : pathname);
  const home = [t('seo.home.name'), SITE + (lng === 'en' ? '/' : withLang(lng, '/'))];
  const service = SERVICES.find((s) => path === `/services/${s.slug}`);

  if (service) {
    return {
      lng, url, title: service.title, description: service.description, alternates: [],
      jsonLd: [
        ORG,
        { '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.description, url, provider: { '@id': ORG_ID }, areaServed: { '@type': 'City', name: 'Nashik' } },
        faqLd(service.faqs),
        crumbsLd([home, [service.name, url]]),
      ],
    };
  }

  if (!PAGE_PATHS.includes(path)) {
    return { lng, url, title: t('seo.notFound.title'), description: '', noindex: true, alternates: [], jsonLd: [] };
  }

  const key = path === '/' ? 'home' : path.slice(1);
  const jsonLd = [ORG];
  if (key === 'home') {
    jsonLd.push(
      { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Yajurved Construction', url: `${SITE}/`, inLanguage: lng, publisher: { '@id': ORG_ID } },
      faqLd(i18n.getFixedT(lng, 'faq')('items', { returnObjects: true })),
    );
  } else {
    jsonLd.push(crumbsLd([home, [t(`seo.${key}.name`), url]]));
  }
  return {
    lng, url, jsonLd,
    title: t(`seo.${key}.title`),
    description: t(`seo.${key}.description`),
    alternates: LANGS.map((l) => [l, SITE + (withLang(l, path) === '/' ? '/' : withLang(l, path))]),
  };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function headTags(seo) {
  const tags = [
    `<title>${esc(seo.title)}</title>`,
    seo.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${seo.url}">`,
  ];
  if (seo.description) tags.push(`<meta name="description" content="${esc(seo.description)}">`);
  for (const [l, href] of seo.alternates) tags.push(`<link rel="alternate" hreflang="${l}" href="${href}">`);
  if (seo.alternates.length) tags.push(`<link rel="alternate" hreflang="x-default" href="${seo.alternates[0][1]}">`);
  if (!seo.noindex) {
    tags.push(
      '<meta property="og:type" content="website">',
      '<meta property="og:site_name" content="Yajurved Construction">',
      `<meta property="og:locale" content="${OG_LOCALE[seo.lng]}">`,
      `<meta property="og:title" content="${esc(seo.title)}">`,
      `<meta property="og:description" content="${esc(seo.description)}">`,
      `<meta property="og:url" content="${seo.url}">`,
      `<meta property="og:image" content="${SITE}/og-image.jpg">`,
      '<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">',
      '<meta name="twitter:card" content="summary_large_image">',
      `<meta name="twitter:title" content="${esc(seo.title)}">`,
      `<meta name="twitter:description" content="${esc(seo.description)}">`,
      `<meta name="twitter:image" content="${SITE}/og-image.jpg">`,
    );
  }
  for (const ld of seo.jsonLd) tags.push(`<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`);
  return tags.join('\n    ');
}
