import {
  FC,
  useEffect
} from "react"
import { useDispatch } from "react-redux"
import {
  Routes,
  Route
} from "react-router-dom"

import { checkUserSession } from "./store/user/user.action"

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.component"

import "./styles/styles.scss"

import About from "./routes/About/About.component"
import Authentication from "./routes/Authentication/Authentication.component"
import Checkout from "./routes/Checkout/Checkout.component"
import Contact from "./routes/Contact/Contact.component"
import FAQ from "./routes/Documents/Faq.component"
import Footer from "./components/Footer/Footer.component"
import Home from "./routes/Home/Home.component"
import Navigation from "./routes/Navigation/Navigation.component"
import PrivacyPolicy from "./routes/Documents/PrivacyPolicy.component"
import Shop from "./routes/Shop/Shop.component"
import Sitemap from "./routes/Documents/Sitemap.component"
import Sustainability from "./routes/Documents/Sustainability.component"
import TermsConditions from "./routes/Documents/TermsConditions.component"

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  })

  return (
    <>
      {
        <>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route path="about" element={<About />} />
              <Route path="auth" element={<Authentication />} />
              <Route element={<PrivateRoute/>}>
                <Route path="checkout" element={<Checkout/>}/>
              </Route>
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />
              <Route index element={<Home />}  />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="shop/*" element={<Shop />} />
              <Route path="sitemap" element={<Sitemap />} />
              <Route path="sustainability" element={<Sustainability />} />
              <Route path="terms-and-conditions" element={<TermsConditions />} />
            </Route>
          </Routes>
          <Footer />
        </>
      }
    </>
  )
}

export default App
