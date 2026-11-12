import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router';
import i18n from './i18n';
import { LANGS, PAGE_PATHS, splitLang, withLang } from './lang';
import { getSeo } from './seo';
import HomePage from './pages/HomePage'
import PopupForm from "./components/Form/PopupForm";
import AboutPage from './pages/AboutPage'
import OurCompanyPage from './pages/OurCompanyPage';
import ScrollToTop from './ScrollToTop';
import FinancialPlanPage from './pages/FinancialPlanPage';
import InstagramFeedPage from './pages/InstagramFeedPage';
import ServicePage from './pages/ServicePage';
import NotFoundPage from './pages/NotFoundPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import MobileContactBar from "./components/MobileContactBar";

const PAGES = {
  '/': HomePage,
  '/about': AboutPage,
  '/our-company': OurCompanyPage,
  '/financial-plan': FinancialPlanPage,
  '/instagram-feed': InstagramFeedPage,
  '/services': ServicesPage,
  '/contact': ContactPage,
};

const POPUP_DELAY_MS = 20000; // don't block first view (Google penalises intrusive interstitials)

const App = () => {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // At most once per session, never after the visitor has already sent their details.
    try {
      if (localStorage.getItem("formFilled") === "1" || sessionStorage.getItem("popupShown")) return;
    } catch { return; /* storage blocked: skip rather than nag on every visit */ }
    const id = setTimeout(() => {
      setShowModal(true);
      try { sessionStorage.setItem("popupShown", "1"); } catch { /* ignore */ }
    }, POPUP_DELAY_MS);
    return () => clearTimeout(id);
  }, []);

  // Language follows the URL; head tags were prerendered, this keeps them right after client navigation.
  useEffect(() => {
    const [lng] = splitLang(pathname);
    if (i18n.language !== lng) i18n.changeLanguage(lng);
    const seo = getSeo(pathname);
    document.documentElement.lang = lng;
    document.title = seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', seo.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', seo.url);
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <div className="overflow-x-hidden pb-16 md:pb-0">
        <Routes>
          {LANGS.flatMap((l) => PAGE_PATHS.map((p) => {
            const Page = PAGES[p];
            return <Route key={l + p} path={withLang(l, p)} element={<Page />} />;
          }))}
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {showModal && <PopupForm onClose={() => setShowModal(false)} />}
        <MobileContactBar />
      </div>
    </>
  )
}

export default App
