import { useTranslation } from "react-i18next";
import { TEL, WHATSAPP } from "../contact";

// Phones only: contact is always one tap away (PRODUCT.md principle 5).
const MobileContactBar = () => {
  const { t } = useTranslation("common");
  return (
    <nav aria-label={t("a11y.call")} className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 gap-px bg-white/20 shadow-[0_-4px_16px_rgba(10,17,40,0.18)]">
      <a href={TEL} className="flex items-center justify-center gap-2 py-4 bg-[#253672] text-white text-lg font-[PoppinsSbold]">
        <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
        {t("a11y.call")}
      </a>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 bg-[#1f7a4d] text-white text-lg font-[PoppinsSbold]">
        <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" /></svg>
        {t("a11y.whatsapp")}
      </a>
    </nav>
  );
};

export default MobileContactBar;
