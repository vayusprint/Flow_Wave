import React from 'react'
import Container from './Container'
import Logo from "../assets/images/logo_2.png";
import Instagram from "../assets/icons/Instagram.svg"
import Facebook from "../assets/icons/Facebook.svg"
import Linkdin from "../assets/icons/Linkdin.svg"
import Whatsapp from "../assets/icons/Whatsapp.svg"
import Youtube from "../assets/icons/Youtube.svg"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Container>

        <div className='w-full h-0.5 bg-divider rounded-full mt-100'></div>

        <div className='w-full flex md:flex-row flex-col md:justify-between justify-center items-center py-32 sm:py-40 md:py-60 gap-32 md:gap-0 sm:gap-40 '>

          {/* Right Content */}

          <div className='w-full md:w-2/3 flex flex-col gap-24 sm:gap-40 md:items-start items-center'>
            <img src={Logo} className="w-[200px] h-auto md:w-[220px] md:h-auto lg:w-[256px] lg:h-auto " alt='logo' />

            <p className='text-16 leading-16 font-montserrat font-normal text-bodytext text-center md:text-start '>Flow Wave is a forward-thinking company dedicated to delivering innovative and sustainable solutions in the solar and hardware industry. </p>

            <div className='flex gap-16'>
              {/* <a href="#" className="hover:opacity-80 transition">
                <img loading="lazy" src={Facebook} alt="Youtube" className=" max-w-[90%]" />
              </a> */}
              <a href="https://www.instagram.com/flow_wave_9924?igsh=Mjd4YjBtY3Npejho" className="hover:opacity-80 transition">
                <img loading="lazy" src={Instagram} alt="Youtube" className=" max-w-[90%]" />
              </a>
              <a href="https://www.linkedin.com/in/flow-wave-instrument-31718335b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:opacity-80 transition">
                <img loading="lazy" src={Linkdin} alt="Youtube" className=" max-w-[90%]" />
              </a>
              <a
                href="https://wa.me/9876543210?text=Hello%20Flow%20Wave%20Team!"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img loading="lazy" src={Whatsapp} alt="Youtube" className=" max-w-[90%]" />
              </a>
              {/* <a href="#" className="hover:opacity-80 transition">
                <img loading="lazy" src={Youtube} alt="Youtube" className=" max-w-[90%]" />
              </a> */}
            </div>
          </div>


          {/* Left Content */}
          <div className='w-full flex flex-col md:flex-row md:justify-end gap-20 sm:gap-28 md:gap-0'>
            <div className='md:w-[30%] w-full  flex flex-col gap-28 sm:gap-36 text-center md:text-start '>
              <p className='font-montserrat font-medium text-primary text-24 leading-24 '>Quick Links</p>

              <div className='flex flex-col gap-16 sm:gap-24'>
                <Link to='/' onClick={() => window.scroll(0,0)}>
                  <p className='font-montserrat font-normal text-16 leading-16 text-bodytext hover:text-primary hover:underline'>Home</p>
                </Link>
                <Link to='/about-us' onClick={() => window.scroll(0, 0)}>
                  <p className='font-montserrat font-normal text-16 leading-16 text-bodytext hover:text-primary hover:underline'>About Us</p>
                </Link>
                <Link to='/product-list' onClick={() => window.scroll(0, 0)}>
                  <p className='font-montserrat font-normal text-16 leading-16 text-bodytext hover:text-primary hover:underline'>Products</p>
                </Link>
                <Link to='/certification' onClick={() => window.scroll(0, 0)}>
                  <p className='font-montserrat font-normal text-16 leading-16 text-bodytext hover:text-primary hover:underline'>Certifications</p>
                </Link>
                <Link to='/contact-us' onClick={() => window.scroll(0, 0)}>
                  <p className='font-montserrat font-normal text-16 leading-16 text-bodytext hover:text-primary hover:underline'>Contact Us</p>
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-28 sm:gap-36 text-center md:text-start '>
              <p className='font-montserrat font-medium text-primary text-24 leading-24'>Contacts information</p>

              <div className='flex flex-col gap-24'>
                <p className='font-montserrat font-normal text-16 leading-16 text-bodytext'> <span className='font-montserrat font-semibold text-16 leading-16 text-bodytext '>Address : </span>Plot No. 21, Green Tech Park, Ahmedabad, Gujarat, India</p>
                <p className='font-montserrat font-normal text-16 leading-16 text-bodytext'> <span className='font-montserrat font-semibold text-16 leading-16 text-bodytext '>Phone : </span>+91 98765 43210</p>
                <p className='font-montserrat font-normal text-16 leading-16 text-bodytext'> <span className='font-montserrat font-semibold text-16 leading-16 text-bodytext '>Email : </span>flowwave@gmail.com</p>
                <p className='font-montserrat font-normal text-16 leading-16 text-bodytext'> <span className='font-montserrat font-semibold text-16 leading-16 text-bodytext '>Working Hours : </span> Mon – Sat | 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="w-full bg-[#0083BF1A] text-gray-500 text-18 leading-18 py-4">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Left Text */}
            <div className="text-center md:text-left">
              © 2025 <span className="font-semibold text-primary">Flow Wave</span>. All Rights Reserved. | Designed by{" "}
              <a
                href="https://vayusprint.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary cursor-pointer font-medium hover:underline"
              >
                VAYU SPRINT
              </a>
            </div>

            {/* Right Links */}
            <div className="flex gap-50 font-montserrat text-primary text-18 leading-18">
              <Link
                to="/term-condition"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="underline hover:text-primary/80"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy-policy"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="underline hover:text-primary/80"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer