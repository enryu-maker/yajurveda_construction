import { useTranslation } from "react-i18next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PageHero from "../components/PageHero";

const h2 = "font-[PoppinsSbold] text-3xl sm:text-4xl text-[#253672] mb-8";

const AboutPage = () => {
  const { t } = useTranslation("about_page");
  const howToWork = t("howToWork", { returnObjects: true });
  const companies = t("companySection", { returnObjects: true });

  return (
    <>
      <Header />
      <PageHero title={t("about_page.mainTitle")} intro={t("about_page.introParagraph")} note={t("about_page.tagline")} />

      <div className="bg-white px-4 sm:px-8 lg:px-16 py-16 lg:py-24 text-[#253672] font-[PoppinsRegular]">
        <div className="max-w-7xl mx-auto">
          <section>
            <h2 className={h2}>{t("about_page.midTitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {howToWork.map((item) => (
                <article key={item.title} className="rounded-2xl bg-[#253672] text-white p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-[PoppinsSbold] mb-3">{item.title}</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-white/85">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 lg:mt-24">
            <h2 className={h2}>{companies.title}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {companies.names.map((name) => (
                <li key={name} className="rounded-2xl bg-[#f0f2f5] px-6 py-5 text-lg sm:text-xl font-[PoppinsMedium]">{name}</li>
              ))}
            </ul>
            <p className="mt-6 text-base sm:text-lg text-[#253672]/80">{companies.description}</p>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
