import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Fashion from "../components/fashion/Fashion"
import FooterPage from "../pages/FooterPage"
import HeaderPage from "../pages/HeaderPage"
import MainSectionPage from "../pages/MainSectionPage"

const Router = () => {
  return (
    <>
      <section className="drawer flex flex-col overflow-auto">
        <BrowserRouter>
          <HeaderPage />
          <Routes>
            <Route path="/" element={<MainSectionPage />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/accessory" element={<Fashion />} />
            <Route path="/digital" element={<Fashion />} />
          </Routes>
          <FooterPage />
        </BrowserRouter>
      </section>
    </>
  )
}

export default Router
