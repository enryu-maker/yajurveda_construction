import { useTranslation } from 'react-i18next';

// Questions also feed FAQPage JSON-LD in src/seo.js.
const FaqSection = () => {
  const { t } = useTranslation('faq');
  const items = t('items', { returnObjects: true });

  return (
    <section id="faq" className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-[#253672] font-[PoppinsRegular]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-[PoppinsSbold] mb-8 text-center">{t('title')}</h2>
        {items.map(({ q, a }) => (
          <details key={q} className="border-b border-gray-200 py-4 group">
            <summary className="cursor-pointer text-lg font-[PoppinsSbold] list-none flex justify-between gap-4">
              <h3>{q}</h3>
              <span aria-hidden="true" className="transition group-open:rotate-45 text-2xl leading-none">+</span>
            </summary>
            <p className="mt-3 text-base sm:text-lg leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
