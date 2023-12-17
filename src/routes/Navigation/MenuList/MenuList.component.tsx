import { FC } from "react"
import {
  useDispatch,
  useSelector
} from "react-redux"

import { Link, useLocation } from "react-router-dom"

import { signOutStart } from "../../../store/user/user.action"

import data from "../../../data/page-content.json"

import useScreenWidth from "../../../hook/useScreenWidth"

import { selectCurrentUser } from "../../../store/user/user.selector"

import "./MenuList.styles.scss"

interface MenuListProps {
  showModal: boolean
}

const MenuList: FC<MenuListProps> = ({ showModal }) => {
  const dispatch = useDispatch()
  const isDesktop = useScreenWidth(992)
  const currentUser = useSelector(selectCurrentUser)
  const location = useLocation()

  const signOutUser = () => dispatch(signOutStart())

  const isActive = (to: string) => {
    if (to === "/") {
      return location.pathname === to
    }

    return location.pathname.includes(to)
  }

  return (
    <div
      className={`navbar-collapse offset-lg-1 ${!showModal ? "collapse" : ""}`.trim()}
    >
      <ul
        className={`navbar-nav mx-auto mb-lg-0 ${isDesktop ? "mb-2" : ""}`.trim()}
      >
        {data.header_links.map((link, index) => (
          <li
            className="nav-item"
            key={index}
          >
            <Link
              aria-current="page"
              className={`nav-link navbar-link mx-lg-3 ${isActive(link.href) ? "active" : ""}`.trim()}
              to={link.href}
            >
              {link.text}
            </Link>
          </li>
        ))}
        <li className="nav-item">
          {currentUser ? (
            <span
              className="nav-link navbar-link mx-lg-3 sign-out"
              onClick={signOutUser}
            >
              Sign Out
            </span>
          ) : (
            <Link
              className={`nav-link navbar-link mx-lg-3 ${location.pathname.includes("/auth") ? "active" : ""}`.trim()}
              to="/auth"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </div>
  )
}

export default MenuList
