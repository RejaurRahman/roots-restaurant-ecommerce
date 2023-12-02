import React from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./CartIcon.styles.scss"

library.add(
  faBagShopping
)

const CartIcon = () => {
  return (
    <div className="col-6 col-lg-1 navbar--right">
      <div className="navbar-product--icon">
        <ul className="navbar-product--icon-list">
          <li className="navbar-product--icon-item">
            <FontAwesomeIcon
              icon={["fas", "fa-bag-shopping"]}
              size="2x"
            />
            <span className="navbar-product--icon-value">
              0
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CartIcon
