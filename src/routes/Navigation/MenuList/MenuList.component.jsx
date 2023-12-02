import React, { useContext } from "react"

import { Link, useLocation } from "react-router-dom"

import { signOutUser } from "../../../utils/firebase/firebase.utils"

import data from "../../../data/page-content.json"

import { UserContext } from "../../../contexts/user.context"

import "./MenuList.styles.scss"

const MenuList = () => {
  const { currentUser } = useContext(UserContext)
  const location = useLocation()

  const isActive = (to) => {
    return to === location.pathname
  }

  return (
    <div
      className="collapse navbar-collapse offset-lg-1"
      id="headerNav"
    >
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        {data.header_links.map((link) => (
          <li
            className="nav-item"
            key={link.text}
          >
            <Link
              aria-current="page"
              className={`nav-link navbar--link active mx-lg-3 ${isActive(link.href) ? "active" : ""}`.trim()}
              to={link.href}
            >
              {link.text}
            </Link>
          </li>
        ))}
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
  )
}

export default MenuList
