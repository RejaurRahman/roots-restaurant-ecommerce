import React from "react"
import { useDispatch, useSelector } from "react-redux"

import {
  selectCartCount,
  selectIsCartOpen
} from "../../../store/cart/cart.reducer"
import { setIsCartOpen } from "../../../store/cart/cart.action"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./CartIcon.styles.scss"

library.add(
  faBagShopping
)

const CartIcon = ({ cartDisplay }) => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <div className="col-6 col-lg-1 navbar-right">
      <button
        className="navbar-product-icon"
        onClick={toggleIsCartOpen}
      >
        <FontAwesomeIcon
          icon={["fas", "fa-bag-shopping"]}
          size="2x"
        />
        <span className="navbar-product-icon-value">
          {cartCount}
        </span>
      </button>
      {cartDisplay && (
        <div
          className="navbar-cart-overlay"
          onClick={toggleIsCartOpen}
        />
      )}
    </div>
  )
}

export default CartIcon
