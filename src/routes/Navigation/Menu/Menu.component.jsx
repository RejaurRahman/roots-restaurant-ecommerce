import React from "react"

import { Link } from "react-router-dom"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import CartIcon from "../CartIcon/CartIcon.component"
import MenuList from "../MenuList/MenuList.component"

import Logo from "../../../assets/images/logo.png"

import "./Menu.styles.scss"

library.add(
  faBars
)

const Menu = () => {
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
            <MenuList />
          </div>
          <CartIcon />
        </div>
      </div>
    </nav>
  )
}

export default Menu
