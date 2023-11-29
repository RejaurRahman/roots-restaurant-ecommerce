import React from "react"

import { Outlet, Link } from "react-router-dom"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Logo from "../../assets/images/logo.png"

import "./Navigation.styles.scss"

library.add(
  fab,
  faBars
)

const Navigation = () => {
  return (
    <>
      <div className="top-header">
        <div className="container top-header--container">
          <div className="row">
            <div className="col-12 col-md-6">
              <span className="top-header--shipping">Free Shipping on all orders</span>
            </div>
            <div className="col-12 col-md-6 top-header--right-column">
              <ul className="top-header--social-list">
                <li className="top-header--social-item">
                  <Link to="https://en-gb.facebook.com/" rel="noreferrer" target="_blank" className="top-header--social-link">
                    <FontAwesomeIcon icon={["fab", "fa-facebook-f"]} />
                  </Link>
                </li>
                <li className="top-header--social-item">
                  <Link to="https://twitter.com/" rel="noreferrer" target="_blank" className="top-header--social-link">
                    <FontAwesomeIcon icon={["fab", "fa-twitter"]} />
                  </Link>
                </li>
                <li className="top-header--social-item">
                  <Link to="https://www.instagram.com/" rel="noreferrer" target="_blank" className="top-header--social-link">
                    <FontAwesomeIcon icon={["fab", "fa-instagram"]} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav id="top-navbar" className="navbar navbar-expand-lg sticky-top">
        <div className="container navbar--container">
          <div className="row navbar--row">
            <div className="col-12 col-lg-7 navbar--left">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Roots Restaurant" className="navbar-logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerNav" aria-controls="headerNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                  <FontAwesomeIcon icon={["fas", "fa-bars"]} size="2x" />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="headerNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/shop">Shop</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation
