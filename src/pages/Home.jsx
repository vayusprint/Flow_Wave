import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import OurCompany from '../components/Home/OurCompany'
import SubHeaderSection from '../components/SubHeaderSection'

import world from "../assets/images/world.jpg"
import factory from "../assets/images/factory.jpg"
import PrimaryButton from '../components/PrimaryButton'
import GlobalStandardsSection from '../components/AboutUs/GlobalStandardsSection'
import TestimonialSection from '../components/AboutUs/TestimonialSection'
import FeaturedProduct from '../components/FeaturedProduct'
import { useNavigate } from 'react-router-dom'
const Home = () => {


  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/product-list')
  }

  return (
    <>
      <HeroSection />
      <OurCompany />
      {/* <SubHeaderSection src={world} /> */}
      <div className='w-full 428:h-[400px] h-[260px]  relative my-100'>
        <div className='w-full flex flex-col 1024px:gap-36 428:gap-28 gap-20 absolute z-10 justify-center items-center h-full'>
          <p className='text-white font-bold font-montserrat text-64 leading-64 w-full text-center'>Engineering Strength, Delivering Excellence.</p>
        </div>
        <div className='bg-black/70 w-full h-full absolute'></div>
        <img loading="lazy" className='w-full h-full object-cover' src={world} alt={"world"} />
      </div>

      <FeaturedProduct />

      <GlobalStandardsSection />

      <div className='w-full 428:h-[400px] h-[260px]  relative my-100'>
        <div className='w-full flex flex-col 1024px:gap-36 428:gap-28 gap-20 absolute z-10 justify-center items-center h-full'>
          <p className='text-white font-bold font-montserrat text-36 leading-36 w-full text-center'>Ready to Experience the Power of Precision?</p>
          <p className='text-white font-montserrat font-normal max-w-2xl text-center text-20 leading-20'>Contact Flow wave today and let's explore how our technology and expertise can turn your design aspirations into a reality.</p>
          <PrimaryButton title={"Explore Products"} pl={24} pr={24} onClick={() => handleNavigate()}/>
        </div>
        <div className='bg-black/70 w-full h-full absolute'></div>
        <img loading="lazy" className='w-full h-full object-cover' src={factory} alt={"world"} />
      </div>

      <TestimonialSection />
    </>
  )
}

export default Home