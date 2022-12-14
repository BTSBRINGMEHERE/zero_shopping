import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../pages/Header"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/fashion" />
          <Route path="/accessory" />
          <Route path="/digital" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
