import React from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./CartIcon.styles.scss"

library.add(
  fab,
  faBagShopping
)

const CartIcon = () => {
  return (
    <div className="col-6 col-lg-1 navbar--right">
      <div className="navbar-product--icons">
        <ul className="navbar-product--icons-list">
          <li className="navbar-product--icons-item">
            <FontAwesomeIcon
              icon={["fas", "fa-bag-shopping"]}
              size="2x"
            />
            <span className="navbar-product--icons-value">
              0
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CartIcon
