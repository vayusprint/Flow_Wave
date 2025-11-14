import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import Container from "./Container";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 🔹 Top Info Bar */}
      <div className="w-full bg-primary text-white text-sm md:text-base 428:block hidden">
        <Container>
          <div className="flex flex-col font-montserrat md:flex-row items-center justify-between py-2">
            {/* Left side - Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <a href="tel:+91 98765 43210" className="hover:underline">
                📞 +91 98765 43210
              </a>
              <a
                href="mailto:flowwave@gmail.com"
                className="hover:underline"
              >
                ✉️ flowwave@gmail.com
              </a>
            </div>

            {/* Right side - GST Number */}
            <div className="mt-1 md:mt-0">
              <p>GST No: 24ABCDE1234F1Z5</p>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <nav className="h-[90px] w-full flex items-center justify-between bg-body relative z-30">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center text-center">
            <img
              src={logo}
              alt="Flowwave Logo"
              className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-auto"
            />
          </Link>


          {/* Desktop Menu */}
          <ul className="font-quicksand text-18 text-primary hidden lg:flex items-center gap-10 lg:gap-20">
            <li>
              <a className="hover:text-primary/70 transition" href="#">
                Home
              </a>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-primary/70 transition" href="#">
                About Us
              </Link>
            </li>
            <li>
              <a className="hover:text-primary/70 transition" href="#">
                Products
              </a>
            </li>
            <li>
              <Link to="/certification" className="hover:text-primary/70 transition" href="#">
                Certifications
              </Link>
            </li>
            <PrimaryButton title="Contact Us" pl={12} pr={12} />
          </ul>

          {/* Mobile Menu Button */}
          <button
            aria-label="menu-btn"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-btn inline-block lg:hidden active:scale-90 transition"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#000"
              >
                <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="#000"
              >
                <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
              </svg>
            )}
          </button>

          {/* Mobile Dropdown Menu */}
          <div
            className={`absolute top-[90px] left-0 w-full bg-white p-6 lg:hidden transition-all duration-300 z-1000 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
          >
            <ul className="flex flex-col space-y-4 text-bodytext text-24">
              <li>
                <a href="#" className="text-sm hover:text-gray-200 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-200 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-200 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-200 transition">
                  Certifications
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="bg-primary text-white mt-6 w-full text-24 hover:opacity-90 active:scale-95 transition-all py-3 px-6 rounded-lg"
            >
              Contact Us
            </button>
          </div>
          {/* 🔹 Background Overlay when menu is open */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-999"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
