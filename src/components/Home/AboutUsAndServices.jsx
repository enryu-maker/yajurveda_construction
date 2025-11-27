import React from "react";
import { useTranslation } from "react-i18next";
import backgroundImage from "../../assets/Home/About/About_bg.jpg";
import realEstateImage from "../../assets/Home/About/real_estate.jpg";
import litigationImage from "../../assets/Home/About/litigation.jpg";
import constructionImage from "../../assets/Home/About/construction.jpg";
import financialImage from "../../assets/Home/About/financial.jpg";

import { Link } from "react-router";
import ServicesSection from "./ServicesSection";

const AboutUsAndServices = () => {
  const { t } = useTranslation('about');

  // Retrieve translated services array
  const translatedServices = t('servicesSection.cards', { returnObjects: true });

  const staticImages = [financialImage, litigationImage, constructionImage, realEstateImage];

  // Combine translated text with static image paths
  const services = translatedServices.map((service, index) => ({
    ...service,
    image: staticImages[index],
  }));

  const linkItems = t('aboutSection.listItems', { returnObjects: true });

  return (
    <section id='about' className="relative min-h-screen bg-[#f0f2f5] text-gray-800 overflow-hidden pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 ">

          <div className="lg:w-3/5">
            <button className="px-6 py-2 text-md font-[PoppinsRegular] border border-[#253672] text-[#253672] rounded-full hover:bg-gray-200 transition">
              {t('aboutSection.aboutUsButton')}
            </button>

            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl leading-tight font-[PoppinsRegular] text-[#253672]">
              {t('aboutSection.heading1_beforeBold')} <strong>{t('aboutSection.heading1_bold')}</strong>,
              <br />
              {t('aboutSection.heading2_beforeBold')} <strong>{t('aboutSection.heading2_bold')}</strong>.
            </h1>

            <p className="mt-6 text-base sm:text-lg max-w-3xl font-[PoppinsRegular] text-[#253672]">
              {t('aboutSection.paragraph1')}
            </p>

            <p className="mt-4 text-base sm:text-lg max-w-3xl font-[PoppinsRegular] text-[#253672]">
              {t('aboutSection.paragraph2_intro')}
            </p>
            <ol className="list-disc ml-6 text-base sm:text-lg max-w-3xl font-[PoppinsRegular] text-[#253672]">
              {Object.values(linkItems).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
            <p className="mt-4 text-base sm:text-lg max-w-3xl font-[PoppinsRegular] text-[#253672]">
              {t('aboutSection.paragraph3')}
            </p>
          </div>
        </div>

        <div className="flex justify-end ">
          <div className="flex ">
            <Link to="/about"
              className="
              group
              px-8 py-2 mt-6 lg:mt-0
              flex items-center gap-3 
              bg-[#253672] text-white 
              rounded-full text-lg transition 
              hover:bg-white hover:text-[#253672] 
              border border-[#253672]
            "
            >
              <div
                className="
                p-2
                border-2 border-white rounded-full 
                transition duration-300
                group-hover:bg-white
                group-hover:border-[#253672]
              "
              >
                <svg
                  className="
                  w-5 h-5 text-white transform rotate-225 
                  transition duration-300
                  group-hover:text-[#253672]
                "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>

              {t('aboutSection.learnMoreButton')}
            </Link>
          </div>

        </div>

        <ServicesSection services={services} t={t} />

      </div>

      <div className="absolute bottom-8 right-8 p-3 bg-[#253672] rounded-full cursor-pointer hover:bg-white transition group">
        <svg
          className="w-6 h-6 text-white group-hover:text-[#253672]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutUsAndServices;