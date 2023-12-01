import React from "react"

import { Route, Routes } from "react-router-dom"

import Authentication from "./routes/Authentication/Authentication.component"
import Footer from "./components/Footer/Footer.component"
import Home from "./routes/Home/Home.component"
import Navigation from "./routes/Navigation/Navigation.component"
import Shop from "./routes/Shop/Shop.component"

import "./styles/styles.scss"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}  />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
