import React from 'react'
import Container from '../Container'

import fssai from "../../assets/images/fssai.png";
import udyam from "../../assets/images/udyam.png";
import apeda from "../../assets/images/APEDA.png";
import dgft from "../../assets/images/DGFT.png";
import india from "../../assets/images/india.png";


const certifications = [
  { src: fssai, alt: "FSSAI" },
  { src: udyam, alt: "Udyam Registration" },
  { src: apeda, alt: "APEDA" },
  { src: dgft, alt: "DGFT" },
  { src: india, alt: "Government of India" },
];

const GlobalStandardsSection = () => {
  return (
    <>
 <Container>
      <div className="w-full text-center py-16 mt-30">

        {/* Title */}
        <h2 className="text-primary text-40 leading-40 font-bold font-montserrat">
          Certified for Global Standards
        </h2>

        {/* Description */}
        <p className="text-black text-24 leading-24 mt-4 font-normal max-w-6xl mx-auto font-montserrat">
          Our components power projects across automotive, construction, and energy sectors. We take pride in being a reliable partner for industrial excellence.
        </p>

        {/* Divider */}
        <div className="w-full border-b border-gray-200 mt-36"></div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-100 place-items-center">
          {certifications.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className=" w-[50%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>

      </div>
    </Container>
    </>
  )
}

export default GlobalStandardsSection