import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import NavbarFinal from '../components/NavbarFinal'
import WhatsappIcon from '../assets/images/whatsapp.png'
import { motion } from "framer-motion";




const NavandFooter_Layout = () => {
  return (
    <>
      <NavbarFinal />


      <div className="fixed z-100 bottom-0 right-0 w-60 sm:w-80 lg:w-100 m-10">
        <a
          href="https://wa.me/9265753274?text=Hello%20Flow%20Wave%20Team!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={WhatsappIcon}
            alt="whatsapp_logo"
            className="cursor-pointer"
            animate={{
              scale: [1, 1.08, 1],   // breathing effect
              opacity: [1, 0.9, 1],  // optional smoother feel
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </a>
      </div>


      {/* Updated content wrapper — no fixed height paddings */}
      <main className="mt-80 md:mt-100">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default NavandFooter_Layout
