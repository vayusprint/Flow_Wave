import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import NavandFooter_Layout from '../layouts/NavandFooter_Layout'
import TermAndCondition from '../pages/Terms&Condition'
import ContactPage from '../pages/ContactPage'
import { ToastContainer } from 'react-toastify'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Certification from '../pages/Certification'
import AboutUs from '../pages/AboutUs'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../pages/ProductList'
import { useLoader } from '../context/LoaderContext'

const MainWebRoutes = () => {
  const location = useLocation();
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();

    const timer = setTimeout(() => {
      hideLoader();
    }, 3000); // minimum 3 seconds

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/term-condition" element={<TermAndCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default MainWebRoutes
