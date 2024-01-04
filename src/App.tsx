import {
  FC,
  lazy,
  Suspense,
  useEffect,
  useState
} from "react"
import { useDispatch } from "react-redux"
import {
  Routes,
  Route
} from "react-router-dom"

import { checkUserSession } from "./store/user/user.action"

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.component"
import Spinner from "./components/Spinner/Spinner.component"

import "./styles/styles.scss"

const About = lazy(() =>
  import("./routes/About/About.component")
)
const Authentication = lazy(() =>
  import("./routes/Authentication/Authentication.component")
)
const Checkout = lazy(() =>
  import("./routes/Checkout/Checkout.component")
)
const Contact = lazy(() =>
  import("./routes/Contact/Contact.component")
)
const FAQ = lazy(() =>
  import("./routes/Documents/Faq.component")
)
const Footer = lazy(() =>
  import("./components/Footer/Footer.component")
)
const Home = lazy(() =>
  import("./routes/Home/Home.component")
)
const Navigation = lazy(() =>
  import("./routes/Navigation/Navigation.component")
)
const PrivacyPolicy = lazy(() =>
  import("./routes/Documents/PrivacyPolicy.component")
)
const Shop = lazy(() =>
  import("./routes/Shop/Shop.component")
)
const Sitemap = lazy(() =>
  import("./routes/Documents/Sitemap.component")
)
const Sustainability = lazy(() =>
  import("./routes/Documents/Sustainability.component")
)
const TermsConditions = lazy(() =>
  import("./routes/Documents/TermsConditions.component")
)

const App: FC = () => {
  const [pageLoading, setPageLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  })

  useEffect(() => {
    dispatch(checkUserSession())

    setTimeout(() => {
      setPageLoading(true)
    }, 2000)
  })

  return (
    <Suspense
      fallback={<Spinner />}
    >
      {
        pageLoading ? (
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
        ) : (
          <Spinner />
        )
      }
    </Suspense>
  )
}

export default App
