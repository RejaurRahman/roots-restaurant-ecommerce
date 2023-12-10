import React, { useContext } from "react"

import { CartContext } from "../../../contexts/cart.context"

import Button from "../../../components/Button/Button.component"
import CartProducts from "../CartProducts/CartProducts.component"

import "./CartDropdown.styles.scss"

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className={`cart-items ${cartItems.length === 0 ? "cart-dropdown-empty" : ""}`.trim()}>
        {
          cartItems.length ? (
            cartItems.map((item, index) => (
              <CartProducts
                cartItem={item}
                key={index}
              />
            ))
          ) : (
            <span>
              Your cart is empty
            </span>
          )
        }
      </div>
      <Button
        buttonClassType="primary"
        buttonType="anchor"
        linkRoute="/checkout"
      >
        Checkout
      </Button>
    </div>
  )
}

export default CartDropdown
