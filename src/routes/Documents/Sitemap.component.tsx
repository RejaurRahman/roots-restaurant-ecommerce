import { FC } from "react"
import { Link } from "react-router-dom"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"

import "./Documents.styles.scss"

const Sitemap: FC = () => {
  return (
    <>
      <PageBanner label="Sitemap" />
      <Breadcrumbs label="Sitemap" />

      <div className="container documents-container">
        <div className="row">
          <div className="col-12">
            <ul>
              <li>
                <Link
                  aria-label="Home"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  aria-label="About"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Shop"
                  to="/shop"
                >
                  Shop
                </Link>
                <ul>
                  <li>
                    <Link
                      aria-label="Curry"
                      to="/shop/curry"
                    >
                      Curry
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Deserts"
                      to="/shop/deserts"
                    >
                      Deserts
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Drinks"
                      to="/shop/drinks"
                    >
                      Drinks
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Pasta"
                      to="/shop/pasta"
                    >
                      Pasta
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Pizza"
                      to="/shop/pizza"
                    >
                      Pizza
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Salad"
                      to="/shop/salad"
                    >
                      Salad
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Soup"
                      to="/shop/soup"
                    >
                      Soup
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  aria-label="Contact"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  aria-label="FAQ"
                  to="/faq"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Our Sitemap"
                  to="/sitemap"
                >
                  Our Sitemap
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Privacy Policy"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Sustainability"
                  to="/sustainability"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Terms and Conditions"
                  to="/terms-and-conditions"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sitemap
