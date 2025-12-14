import React from "react";
import Container from "../Container";
import heroImage from "../../assets/images/heroimage.jpg";
import home_hero from "../../assets/images/home_hero.jpg";
import PrimaryButton from "../PrimaryButton";
import AboutStatsSection from "../AboutUs/AboutStatsSection";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/about-us')
  }

  return (
    <>
      <section
        className="
          relative w-full h-screen 
          flex items-center justify-center
        "
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            loading="lazy"
            // src={heroImage}
            src={home_hero}
            alt="Hero"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 w-full text-center px-4">

            <h5 className="text-96 leading-96 font-montserrat text-primary font-semibold mx-auto">
              Powering the Future of Industry
            </h5>

            <p className="
              font-quicksand font-medium 
              text-28 leading-28 text-white 
              max-w-6xl mx-auto 
              mt-50
            ">
              We specialize in manufacturing high-performance industrial components designed
              for precision, strength, and reliability. Partnering with global industries to
              deliver solutions that power progress.
            </p>

            {/* Buttons */}
            <div className="flex 450:flex-row  flex-col items-center justify-center gap-3 mt-32">

              <PrimaryButton title={"Explore"} pl={64} pr={64} onClick={() => handleNavigate()} />

              <Link to='/contact-us'>
                <button className='border-2 border-primary rounded-lg px-[64px] py-12'>
                  <p className='text-primary text-center font-medium font-montserrat text-20 leading-20'>Contact Us</p>
                </button>
              </Link>
            </div>
          </div>
        </Container>


      </section>
              {/* STATS SECTION – OVERLAP LIKE IMAGE */}
        <div className="lg:absolute bottom-[-50%] items-center flex justify-center w-full z-20">
          <AboutStatsSection />
        </div>
    </>
  );
};

export default HeroSection;
