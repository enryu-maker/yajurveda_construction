import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Home/HeroSection'
import AboutUsAndServices from '../components/Home/AboutUsAndServices'
import ProjectsHero from '../components/Home/ProjectsHero'
import ClientFeedback from '../components/Home/ClientFeedback'
import ContactForm from '../components/Home/ContactForm'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <HeroSection />
        <AboutUsAndServices />
        <ProjectsHero />
        <ClientFeedback />
        <ContactForm />
        <Footer />
        
    </>
  )
}

export default Home