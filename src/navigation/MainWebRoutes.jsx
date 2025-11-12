import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import NavandFooter_Layout from '../layouts/NavandFooter_Layout'
import TermAndCondition from '../pages/Terms&Condition'
import ContactPage from '../pages/ContactPage'
import { ToastContainer } from 'react-toastify'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Certification from '../pages/Certification'

const MainWebRoutes = () => {
  return (
    <BrowserRouter>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route element={<NavandFooter_Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/term-condition" element={<TermAndCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactPage />} />
          {/* add more routes here */}

        </Route>


        {/* fallback for unknown routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainWebRoutes