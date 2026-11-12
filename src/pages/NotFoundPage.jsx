import { Link } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PageHero from "../components/PageHero";

const NotFoundPage = () => (
  <>
    <Header />
    <PageHero title="Page not found" intro="The page you are looking for does not exist.">
      <Link to="/" className="inline-block mt-8 rounded-full bg-white text-[#253672] px-6 py-3 font-[PoppinsSbold]">Go to the homepage</Link>
    </PageHero>
    <Footer />
  </>
);

export default NotFoundPage;
