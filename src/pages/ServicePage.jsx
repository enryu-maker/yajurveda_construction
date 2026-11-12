import { Link, useParams } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PageHero from "../components/PageHero";
import NotFoundPage from './NotFoundPage';
import { SERVICES } from '../content/services';
import { EMAIL, PHONE_DISPLAY, TEL, WHATSAPP } from '../contact';

const ServicePage = () => {
  const { slug } = useParams();
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return <NotFoundPage />;

  return (
    <>
      <Header />
      <PageHero
        title={s.h1}
        before={
          <nav aria-label="Breadcrumb" className="text-sm text-white/75 mb-5">
            <Link to="/" className="hover:underline">Home</Link> / <Link to="/services" className="hover:underline">Services</Link> / <span>{s.name}</span>
          </nav>
        }
      />
      <div className="w-full bg-white py-16 lg:py-20 px-4 sm:px-8 lg:px-16 text-[#253672] font-[PoppinsRegular]">
        <article className="max-w-7xl mx-auto *:max-w-4xl">
          <p className="text-lg leading-relaxed mb-10">{s.intro}</p>

          {s.sections.map((sec) => (
            <section key={sec.h2} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-[PoppinsSbold] mb-4">{sec.h2}</h2>
              {sec.p?.map((p, i) => <p key={i} className="text-lg leading-relaxed mb-4">{p}</p>)}
              {sec.list && (
                <ul className="list-disc ml-6 space-y-2 text-lg leading-relaxed">
                  {sec.list.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              )}
            </section>
          ))}

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-[PoppinsSbold] mb-4">Frequently asked questions</h2>
            {s.faqs.map(({ q, a }) => (
              <div key={q} className="mb-5">
                <h3 className="text-xl font-[PoppinsSbold] mb-1">{q}</h3>
                <p className="text-lg leading-relaxed">{a}</p>
              </div>
            ))}
          </section>

          <section className="rounded-2xl bg-[#253672] text-white p-6 sm:p-8">
            <h2 className="text-2xl font-[PoppinsSbold] mb-2">Talk to us about {s.name.toLowerCase()}</h2>
            <p className="mb-4 opacity-90">Office: B No-3, P No-4, Shaligram Apartment, D&apos;Souza Colony, Nashik 422002. Mon–Fri, 11 AM–5 PM.</p>
            <div className="flex flex-wrap gap-3">
              <a href={TEL} className="rounded-full bg-white text-[#253672] px-6 py-3 font-[PoppinsSbold]">Call {PHONE_DISPLAY}</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-white/70 px-6 py-2.5 font-[PoppinsMedium]">WhatsApp</a>
            </div>
            <p className="mt-4">Email: <a className="underline break-all" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </section>

          <nav className="mt-10">
            <h2 className="text-xl font-[PoppinsSbold] mb-3">Other services</h2>
            <ul className="space-y-1">
              {SERVICES.filter((x) => x.slug !== slug).map((x) => (
                <li key={x.slug}><Link className="underline" to={`/services/${x.slug}`}>{x.name} in Nashik</Link></li>
              ))}
            </ul>
          </nav>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
