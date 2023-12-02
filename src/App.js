import React from "react"

import { Route, Routes } from "react-router-dom"

import About from "./routes/About/About.component"
import Authentication from "./routes/Authentication/Authentication.component"
import Checkout from "./routes/Checkout/Checkout.component"
import Contact from "./routes/Contact/Contact.component"
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route index element={<Home />}  />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
