import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import NavbarFinal from '../components/NavbarFinal'

const NavandFooter_Layout = () => {
  return (
    <>
      <NavbarFinal />

      {/* Updated content wrapper — no fixed height paddings */}
      <main className="mt-80 md:mt-100">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default NavandFooter_Layout
