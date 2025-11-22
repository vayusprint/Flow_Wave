import React, { useRef, useState } from 'react'
import Container from '../Container'
import { motion } from "framer-motion";

import bg from "../../assets/images/buildingbg.png"

const testimonials = [
    {
        img: "data:image/jpeg;base64,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",
        name: "Jane Cooper",
        role: "Marketing Coordinator",
        desc: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success.",
    },
    {
        img: "/assets/images/user1.jpg",
        name: "Jane Cooper",
        role: "Marketing Coordinator",
        desc: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success.",
    },
    {
        img: "/assets/images/user1.jpg",
        name: "Jane Cooper",
        role: "Marketing Coordinator",
        desc: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success.",
    },
    {
        img: "/assets/images/user1.jpg",
        name: "Jane Cooper",
        role: "Marketing Coordinator",
        desc: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases...and it was a Roaring Success.",
    },
];
const visibleCards = 3;
const TestimonialSection = () => {
   const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, testimonials.length - visibleCards));
  };
  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  // x is percentage-based translate of the entire track
  const xPercent = `-${index * (100 / visibleCards)}%`;

  return (
    <Container>
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center mt-100">
        <h2 className="text-primary text-64 leading-64 font-semibold font-montserrat">
          Trusted by Industry Leaders
        </h2>

<p className="text-black text-24 leading-24 font-normal max-w-7xl mt-4 font-montserrat">
                         Explore our range of precision-engineered industrial components built for
                         performance, durability, and reliability. Each product is designed to meet the
                         highest standards, ensuring consistent quality across every application.
                     </p>

        <div className="mt-14 relative">
          <div className="overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex gap-8"
              // animate to the percentage-based x; Framer accepts string percent
              animate={{ x: xPercent }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              // enable drag-to-swipe horizontally
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(event, info) => {
                // simple threshold swipe to change index
                const velocity = info.velocity.x;
                const offset = info.offset.x;
                const threshold = 100; // px
                if (offset < -threshold || velocity < -500) nextSlide();
                else if (offset > threshold || velocity > 500) prevSlide();
              }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  // width: each card takes 1/visibleCards of the viewport inside track
                  style={{ flex: `0 0 ${100 / visibleCards}%` }}
                  className="shrink-0 bg-white rounded-[20px] px-40 py-[72px] shadow-sm border border-gray-100"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.img}
                      alt={`${item.name} avatar`}
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
          </div>

          <div className="flex justify-center gap-4 mt-10 py-10">
            <button
              onClick={prevSlide}
              disabled={index === 0}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40"
              aria-label="Previous testimonials"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              disabled={index >= testimonials.length - visibleCards}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40"
              aria-label="Next testimonials"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TestimonialSection