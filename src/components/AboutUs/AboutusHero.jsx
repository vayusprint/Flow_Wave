// import React from 'react'
// import Container from '../Container'
// import workerImg from "../../assets/images/worker_aboutus.png"
// import PrimaryButton from '../PrimaryButton'

// const AboutusHero = () => {
//     return (
//         <>
//             <Container>
//                 <section className="mt-100">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
//                         {/* Image Section */}
//                         <div className="w-full flex justify-center items-center">
//                             <
//                                 src={workerImg}
//                                 alt="Industrial Worker"
//                                 className="relative w-full rounded-lg shadow-xl"
//                             />
//                         </div>


//                         {/* Content Section */}
//                         <div>
//                             <h2 className="font-montserrat text-primary text-64 leading-64 font-semibold border-b-2 border-divider pb-16">
//                                 Flow Wave
//                             </h2>


//                             <p className="font-poppins font-normal text-20 text-bodytext leading-20 py-16">
//                                 At Flow Wave we specialize in designing and manufacturing
//                                 high-quality industrial parts that power progress across global
//                                 industries. With a focus on precision, innovation, and
//                                 reliability, we deliver solutions that meet the toughest
//                                 engineering standards. Our expert team combines years of
//                                 experience with advanced technology to ensure excellence in every
//                                 component we produce. We believe in building long-term
//                                 partnerships through trust, performance, and consistent quality.
//                                 From concept to completion, we’re dedicated to engineering the
//                                 future of industrial innovation.
//                             </p>


//                             <p className="font-poppins font-normal text-20 text-bodytext leading-20 pb-32">
//                                 At Flow Wave we specialize in designing and manufacturing
//                                 high-quality industrial parts that power progress across global
//                                 industries. With a focus on precision, innovation, and
//                                 reliability, we deliver solutions that meet the toughest
//                                 engineering standards. Our expert team combines years of
//                                 experience with advanced technology to ensure excellence in every
//                                 component we produce.
//                             </p>

//                             <PrimaryButton title={"Explore our products"} pl={24} pr={24}/>
                        
//                         </div>
//                     </div>
//                 </section>
//             </Container>
//         </>
//     )
// }

// export default AboutusHero
import React from 'react'
import Container from '../Container'
import workerImg from "../../assets/images/worker_aboutus.png"
import PrimaryButton from '../PrimaryButton'
import { motion } from "framer-motion"

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
}

const AboutusHero = () => {
    return (
        <Container>
            <section className="mt-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">

                    {/* Image Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="w-full flex justify-center items-center"
                    >
                        <img
                            loading='lazy'
                            src={workerImg}
                            alt="Industrial Worker"
                            className="relative w-full rounded-lg shadow-xl"
                        />
                    </motion.div>

                    {/* Content Animation with Stagger */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.15 }}
                    >
                        <motion.h2
                            variants={textVariants}
                            className="font-montserrat text-primary text-64 leading-64 font-semibold border-b-2 border-divider pb-16"
                        >
                            Flow Wave
                        </motion.h2>

                        <motion.p
                            variants={textVariants}
                            className="font-poppins font-normal text-20 text-bodytext leading-20 py-16"
                        >
                                 At Flow Wave we specialize in designing and manufacturing
                                 high-quality industrial parts that power progress across global
                                 industries. With a focus on precision, innovation, and
                                 reliability, we deliver solutions that meet the toughest
                                 engineering standards. Our expert team combines years of
                                 experience with advanced technology to ensure excellence in every
                                 component we produce. We believe in building long-term
                                 partnerships through trust, performance, and consistent quality.
                                 From concept to completion, we’re dedicated to engineering the
                                 future of industrial innovation.
                        </motion.p>

                        <motion.p
                            variants={textVariants}
                            className="font-poppins font-normal text-20 text-bodytext leading-20 pb-32"
                        >
                            At Flow Wave we specialize in designing and manufacturing
                            high-quality industrial parts that power progress across global
                            industries. With a focus on precision, innovation, and
                            reliability, we deliver solutions that meet the toughest
                            engineering standards.
                        </motion.p>

                        <motion.div
                            variants={textVariants}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <PrimaryButton title={"Explore our products"} pl={24} pr={24}/>
                        </motion.div>

                    </motion.div>
                </div>
            </section>
        </Container>
    )
}

export default AboutusHero
