// import React from 'react'

// import building from "../../assets/icons/building.svg"
// import heart from "../../assets/icons/heart.svg"
// import target from "../../assets/icons/target.svg"
// import team from "../../assets/icons/team.svg"
// import Container from '../Container'

// const highlights = [
//   {
//     icon: building,
//     title: "Our Story",
//     desc: "Flow Wave was founded with a vision to bring reliability and transparency to the trading market. We started our journey with instrument trading and later expanded into agriculture & spices trading. Flow Wave was established to build long-term trust and provide high-quality products and services to our clients.",
//   },
//   {
//     icon: heart,
//     title: "Our Values",
//     desc: "At Flow Wave, our core values are honesty, commitment, and customer satisfaction. We believe in ethical business practices and always strive to meet and exceed our clients' expectations.",
//   },
//   {
//     icon: target,
//     title: "Our Goal",
//     desc: "Our main goal is to provide customers with top-quality instrument and agricultural & spices products at fair prices with timely delivery. We aim to create a smooth and transparent trading experience for all our clients through efficiency and professionalism.",
//   },
//   {
//     icon: team,
//     title: "Our Team",
//     desc: "The Flow Wave team consists of passionate and experienced professionals in the trading field who understand market demands and ensure the best sourcing and timely delivery. Our team is focused on growth, innovation, and building lasting partnerships.",
//   },
// ];

// const AboutInfoCards = () => {
//   return (
//     <>
//  <Container>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16 mt-100">
//         {highlights.map((item, i) => (
//           <div
//             key={i}
//             className="bg-white shadow-sm rounded-xl p-10 border border-gray-100"
//           >
//             {/* Title Row */}
//             <div className="flex flex-col items-center text-center">
//              <div className=' flex gap-2 items-center justify-center'>
//               <img src={item.icon} alt={item.title} className="object-contain" />

//               <h3 className="text-primary text-36 leading-36 font-normal font-montserrat">
//                 {item.title}
//               </h3>
//               </div>

//               <div className="w-full h-px bg-gray-300 my-4"></div>

//               <p className="text-bodytext text-24 leading-24 font-montserrat">
//                 {item.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Container>
//     </>
//   )
// }

// export default AboutInfoCards
import React from 'react'
import { motion } from "framer-motion"

import building from "../../assets/icons/building.svg"
import heart from "../../assets/icons/heart.svg"
import target from "../../assets/icons/target.svg"
import team from "../../assets/icons/team.svg"
import Container from '../Container'

const highlights = [
  {
    icon: building,
    title: "Our Story",
    desc: "Flow Wave was founded with a vision to bring reliability and transparency to the trading market. We started our journey with instrument trading and later expanded into agriculture & spices trading. Flow Wave was established to build long-term trust and provide high-quality products and services to our clients.",
  },
  {
    icon: heart,
    title: "Our Values",
    desc: "At Flow Wave, our core values are honesty, commitment, and customer satisfaction. We believe in ethical business practices and always strive to meet and exceed our clients' expectations.",
  },
  {
    icon: target,
    title: "Our Goal",
    desc: "Our main goal is to provide customers with top-quality instrument and agricultural & spices products at fair prices with timely delivery. We aim to create a smooth and transparent trading experience for all our clients through efficiency and professionalism.",
  },
  {
    icon: team,
    title: "Our Team",
    desc: "The Flow Wave team consists of passionate and experienced professionals in the trading field who understand market demands and ensure the best sourcing and timely delivery. Our team is focused on growth, innovation, and building lasting partnerships.",
  },
];

const AboutInfoCards = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16 mt-100">

        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              y: -8,
              boxShadow: "0px 12px 30px rgba(0,0,0,0.12)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white rounded-xl p-10 border border-gray-100 cursor-pointer"
          >
            
            {/* Title Row */}
            <div className="flex flex-col items-center text-center">

              <motion.div
                whileHover={{ rotate: 8 }}
                transition={{ duration: 0.3 }}
                className="flex gap-2 items-center justify-center"
              >
                <img src={item.icon} alt={item.title} className="object-contain" />

                <motion.h3
                  whileHover={{ color: "#0056D6" }}
                  className="text-primary text-36 leading-36 font-normal font-montserrat"
                >
                  {item.title}
                </motion.h3>
              </motion.div>

              <div className="w-full h-px bg-gray-300 my-4"></div>

              <p className="text-bodytext text-24 leading-24 font-montserrat">
                {item.desc}
              </p>

            </div>
          </motion.div>
        ))}

      </div>
    </Container>
  )
}

export default AboutInfoCards
