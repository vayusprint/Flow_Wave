import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white px-6 md:px-16 lg:px-24 xl:px-[100px] border-t border-gray-200">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 py-10">
        {/* Left: Logo + Description + Socials */}
        <div className="md:w-1/2 max-w-xl">
          <img src={logo} alt="FlowWave Logo" className="w-44 md:w-52" />

          <p className="mt-6 font-montserrat text-base md:text-lg text-bodytext leading-relaxed">
            Flow Wave is a forward-thinking company dedicated to delivering
            innovative and sustainable solutions in the solar and hardware
            industry.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-6">
            {/* Twitter */}
            <a href="#" className="hover:opacity-80 transition">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.167 2.5a9.1 9.1 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.88 8.88 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.833a9.7 9.7 0 0 1-5.834 1.667C8.333 20 17.5 15.833 17.5 6.25q0-.35-.067-.692A6.43 6.43 0 0 0 19.167 2.5"
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a href="#" className="hover:opacity-80 transition">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225"
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="hover:opacity-80 transition">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333"
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Links + Contact */}
        <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-20">
          {/* Quick Links */}
          <div>
            <h2 className="font-montserrat font-semibold text-lg md:text-xl text-primary mb-4">
              Quick Links
            </h2>
            <ul className="space-y-3 text-bodytext text-base md:text-lg">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Home
                </a>
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
                <a href="#" className="hover:text-primary transition">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-montserrat font-semibold text-lg md:text-xl text-primary mb-4">
              Contact Information
            </h2>
            <ul className="space-y-3 text-bodytext text-base md:text-lg">
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

      {/* Bottom Section */}
      <p className="py-4 text-center text-sm text-gray-500 border-t border-gray-100">
        © 2024 FlowWave. All Rights Reserved. Built by{" "}
        <a
          href="https://prebuiltui.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline"
        >
          PrebuiltUI
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
