import { useTranslation } from "react-i18next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PageHero from "../components/PageHero";
import ServicesSection from "../components/Home/ServicesSection";

const ServicesPage = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Header />
      <PageHero title={t("pages.services.h1")} intro={t("pages.services.intro")} />
      <div className="bg-[#f0f2f5] py-16 lg:py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <ServicesSection showHeading={false} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
