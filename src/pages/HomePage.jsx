import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Home/HeroSection'
import AboutUsAndServices from '../components/Home/AboutUsAndServices'
import ContactForm from '../components/Home/ContactForm'
import Footer from '../components/Footer/Footer'
import FaqSection from '../components/Home/FaqSection'

// Head tags (title, canonical, schema) come from src/seo.js at prerender time.
const HomePage = () => (
  <>
    <Header />
    <HeroSection />
    <AboutUsAndServices />
    <FaqSection />
    <ContactForm />
    <Footer />
  </>
)

export default HomePage
