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

        <div className='w-full h-0.5 bg-divider rounded-full mt-100'>

        </div>
        <div className='w-full flex gap-10 py-60 '>

          {/* Right Content */}

          <div className='w-2/3 flex flex-col gap-40'>
            <img src={Logo} className=" h-[68px] w-[256px] " alt='logo' />

            <p className='text-start text-20 leading-20 font-montserrat font-normal text-bodytext'>Flow Wave is a forward-thinking company dedicated to delivering innovative and sustainable solutions in the solar and hardware industry. </p>

            <div className='flex gap-16'>
              <a href="#" className="hover:opacity-80 transition">
                <img loading="lazy" src={Facebook} alt="Youtube" className=" max-w-[90%]" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img loading="lazy" src={Instagram} alt="Youtube" className=" max-w-[90%]" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img loading="lazy" src={Linkdin} alt="Youtube" className=" max-w-[90%]" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img loading="lazy" src={Whatsapp} alt="Youtube" className=" max-w-[90%]" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img loading="lazy" src={Youtube} alt="Youtube" className=" max-w-[90%]" />
              </a>
            </div>
          </div>


          <div className='w-full flex gap-40'>
            <div className='w-[30%]  flex flex-col gap-36'>
              <p className='font-montserrat font-medium text-primary text-24 leading-24'>Quick Links</p>

              <div className='flex flex-col gap-24'>
                <Link>
                  <p className='font-montserrat font-normal text-20 leading-20 text-bodytext'>Home</p>
                </Link>
                <Link>
                  <p className='font-montserrat font-normal text-20 leading-20 text-bodytext'>About Us</p>
                </Link>
                <Link>
                  <p className='font-montserrat font-normal text-20 leading-20 text-bodytext'>Products</p>
                </Link>
                <Link>
                  <p className='font-montserrat font-normal text-20 leading-20 text-bodytext'>Certifications</p>
                </Link>
                <Link>
                  <p className='font-montserrat font-normal text-20 leading-20 text-bodytext'>Contact Us</p>
                </Link>
              </div>
            </div>
            <div className='w-full flex flex-col gap-36'>
              <p className='font-montserrat font-medium text-primary text-24 leading-24'>Contacts information</p>

              <div className='flex flex-col gap-24'>
                <p className='font-montserrat font-normal text-20 leading-20 text-bodytext'> <span className='font-montserrat font-semibold text-20 leading-20 text-bodytext '>Address : </span>Plot No. 21, Green Tech Park, Ahmedabad, Gujarat, India</p>
                <p className='font-montserrat font-normal text-20 leading-20 text-bodytext'> <span className='font-montserrat font-semibold text-20 leading-20 text-bodytext '>Phone : </span>+91 98765 43210</p>
                <p className='font-montserrat font-normal text-20 leading-20 text-bodytext'> <span className='font-montserrat font-semibold text-20 leading-20 text-bodytext '>Email : </span>flowwave@gmail.com</p>
                <p className='font-montserrat font-normal text-20 leading-20 text-bodytext'> <span className='font-montserrat font-semibold text-20 leading-20 text-bodytext '>Working Hours : </span> Mon – Sat | 9:00 AM – 6:00 PM</p>
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