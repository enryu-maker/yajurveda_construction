import React from "react";
import { useTranslation } from "react-i18next";
import projectImageUrl from "../../assets/Home/Project/Project_bg.jpg";

const ProjectsHero = () => {
  const { t } = useTranslation('projects');

  return (
    <div id="projects" className="relative w-full min-h-screen flex items-center text-white overflow-hidden 
                         pt-32 sm:pt-36 md:pt-40 lg:pt-0 px-4 sm:px-8 lg:px-16">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${projectImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        <h2 className="text-center text-3xl sm:text-5xl font-[PoppinsRegular] my-10 sm:my-16 lg:my-10 opacity-90">
          {t('sectionTitle')}
        </h2>

        <div className="text-left">

          <div className="inline-block px-3 sm:px-5 py-1.5 sm:py-2 
                           text-xs sm:text-sm font-[PoppinsRegular] 
                           bg-[#253672] rounded-full mb-5 sm:mb-6">
            {t('projectStatus')}
          </div>

          <h1
            className="
              text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl
              font-[PoppinsSbold] tracking-tight 
              leading-[1.15] mb-6 sm:mb-8
              break-words
            "
          >
            {t('projectTitle.line1')}
            <br className="" />
            {t('projectTitle.line2')}
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-[PoppinsRegular] max-w-2xl 
                         mb-6 leading-relaxed">
            {t('projectDescription')}
          </p>
        </div>

        <div className="flex justify-start sm:justify-end md:mb-4 lg:mb-0">
          <div className="inline-flex items-center bg-[#D9D9D9] space-x-3 
                           px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">

            <div className="bg-[#253672] p-2 rounded-full">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <span className="text-xs sm:text-sm md:text-lg font-[PoppinsRegular] text-[#253672]">
              {t('projectLocation')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHero;