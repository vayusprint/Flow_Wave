import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import NavandFooter_Layout from '../layouts/NavandFooter_Layout'
import TermAndCondition from '../pages/Terms&Condition'

const MainWebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavandFooter_Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/term-condition" element={<TermAndCondition />} />
          {/* add more routes here */}

        </Route>


        {/* fallback for unknown routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainWebRoutes