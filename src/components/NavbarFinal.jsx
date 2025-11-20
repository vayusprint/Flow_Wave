// import React from "react";
// import FlowWaveLogo from "../assets/images/logo.png";
// import MenuIcon from "../assets/icons/menu_icon.svg";
// import CancelIcon from "../assets/icons/cancel_icon.svg";
// import Logo from '../assets/images/logo.png'

// const NavbarFinal = () => {

//     return (
//         <>
//             <div className="w-full h-[150px] bg-[#E9F2F8] ">
//                 <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 h-full">
//                     <div className="flex justify-between items-center w-full h-full">
//                         <img src={Logo}  />


//                         <div className="flex gap-80 justify-evenly items-center">
//                             <p className="font-quicksand font-semibold text-24 leading-24 text-primary">Home</p>
//                             <p className="font-quicksand font-semibold text-24 leading-24 text-primary">About Us</p>
//                             <p className="font-quicksand font-semibold text-24 leading-24 text-primary">Products</p>
//                             <p className="font-quicksand font-semibold text-24 leading-24 text-primary">Certifications</p>
//                             <button className="text-center py-12 px-24 rounded-lg bg-primary text-white font-quicksand font-ml text-24 leading-24 ">
//                                 Contact Us
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// };


// export default NavbarFinal;


import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import MenuIcon from "../assets/icons/menu_icon.svg";
import CancelIcon from "../assets/icons/cancel_icon.svg";
import { Link } from "react-router-dom";

const NavbarFinal = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
            // Add a sticky effect after user scrolls past hero section
            if (window.scrollY > heroHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleMobileLinkClick = () => {
        setMenuOpen(false); // close the menu
    };

    return (
        <>
            {/* Navbar */}
            <div
                className={` top-0 left-0 w-full 1024px:h-[150px] 428:h-100 h-80 fixed z-50 inset-0 transition-all duration-700
          ${scrolled ? "bg-[#E9F2F8] shadow-md" : "bg-[#E9F2F8]"}
        `}
            >
                <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 w-full h-full  flex justify-between items-center">
                    <img src={Logo} alt="Logo" className="1024px:h-auto 428:h-60 h-40 w-auto" />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-80 items-center">
                        <Link to='/'>
                            <p className="font-quicksand font-semibold text-24 text-primary cursor-pointer">
                                Home
                            </p>
                        </Link>
                        <Link to='/about-us'>
                            <p className="font-quicksand font-semibold text-24 text-primary cursor-pointer">
                                About Us
                            </p>
                        </Link>
                        <Link to='/product-list'>
                            <p className="font-quicksand font-semibold text-24 text-primary cursor-pointer">
                                Products
                            </p>
                        </Link>
                        <Link to='/certification'>
                            <p className="font-quicksand font-semibold text-24 text-primary cursor-pointer">
                                Certifications
                            </p>
                        </Link>
                        <Link to='/contact-us'>
                            <button className="py-3 px-6 rounded-lg bg-primary text-white font-quicksand font-ml text-24 cursor-pointer">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <img
                            src={MenuIcon}
                            alt="Menu"
                            className="h-28 w-28 cursor-pointer"
                            onClick={() => setMenuOpen(true)}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black/30 z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setMenuOpen(false)}
            ></div>

            {/* Mobile Side Drawer */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-white z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } flex flex-col p-6 gap-6`}
            >
                <div className="flex justify-end">
                    <img
                        src={CancelIcon}
                        alt="Close"
                        className="h-28 w-28 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    />
                </div>
                <div className="h-[40%]  justify-between flex flex-col">
                    <div className=" flex flex-col gap-32">
                        <Link to='/' onClick={handleMobileLinkClick}>
                            <p className="font-quicksand font-semibold text-24 text-primary cursor-pointer">
                                Home
                            </p>
                        </Link>
                        <Link to='/about-us' onClick={handleMobileLinkClick}>
                            <p className="font-quicksand font-semibold text-24 text-primary cursor-pointer">
                                About Us
                            </p>
                        </Link>
                        <Link to='/products' onClick={handleMobileLinkClick}>
                            <p className="font-quicksand font-semibold text-24 text-primary cursor-pointer">
                                Products
                            </p>
                        </Link>
                        <Link to='/certification' onClick={handleMobileLinkClick}>
                            <p className="font-quicksand font-semibold text-24 text-primary cursor-pointer">
                                Certifications
                            </p>
                        </Link>
                    </div>
                    <Link to='/contact-us' onClick={handleMobileLinkClick}>
                        <button className="py-3 px-6 rounded-lg bg-primary text-white font-quicksand font-ml text-24">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavbarFinal;

