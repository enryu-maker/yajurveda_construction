import React from 'react';
import { useTranslation } from "react-i18next";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// You will need to ensure these image paths are correct in your project structure
import benefitsImg from "../assets/financial/benefits.jpg";
import strategyImg from "../assets/financial/strategy.jpg";
import managementImg from "../assets/financial/management.jpg";
import stabilityImg from "../assets/financial/stability.jpg";
import financialHeaderImg from "../assets/financial/header.jpg";


const FinancialPlan = () => {
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

            {/* Main Section */}
            <div
                className="w-full font-sans pt-40 pb-20 px-4 sm:px-8 lg:px-16"
                style={{ backgroundColor: lightBg, color: deepBlueText }}
            >
                <div className="max-w-7xl mx-auto">

                    {/* --- TITLE --- */}
                    <header className="text-center mb-16">
                        <h1
                            className="text-5xl sm:text-6xl md:text-7xl font-[PoppinsSbold] tracking-tight mb-2"
                        >
                            {t('pageTitle')}
                        </h1>
                        <p className="text-xl sm:text-xl font-normal text-gray-600">
                            {t('subHeading')}
                        </p>
                    </header>

                    {/* --- SECTION 1: Benefits --- */}
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-[PoppinsSbold] mb-8 text-center">
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
                                            <span className="font-bold text-red-600"> {section1.card1.lockingTimeValue}</span>
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
                    <div className="mb-16 border-t pt-12">
                        <h2 className="text-3xl sm:text-4xl font-[PoppinsBold] mb-8 text-center">
                            {section2.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* Card 1: Stability & Returns */}
                            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg">
                                <img src={stabilityImg} className="w-full h-48 object-cover" alt={section2.card1.title} />
                                <div className="p-6">
                                    <h3 className="text-2xl font-[PoppinsSbold] mb-4">{section2.card1.title}</h3>
                                    <ul className="space-y-3 text-lg">
                                        {section2.card1.points.map((item, index) => (
                                            <li key={index} className={index === 0 || index === 2 ? "font-bold text-lg" : ""}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

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

            <Footer />
        </>
    );
};

export default FinancialPlan;