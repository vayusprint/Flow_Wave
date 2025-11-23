import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import { motion } from "framer-motion";

import bg from "../../assets/images/buildingbg.png"
import Testimonials from '../Testimonials';

const testimonials = [
    {
        img: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jane Cooper",
        role: "Marketing Coordinator",
        desc: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success.",
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jane Cooper",
        role: "Marketing Coordinator",
        desc: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success.",
    },
    {
        img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jane Cooper",
        role: "Marketing Coordinator",
        desc: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success.",
    },
    {
        img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jane Cooper",
        role: "Marketing Coordinator",
        desc: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success.",
    },
];

const visibleCards = 3;

// cloning for infinite loop
const extendedTestimonials = [
  ...testimonials.slice(-visibleCards),
  ...testimonials,
  ...testimonials.slice(0, visibleCards)
];

const ORIGINAL_LENGTH = testimonials.length;

const TestimonialSection = () => {

  // start at center so infinite loop works
  const [index, setIndex] = useState(visibleCards);
  

  const nextSlide = () => setIndex(prev => prev + 1);
  const prevSlide = () => setIndex(prev => prev - 1);

  // loop logic
  useEffect(() => {
    if (index >= ORIGINAL_LENGTH + visibleCards) {
      setTimeout(() => setIndex(visibleCards), 0);
    }

    if (index < visibleCards) {
      setTimeout(() => setIndex(ORIGINAL_LENGTH + visibleCards - 1), 0);
    }
  }, [index]);

  const xPercent = `-${index * (100 / visibleCards)}%`;

  // AUTO SCROLL
useEffect(() => {
  const interval = setInterval(() => {
    setIndex(prev => prev + 1);
  }, 3000); // 3 sec autoplay

  return () => clearInterval(interval);
}, []);

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center my-100">
      <Container>

        <h2 className="text-primary text-64 leading-64 font-semibold font-montserrat">
          Trusted by Industry Leaders
        </h2>

        <p className="text-black text-24 leading-24 font-normal max-w-7xl mt-4 font-montserrat">
          Explore our range of precision-engineered industrial components built for
          performance, durability, and reliability.
        </p>

        <div className="mt-14">
{/* 
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: xPercent }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(e, info) => {
                const offset = info.offset.x;
                const velocity = info.velocity.x;
                const threshold = 100;

                if (offset < -threshold || velocity < -500) nextSlide();
                else if (offset > threshold || velocity > 500) prevSlide();
              }}
            >
              {extendedTestimonials.map((item, i) => (
                <div
                  key={i}
                  style={{ flex: `0 0 ${100 / visibleCards}%` }}
                  className="shrink-0 bg-white rounded-[20px] px-40 py-[72px] shadow-sm border border-gray-100"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-50 h-50 object-cover rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-extrabold font-montserrat text-20 leading-20">{item.name}</h3>
                      <p className="text-muted_text text-20 leading-20 font-medium">{item.role}</p>
                    </div>
                  </div>

                  <p className="text-bodytext leading-16 text-16 mt-5 font-poppins font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div> */}
<Testimonials />
        </div>

      </Container>
    </div>
  );
}

export default TestimonialSection
