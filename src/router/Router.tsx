import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accessory from "../components/accessory/Accessory"
import Digital from "../components/digital/Digital"
import Fashion from "../components/fashion/Fashion"
import Product from "../components/product/Product"
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
            <Route path="/accessory" element={<Accessory />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <FooterPage />
        </BrowserRouter>
      </section>
    </>
  )
}

export default Router
