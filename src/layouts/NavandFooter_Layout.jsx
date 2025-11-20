import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NavbarFinal from '../components/NavbarFinal'

const NavandFooter_Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarFinal />
      <div className="pt-80 428:pt-100 1024px:pt-[150px]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default NavandFooter_Layout