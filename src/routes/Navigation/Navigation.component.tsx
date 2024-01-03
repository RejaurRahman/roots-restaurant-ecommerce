import { FC } from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectCurrentUser } from "../../store/user/user.selector"

import Menu from "./Menu/Menu.component"
import SocialList from "./SocialList/SocialList.component"

import "./Navigation.styles.scss"

const Navigation: FC = () => {
  const currentUser = useSelector(selectCurrentUser)

  return (
    <>
      <div className="top-header">
        <div className="container top-header-container">
          <div className="row">
            <div className="col-12 col-md-6 top-header-shipping">
              <span>
                {currentUser ? (
                  `Hello, ${currentUser.displayName.split(" ")[0]} ...`
                ) : null}{" "}
                Welcome to Roots
              </span>
            </div>
            <div className="col-12 col-md-6 top-header-right-column">
              <SocialList />
            </div>
          </div>
        </div>
      </div>
      <Menu />
      <Outlet />
    </>
  )
}

export default Navigation
