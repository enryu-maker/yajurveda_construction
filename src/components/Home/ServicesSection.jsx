import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import titleImage from "../../assets/Home/About/About_bg.webp";
import mahareraImage from "../../assets/financial/strategy.webp";
import litigationImage from "../../assets/Home/About/litigation.webp";
import constructionImage from "../../assets/Home/About/construction.webp";
import financialImage from "../../assets/Home/About/financial.webp";

const IMAGES = [constructionImage, titleImage, mahareraImage, litigationImage, financialImage];
const SLUGS = ["redevelopment-nashik", "property-title-verification", "maharera-registration", "property-litigation-consultancy", "financial-consultancy"];

// Redevelopment (the primary job) leads as a wide card; the other four sit in a 2x2 grid.
export default function ServicesSection({ showHeading = true }) {
  const { t } = useTranslation("about");
  const services = t("servicesSection.cards", { returnObjects: true }).map((s, i) => ({ ...s, image: IMAGES[i], slug: SLUGS[i] }));

  return (
    <div id="services" className={showHeading ? "mt-20 scroll-mt-28" : ""}>
      {showHeading && <h2 className="text-3xl sm:text-4xl font-[PoppinsSbold] text-[#253672] mb-10">
        {t("servicesSection.heading")}
      </h2>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <article
            key={service.slug}
            className={`bg-[#253672] rounded-xl shadow-lg overflow-hidden flex flex-col ${index === 0 ? "md:col-span-2 md:flex-row" : ""}`}
          >
            <div className={`p-4 ${index === 0 ? "md:w-1/2" : ""}`}>
              <img
                src={service.image}
                alt=""
                loading="lazy"
                className={`w-full object-cover rounded-xl ${index === 0 ? "aspect-[5/2] md:aspect-auto md:h-full" : "aspect-[5/2]"}`}
              />
            </div>
            <div className={`p-6 text-white flex flex-col ${index === 0 ? "md:w-1/2 md:justify-center" : ""}`}>
              <h3 className="text-2xl font-[PoppinsSbold]">
                <Link to={`/services/${service.slug}`} className="hover:underline underline-offset-4">{service.title}</Link>
              </h3>
              <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">{service.description}</p>
              <Link to={`/services/${service.slug}`} className="mt-5 self-start text-white font-[PoppinsMedium] underline underline-offset-4">
                {t("aboutSection.learnMoreButton")}
                <span className="sr-only">: {service.title}</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
