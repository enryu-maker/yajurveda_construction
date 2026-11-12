import React from 'react';
import { useTranslation } from "react-i18next";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PageHero from "../components/PageHero";

// You will need to ensure these image paths are correct in your project structure
import benefitsImg from "../assets/financial/benefits.webp";
import strategyImg from "../assets/financial/strategy.webp";
import managementImg from "../assets/financial/management.webp";
import { TEL, WHATSAPP } from "../contact";


const FinancialPlanPage = () => {
    // Use the dedicated 'financial_plan' namespace
    const { t } = useTranslation('financial_plan');

    const deepBlueText = "#253672";
    const lightBg = "#FFFFFF";

    // Retrieve structured content using returnObjects: true
    const section1 = t('section1', { returnObjects: true });
    const section2 = t('section2', { returnObjects: true });

    return (
        <>
            <Header />
            <PageHero title={t("pageTitle")} intro={t("subHeading")} />

            <div
                className="w-full font-sans pt-16 lg:pt-20 pb-20 px-4 sm:px-8 lg:px-16"
                style={{ backgroundColor: lightBg, color: deepBlueText }}
            >
                <div className="max-w-7xl mx-auto">
                    {/* Risks first: claims are pending legal review (PRODUCT.md) */}
                    <section aria-labelledby="risk-title" className="mb-16 max-w-3xl rounded-2xl border-2 border-[#253672] bg-[#f0f2f5] p-6 sm:p-8">
                        <h2 id="risk-title" className="text-2xl font-[PoppinsSbold] mb-4">{section2.card1.title}</h2>
                        <ul className="list-disc ml-6 space-y-2 text-lg">
                            {section2.card1.points.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </section>


                    {/* --- SECTION 1: Benefits --- */}
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-[PoppinsSbold] mb-8">
                            {section1.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* Card 1: Investment Access & Costs */}
                            <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200">
                                <img src={benefitsImg} className="w-full h-48 object-cover" alt={section1.card1.title} />
                                <div className="p-6">
                                    <h3 className="text-2xl font-[PoppinsSbold] mb-3">{section1.card1.title}</h3>
                                    <ul className="space-y-3 list-disc list-inside text-lg">
                                        {section1.card1.benefits.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-3">
                                        <h3 className="text-2xl font-[PoppinsSbold] mb-3">{section1.card1.lockingTimeTitle}</h3>
                                        <p className="text-xl mb-4">
                                            {section1.card1.lockingTimeTitle}:
                                            <span className="font-[PoppinsSbold]"> {section1.card1.lockingTimeValue}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Diversification & Yield */}
                            <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200">
                                <img src={strategyImg} className="w-full h-48 object-cover" alt={section1.card2.title} />
                                <div className="p-6">
                                    <h3 className="text-2xl font-[PoppinsSbold] mb-3">{section1.card2.title}</h3>
                                    <ul className="space-y-3 text-lg list-disc list-inside">
                                        {section1.card2.strategy.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- SECTION 2: Strategy --- */}
                    <div className="mb-16 border-t border-[#253672]/15 pt-12">
                        <h2 className="text-3xl sm:text-4xl font-[PoppinsSbold] mb-8">
                            {section2.title}
                        </h2>

                        <div className="max-w-2xl">

                            {/* Card 2: Professional Management */}
                            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg">
                                <img src={managementImg} className="w-full h-48 object-cover" alt={section2.card2.title} />
                                <div className="p-6">
                                    <h3 className="text-2xl font-[PoppinsSbold] mb-4">{section2.card2.title}</h3>
                                    <ul className="space-y-3 text-lg">
                                        {section2.card2.points.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="px-4 pb-20 text-center text-[#253672]">
                <h2 className="text-3xl font-[PoppinsSbold]">{t("ctaTitle")}</h2>
                <p className="mt-3 text-lg max-w-xl mx-auto">{t("ctaText")}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a href={TEL} className="rounded-full bg-[#253672] text-white px-6 py-3.5 text-lg font-[PoppinsSbold]">{t("ctaButton")}</a>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-[#253672] px-6 py-3 text-lg font-[PoppinsMedium]">WhatsApp</a>
                </div>
            </section>


            <Footer />
        </>
    );
};

export default FinancialPlanPage;