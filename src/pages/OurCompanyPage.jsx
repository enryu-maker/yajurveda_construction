import { useTranslation } from "react-i18next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PageHero from "../components/PageHero";

const h2 = "font-[PoppinsSbold] text-3xl sm:text-4xl text-[#253672] mb-6";

const OurCompanyPage = () => {
  const { t } = useTranslation("ourcompany_page");
  const points = t("differencePoints", { returnObjects: true });

  return (
    <>
      <Header />
      <PageHero title={t("projectName")} intro={t("projectFocus")} />

      <div className="bg-white px-4 sm:px-8 lg:px-16 py-16 lg:py-24 text-[#253672] font-[PoppinsRegular]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[["missionTitle", "missionStatement"], ["visionTitle", "visionStatement"]].map(([title, body]) => (
              <section key={title} className="rounded-2xl bg-[#253672] text-white p-6 sm:p-8">
                <h2 className="text-2xl font-[PoppinsSbold] mb-3 capitalize">{t(title).toLowerCase()}</h2>
                <p className="text-base sm:text-lg leading-relaxed text-white/85">{t(body)}</p>
              </section>
            ))}
          </div>

          <section className="mt-16 lg:mt-24 max-w-4xl">
            <h2 className={h2}>{t("ourJourneyTitle")}</h2>
            <p className="text-lg leading-relaxed">{t("historySummary")}</p>
          </section>

          <section className="mt-16 lg:mt-24">
            <h2 className={h2}>{t("differenceTitle")}</h2>
            <p className="text-lg leading-relaxed max-w-3xl mb-8">{t("differenceIntro")}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {points.map((p) => (
                <li key={p} className="rounded-2xl bg-[#f0f2f5] p-5 text-base sm:text-lg leading-relaxed">{p}</li>
              ))}
            </ul>
          </section>

          <p className="mt-16 pt-8 border-t border-[#253672]/15 text-lg leading-relaxed max-w-4xl">{t("teamExpertise")}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurCompanyPage;
