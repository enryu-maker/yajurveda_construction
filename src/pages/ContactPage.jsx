import { useTranslation } from "react-i18next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PageHero from "../components/PageHero";
import ContactForm from "../components/Home/ContactForm";

const ContactPage = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Header />
      <PageHero title={t("pages.contact.h1")} intro={t("pages.contact.intro")} />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
