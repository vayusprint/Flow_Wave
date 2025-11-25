import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo_2.png";
import MenuIcon from "../assets/icons/menu_icon.svg";
import CancelIcon from "../assets/icons/cancel_icon.svg";
import { Link } from "react-router-dom";

const NavbarFinal = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
            setScrolled(window.scrollY > heroHeight);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMobileLinkClick = () => setMenuOpen(false);

    return (
        <>
            {/* Navbar */}
            <div className={`top-0 left-0 w-full fixed z-50 transition-all duration-500 ${scrolled ? "bg-[#E9F2F8] shadow-md" : "bg-[#E9F2F8]"}`}
            >
                <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-32 lg:px-48 xl:px-[64px] 2xl:px-80
                h-[90px] md:h-[110px] flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/">
                        <img
                            loading="lazy"
                            src={Logo}
                            alt="Logo"
                            className="h-40 md:h-50 w-auto"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-40 items-center">
                        <Link to="/">
                            <p className="font-quicksand font-semibold text-18 text-primary cursor-pointer">
                                Home
                            </p>
                        </Link>
                        <Link to="/about-us">
                            <p className="font-quicksand font-semibold text-18 text-primary cursor-pointer">
                                About Us
                            </p>
                        </Link>
                        <Link to="/product-list">
                            <p className="font-quicksand font-semibold text-18 text-primary cursor-pointer">
                                Products
                            </p>
                        </Link>
                        <Link to="/certification">
                            <p className="font-quicksand font-semibold text-18 text-primary cursor-pointer">
                                Certifications
                            </p>
                        </Link>
                        <Link to="/contact-us">
                            <button className="py-2.5 px-5 rounded-lg bg-primary text-white font-quicksand font-ml text-18">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <img
                            loading="lazy"
                            src={MenuIcon}
                            alt="Menu"
                            className="h-24 w-24 cursor-pointer"
                            onClick={() => setMenuOpen(true)}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black/30 z-40 transition-opacity duration-300 
                ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
                onClick={() => setMenuOpen(false)}
            ></div>

            {/* Mobile Side Drawer */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-white z-50 transform transition-transform duration-300 
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}
                flex flex-col p-6 gap-6`}
            >
                <div className="flex justify-end">
                    <img
                        loading="lazy"
                        src={CancelIcon}
                        alt="Close"
                        className="h-24 w-24 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    />
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-24 mt-10">
                    <Link to="/" onClick={handleMobileLinkClick}>
                        <p className="font-quicksand font-semibold text-20 text-primary">Home</p>
                    </Link>
                    <Link to="/about-us" onClick={handleMobileLinkClick}>
                        <p className="font-quicksand font-semibold text-20 text-primary">About Us</p>
                    </Link>
                    <Link to="/product-list" onClick={handleMobileLinkClick}>
                        <p className="font-quicksand font-semibold text-20 text-primary">Products</p>
                    </Link>
                    <Link to="/certification" onClick={handleMobileLinkClick}>
                        <p className="font-quicksand font-semibold text-20 text-primary">Certifications</p>
                    </Link>

                    <Link to="/contact-us" onClick={handleMobileLinkClick}>
                        <button className="py-2.5 px-5 rounded-lg bg-primary text-white font-quicksand font-ml text-20">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavbarFinal;


