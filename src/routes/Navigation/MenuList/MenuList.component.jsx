import React, { useContext } from "react"

import { Link } from "react-router-dom"

import { signOutUser } from "../../../utils/firebase/firebase.utils"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { UserContext } from "../../../contexts/user.context"

import CartIcon from "../CartIcon/CartIcon.component"

import Logo from "../../../assets/images/logo.png"

import "./MenuList.styles.scss"

library.add(
  faBars
)

const MenuList = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      id="topNavbar"
    >
      <div className="container navbar--container">
        <div className="row navbar--row">
          <div className="col-6 col-lg-11 navbar--left">
            <Link
              className="navbar-brand"
              to="/"
            >
              <img
                alt="Roots Restaurant"
                className="navbar-logo"
                src={Logo}
              />
            </Link>
            <button
              aria-controls="headerNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-bs-target="#headerNav"
              data-bs-toggle="collapse"
              type="button"
            >
              <span className="navbar-toggler-icon">
                <FontAwesomeIcon
                  icon={["fas", "fa-bars"]}
                  size="2x"
                />
              </span>
            </button>
            <div
              className="collapse navbar-collapse offset-lg-1"
              id="headerNav"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    aria-current="page"
                    className="nav-link navbar--link active mx-lg-3"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link navbar--link mx-lg-3"
                    to="/"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link navbar--link mx-lg-2"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link navbar--link mx-lg-3"
                    to="/"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  {currentUser ? (
                    <span
                      className="nav-link navbar--link"
                      onClick={signOutUser}
                    >
                      Sign Out
                    </span>
                  ) : (
                    <Link
                      className="nav-link navbar--link"
                      to="/auth"
                    >
                      Sign In
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <CartIcon />
        </div>
      </div>
    </nav>
  )
}

export default MenuList
