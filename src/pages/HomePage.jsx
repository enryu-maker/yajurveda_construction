import React from 'react'
import { Helmet } from 'react-helmet';
import Header from '../components/Header/Header'
import HeroSection from '../components/Home/HeroSection'
import AboutUsAndServices from '../components/Home/AboutUsAndServices'
import ProjectsHero from '../components/Home/ProjectsHero'
import ClientFeedback from '../components/Home/ClientFeedback'
import ContactForm from '../components/Home/ContactForm'
import Footer from '../components/Footer/Footer'
import SocialGallery from '../components/Home/SocialGallery'

const HomePage = () => {

  // Use the context provided in your sections for rich, accurate metadata
  const tagline = "Building Dreams. Developing Lands. Redefining Spaces.";
  const description = "Yajurved Construction delivers modern, durable, and thoughtfully designed spaces. Specializing in Real Estate Development, Litigation Property assistance, and Construction Management across India.";
  const keywords = "Yajurved Construction, construction company, real estate development, property management, litigation property assistance, Nashik, Pune, India, land development, commercial projects";

  return (
    <>

      <Helmet>
        {/* Primary SEO Tags */}
        <title>Yajurved Construction Pvt. Ltd. | {tagline}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          name="keywords"
          content={keywords}
        />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Yajurved Construction Pvt. Ltd." />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />

        {/* IMPORTANT: Update these with your live site details */}
        <meta property="og:url" content="https://www.yajurvedaconstruction.com" />
        <meta property="og:image" content="https://www.yajurvedaconstruction.com/Yajurved_Logo.png" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.yajurvedaconstruction.com" />

        {/* Ensure HTML language is set for accessibility and SEO */}
        <html lang="en" />
      </Helmet>

      <Header />
      <HeroSection />
      <AboutUsAndServices />
      {/* <ProjectsHero /> */}
      {/* <ClientFeedback /> */}
      <SocialGallery />
      <ContactForm />
      <Footer />

    </>
  )
}

export default HomePage