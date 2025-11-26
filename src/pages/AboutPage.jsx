import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/Home/About/About_bg.jpg";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";

const AboutUs = () => {
    const { t } = useTranslation("about_page");

    // Single shared color variable
    const primaryBlue = "#253672";

    const howToWork = t("howToWork", { returnObjects: true });
    const expertiseRoles = t("expertise", { returnObjects: true });
    const labels = t("about_page.labels", { returnObjects: true });

    return (
        <div
            className="min-h-screen w-full relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(191,191,191,0.9)), url(${backgroundImage})`,
            }}
        >

            {/* HEADER */}
            <Header />

            {/* NEW STRUCTURE: Position the LanguageSwitcher absolutely 
            so it doesn't interfere with the Header's centering logic. 
            It must have a high z-index to ensure it's clickable over the header's content.
            */}
            {/* <div className="absolute top-0 right-0 z-50 p-4 sm:p-6 mt-3">
                <LanguageSwitcher />
            </div> */}

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-21">
                <div className="text-center py-14 sm:py-20">
                    <p className="text-base sm:text-lg tracking-wide opacity-80"
                        style={{ color: primaryBlue }}>
                        {t("about_page.tagline")}
                    </p>

                    <h1
                        className="font-[PoppinsSbold] leading-tight mb-6"
                        style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", color: primaryBlue }}
                    >
                        {t("about_page.mainTitle")}
                    </h1>

                    <p className="text-sm sm:text-lg max-w-4xl mx-auto opacity-85 leading-relaxed"
                        style={{ color: primaryBlue }}>
                        {t("about_page.introParagraph")}
                    </p>
                </div>

                {/* --- VISION & MISSION SECTION START --- */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

                    
                    <div className="p-8 rounded-2xl shadow-xl transition-all hover:shadow-2xl border border-black/10">
                        <h2
                            className="text-3xl font-[PoppinsSbold] mb-4 border-b-2 pb-2"
                            style={{ borderColor: primaryBlue, color: primaryBlue }}
                        >
                            {t("about_page.visionMission.visionTitle")}
                        </h2>
                        <p className="text-base font-[PoppinsRegular] leading-relaxed opacity-90"
                            style={{ color: primaryBlue }}>
                            {t("about_page.visionMission.vision")}
                        </p>
                    </div>

                   
                    <div className="p-8 rounded-2xl shadow-xl transition-all hover:shadow-2xl border border-black/10">
                        <h2
                            className="text-3xl font-[PoppinsSbold] mb-4 border-b-2 pb-2"
                            style={{ borderColor: primaryBlue, color: primaryBlue }}
                        >
                            {t("about_page.visionMission.missionTitle")}
                        </h2>
                        <p className="text-base font-[PoppinsRegular] leading-relaxed opacity-90"
                            style={{ color: primaryBlue }}>
                            {t("about_page.visionMission.mission")}
                        </p>
                    </div>
                </div> */}
                {/* --- VISION & MISSION SECTION END --- */}

                <hr className="w-2/3 mx-auto border-black/20 mb-20" />

                <h2
                    className="text-center font-[PoppinsSbold] mb-14"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: primaryBlue }}
                >
                    {t("about_page.midTitle")}
                </h2>

                {/* CORE VALUES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-20">
                    {howToWork.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl shadow-lg text-center border border-white/20 hover:scale-105 transition-transform"
                            style={{ backgroundColor: primaryBlue }}
                        >
                            <h3 className="text-xl sm:text-2xl font-[PoppinsRegular] mb-4 text-white">{item.title}</h3>
                            <p className="text-xs sm:text-sm opacity-90 font-[PoppinsRegular] text-white">{item.description}</p>
                        </div>
                    ))}
                </div>

                <hr className="w-2/3 mx-auto border-black/20 mb-20" />

                <h2
                    className="text-center mb-14 font-[PoppinsSbold]"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: primaryBlue }}
                >
                    {t("about_page.careerTitle")}
                </h2>

                {/* EXPERTISE SECTIONS */}
                {expertiseRoles.map((section, index) => (
                    <div key={index} className="pb-16">
                        <h3
                            className="text-xl sm:text-3xl mb-6 border-l-4 pl-4 font-[PoppinsRegular]"
                            style={{ borderColor: primaryBlue, color: primaryBlue }}
                        >
                            {index + 1}. {section.category}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {section.roles.map((role, rIndex) => (
                                <div
                                    key={rIndex}
                                    className="p-6 rounded-2xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                                    style={{ backgroundColor: primaryBlue }}
                                >
                                    <h4 className="text-lg sm:text-xl font-[PoppinsSbold] mb-3 text-white">{role.title}</h4>

                                    <p className="text-xs sm:text-sm mb-2 font-[PoppinsRegular] text-gray-100">
                                        <strong>{labels.role}</strong> {role.role}
                                    </p>

                                    <p className="text-xs sm:text-sm border-t border-white/70 pt-2 mb-2 font-[PoppinsRegular] text-gray-100">
                                        <strong>{labels.workAreas}</strong>
                                    </p>

                                    <ul className="list-disc ml-4 space-y-1 text-xs sm:text-sm opacity-85 font-[PoppinsRegular] text-gray-100">
                                        {role.work.map((w, wIndex) => (
                                            <li key={wIndex}>{w}</li>
                                        ))}
                                    </ul>

                                    {role.qualification !== "N/A" && (
                                        <p className="text-[10px] sm:text-xs mt-4 italic opacity-70 font-[PoppinsRegular] text-white">
                                            <strong>{labels.qualification}</strong> {role.qualification}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;