import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import outlineImageUrl from "../../assets/Home/Hero/vector1.png";
import skylineImageUrl from "../../assets/Home/Hero/vector3.webp";
import HeroBg from "../../assets/Home/Hero/Hero_bg.webp";
import { TEL, WHATSAPP } from "../../contact";

// Original hero layout (outline frame, skyline card, outlined button), process-led wording.
const HeroSection = () => {
  const { t } = useTranslation("home-hero");
  const lines = t("h1Lines", { returnObjects: true });

  return (
    <section id="hero-section"
      className="
        relative min-h-screen text-white
        flex flex-col items-center justify-start
        px-4 sm:px-8 lg:px-16
        pt-36 sm:pt-40 md:pt-36 lg:pt-28
        pb-6
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${HeroBg})` }}></div>
      <div className="absolute inset-0 bg-[#0a1128]/90 z-0"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl w-full mx-auto">
        <div className="flex flex-col justify-center">
          <p className="text-sm md:text-lg font-[PoppinsItalic] text-center lg:text-left opacity-80 mb-3">
            {t("heading.line1")} {t("heading.line2")} {t("heading.line3")}
          </p>

          <div className="relative my-4 xl:aspect-[796/402] xl:flex xl:items-center">
              {/* Outline frame (796x402), xl and up; text and button are laid out against its notches */}
              <div
                aria-hidden="true"
                className="hidden xl:block absolute inset-0 bg-no-repeat bg-[length:100%_100%] pointer-events-none"
                style={{ backgroundImage: `url(${outlineImageUrl})` }}
              ></div>

              <h1
                className="
                relative z-10
                text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[2.6rem] text-balance
                leading-snug xl:leading-[1.55]
                py-4 px-4 sm:px-12 lg:px-0 xl:px-10
                font-[PoppinsLight]
                text-center lg:text-left
              "
              >
                {lines.map((line, i) => (
                  <span key={i} className="xl:block">{line}{" "}</span>
                ))}
              </h1>

            <div className="flex justify-center lg:justify-start mt-4 xl:mt-0 xl:absolute xl:right-[2.5%] xl:bottom-[5%]">
              <a
                href={TEL}
                className="
                  px-8 py-3 xl:px-4 xl:py-2 text-lg md:text-xl xl:text-[0.95rem] font-[PoppinsRegular]
                  bg-white/10
                  border-2 border-white
                  rounded-2xl
                  hover:bg-white hover:text-[#0a1128]
                  transition duration-300
                "
              >
                {t("call")}
              </a>
            </div>
          </div>

          <p className="text-base md:text-lg mt-6 max-w-lg font-[PoppinsRegular] text-white/90 text-center lg:text-left mx-auto lg:mx-0">
            {t("description")}
          </p>
          <p className="mt-4 text-center lg:text-left text-base md:text-lg">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{t("whatsapp")}</a>
            <span aria-hidden="true" className="mx-3 opacity-60">·</span>
            <Link to="/services/redevelopment-nashik" className="underline underline-offset-4">{t("processLink")}</Link>
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-xl">
            <img src={skylineImageUrl} className="w-full h-auto block object-contain" alt="" />

            <p className="absolute top-8 left-18 text-white text-right px-4 py-2 font-[PoppinsMedium]">
              {t("rightSide.overlayText")}
            </p>

            <Link
              to="/services/redevelopment-nashik"
              aria-label={t("processLink")}
              className="absolute bottom-6 right-6 p-3 bg-white/10 border-2 border-white rounded-full group hover:bg-white transition duration-300"
            >
              <svg aria-hidden="true" className="w-5 h-5 text-white transform rotate-225 group-hover:text-[#0a1128]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <p className="z-10 text-sm font-[PoppinsMedium] text-center mt-6 xl:mt-0">
        {t("footerName")}
      </p>
    </section>
  );
};

export default HeroSection;
