import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-[90px] w-full px-6 md:px-16 lg:px-10 xl:px-[100px] flex items-center justify-between bg-body relative z-30">
      {/* Logo */}
      <a href="https://prebuiltui.com" className="flex items-center">
        <img src={logo} alt="flowwave logo" className="h-10 md:h-12" />
      </a>

      {/* Desktop Menu */}
      <ul className="font-quicksand text-18 text-primary hidden md:flex items-center gap-10 lg:gap-20">
        <li>
          <a className="hover:text-primary/70 transition" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-primary/70 transition" href="#">
            About Us
          </a>
        </li>
        <li>
          <a className="hover:text-primary/70 transition" href="#">
            Products
          </a>
        </li>
        <li>
          <a className="hover:text-primary/70 transition" href="#">
            Certifications
          </a>
        </li>
        <button
          type="button"
          className="bg-primary text-white text-sm hover:opacity-90 active:scale-95 transition-all py-3 px-6 rounded-lg"
        >
          Contact Us
        </button>
      </ul>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="menu-btn inline-block md:hidden active:scale-90 transition"
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
        className={`absolute top-[90px] left-0 w-full p-6 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-white text-lg">
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
    </nav>
  );
};

export default Navbar;
