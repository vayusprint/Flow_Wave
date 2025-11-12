import React from "react";
import logo from "../assets/images/logo.png";
import Instagram from "../assets/icons/Instagram.svg"
import Facebook from "../assets/icons/Facebook.svg"
import Linkdin from "../assets/icons/Linkdin.svg"
import Whatsapp from "../assets/icons/Whatsapp.svg"
import Youtube from "../assets/icons/Youtube.svg"
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container>
        <footer className="w-full mt-100 bg-white border-t border-gray-200">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-10 py-10">
            {/* Left: Logo + Description + Socials */}
            <div className="md:w-1/2 max-w-xl text-center md:text-left">
              <img
                src={logo}
                alt="FlowWave Logo"
                className="mx-auto md:mx-0 w-[170px] md:w-[150px] lg:w-[180px] xl:w-[200px] h-auto transition-all duration-300"
              />
              <p className="mt-6 font-montserrat text-base md:text-24 text-bodytext leading-relaxed">
                Flow Wave is a forward-thinking company dedicated to delivering
                innovative and sustainable solutions in the solar and hardware
                industry.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center md:justify-start justify-center gap-4 mt-6">
                {/* Facebook */}
                <a href="#" className="hover:opacity-80 transition">
                  <img src={Facebook} alt="Facebook" className=" max-w-[90%]" />
                </a>

                {/* Instagram */}
                <a href="#" className="hover:opacity-80 transition">
                  <img src={Instagram} alt="Instagram" className=" max-w-[90%]" />
                </a>

                {/* LinkedIn */}
                <a href="#" className="hover:opacity-80 transition">
                  <img src={Linkdin} alt="Linkdin" className=" max-w-[90%]" />
                </a>

                {/* Whatsapp */}
                <a href="#" className="hover:opacity-80 transition">
                  <img src={Whatsapp} alt="Whatsapp" className=" max-w-[90%]" />
                </a>

                {/* Youtube */}
                <a href="#" className="hover:opacity-80 transition">
                  <img src={Youtube} alt="Youtube" className=" max-w-[90%]" />
                </a>
              </div>
            </div>

            {/* Right: Links + Contact */}
            <div className="flex flex-wrap md:flex-nowrap gap-20 md:gap-100">
              {/* Quick Links */}
              <div>
                <h2 className="font-montserrat font-semibold text-lg md:text-24 text-primary mb-4">
                  Quick Links
                </h2>
                <ul className="space-y-3 text-bodytext text-base md:text-24">
                  <li>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition">
                      Products
                    </a>
                  </li>
                  <li>
                    <Link to="/certification" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition">
                      Certifications
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-montserrat font-semibold text-lg md:text-24 text-primary mb-4">
                  Contact Information
                </h2>
                <ul className="space-y-3 text-bodytext text-base md:text-24">
                  <li className="flex flex-wrap gap-1">
                    <span className="font-semibold">Address:</span>{" "}
                    <span>Plot No. 21, Green Tech Park, Ahmedabad, Gujarat, India</span>
                  </li>
                  <li className="flex flex-wrap gap-1">
                    <span className="font-semibold">Phone:</span>{" "}
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex flex-wrap gap-1">
                    <span className="font-semibold">Email:</span>{" "}
                    <span>flowwave@gmail.com</span>
                  </li>
                  <li className="flex flex-wrap gap-1">
                    <span className="font-semibold">Working Hours:</span>
                    <span>Mon – Sat | 9:00 AM – 6:00 PM</span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Container>
      <div className="w-full bg-[#0083BF1A] text-gray-500 text-16 md:text-18 py-4">
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
            <div className="flex gap-50 font-montserrat text-primary text-16 md:text-18">
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
  );
};

export default Footer;
