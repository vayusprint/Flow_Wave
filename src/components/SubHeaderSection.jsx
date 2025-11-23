// import React from 'react'

// const SubHeaderSection = ({ src, alt, SubheadingDesc, SubheadingTitle }) => {
//     return (
//         <div className='w-full 428:h-[400px] h-[260px]  relative'>
//             <div className='w-full flex flex-col 1024px:gap-36 428:gap-28 gap-20 absolute z-10 justify-center items-center h-full'>
//                 <p className='text-primary font-bold font-montserrat text-64 leading-64 w-full text-center'>{SubheadingTitle}</p>
//                 <p className='font-quicksand font-medium text-20 leading-20 text-white text-center 428:w-3/5 w-[80%]'>{SubheadingDesc}</p>
//             </div>
//             <div className='bg-black/70 w-full h-full absolute'></div>
//             <img loading="lazy" className='w-full h-full object-cover' src={src} alt={alt} />
//         </div>
//     )
// }

// export default SubHeaderSection


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SubHeaderSection = ({ src, alt, SubheadingDesc, SubheadingTitle }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true); // trigger animation after 3 seconds
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // Animation Variants
    const textVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <div className="w-full 428:h-[400px] h-[260px] relative overflow-hidden">

            {/* Text Section */}
            <div className="w-full flex flex-col 1024px:gap-36 428:gap-28 gap-20 absolute z-10 justify-center items-center h-full">

                {/* Title Animation */}
                <motion.p
                    className="text-primary font-bold font-montserrat text-64 leading-64 w-full text-center"
                    initial="hidden"
                    animate={animate ? "visible" : "hidden"}
                    variants={textVariant}
                >
                    {SubheadingTitle}
                </motion.p>

                {/* Description Animation (slightly delayed) */}
                <motion.p
                    className="font-quicksand font-medium text-20 leading-20 text-white text-center 428:w-3/5 w-[80%]"
                    initial="hidden"
                    animate={animate ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
                        },
                    }}
                >
                    {SubheadingDesc}
                </motion.p>

            </div>

            {/* Overlay */}
            <div className="bg-black/70 w-full h-full absolute"></div>

            {/* Background Image */}
            <img loading="lazy" className="w-full h-full object-cover" src={src} alt={alt} />
        </div>
    );
};

export default SubHeaderSection;

