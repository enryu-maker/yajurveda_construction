import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const OurCompanyPage = () => {
  const { t } = useTranslation("ourcompany_page");

  const primaryBlue = "#253672";

  return (
    <>
      <Header />

      <div className="w-full bg-white font-sans pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">

          {/* --- Project Title --- */}
          <div className="mb-10 sm:mb-14 border-b pb-6 sm:pb-10">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-[PoppinsSbold]"
              style={{ color: primaryBlue }}
            >
              {t("projectName")}
            </h2>

            <p className="text-sm sm:text-base md:text-lg font-[PoppinsLight] opacity-70">
              {t("focusLabel")} {t("projectFocus")}
            </p>
          </div>

          {/* --- Mission & Vision --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-16 text-left">
            
            <div
              className="p-4 sm:p-6 border-l-4 font-[PoppinsRegular]"
              style={{ borderColor: "#4666D8" }}
            >
              <h3
                className="text-xl sm:text-2xl font-bold mb-3"
                style={{ color: primaryBlue }}
              >
                {t("missionTitle")}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed">
                {t("missionStatement")}
              </p>
            </div>

            <div
              className="p-4 sm:p-6 border-l-4 font-[PoppinsRegular]"
              style={{ borderColor: "#4666D8" }}
            >
              <h3
                className="text-xl sm:text-2xl font-bold mb-3"
                style={{ color: primaryBlue }}
              >
                {t("visionTitle")}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed">
                {t("visionStatement")}
              </p>
            </div>
          </div>

          {/* --- History Section --- */}
          <div className="my-20 px-2 sm:px-6">
            <h3
              className="text-2xl sm:text-3xl font-[PoppinsRegular] font-bold mb-4"
              style={{ color: primaryBlue }}
            >
              {t("ourJourneyTitle")}
            </h3>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-[PoppinsItalic]">
              "{t("historySummary")}"
            </p>
          </div>

          {/* --- What Makes Us Different --- */}
          <div className="mb-16 text-left">
            <h3
              className="text-2xl sm:text-3xl font-[PoppinsRegular] font-bold mb-6 text-center"
              style={{ color: primaryBlue }}
            >
              {t("differenceTitle")}
            </h3>

            <p className="text-base sm:text-lg md:text-xl font-[PoppinsRegular] mb-6 leading-relaxed italic text-center max-w-3xl mx-auto">
              "{t("differenceIntro")}"
            </p>

            <ul className="space-y-4 text-base sm:text-lg md:text-xl font-[PoppinsRegular] leading-relaxed max-w-3xl mx-auto">
              {t("differencePoints", { returnObjects: true }).map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>

          {/* --- Team Expertise --- */}
          <div className="border-t pt-8">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-[PoppinsRegular]">
              {t("teamExpertise")}
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurCompanyPage;
