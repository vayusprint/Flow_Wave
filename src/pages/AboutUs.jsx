import React from 'react'
import Container from '../components/Container'
import SubHeaderSection from '../components/SubHeaderSection'
// import workerImg from "../assets/images/worker_aboutus.png"
import about_us_header from "../assets/images/about_us_header.png"
import AboutStatsSection from '../components/AboutUs/AboutStatsSection'
import GlobalStandardsSection from '../components/AboutUs/GlobalStandardsSection'
import AboutInfoCards from '../components/AboutUs/AboutInfoCards'
import TestimonialSection from '../components/AboutUs/TestimonialSection'
import ProductCatalog from '../components/ProductCatalog'
import AboutusHero from '../components/AboutUs/AboutusHero'
import FeaturedProduct from '../components/FeaturedProduct'

const AboutUs = () => {
  return (
    <>
      <SubHeaderSection SubheadingTitle={"About Flow Wave"} SubheadingDesc={"Flow Wave delivers reliable engineering and innovative solutions across industries, from precision instruments to agricultural systems and quality spice production."} src={about_us_header} alt={"About flow wave"}/>
      <AboutusHero />
      <AboutStatsSection />
      <GlobalStandardsSection />
      <AboutInfoCards />
      <TestimonialSection />
      <FeaturedProduct hideHeading/>
      <ProductCatalog />
    </>
  )
}

export default AboutUs