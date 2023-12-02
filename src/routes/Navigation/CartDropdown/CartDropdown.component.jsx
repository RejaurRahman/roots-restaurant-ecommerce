import React, { useContext } from "react"

import { CartContext } from "../../../contexts/cart.context"

import Button from "../../../components/Button/Button.component"
import CartProducts from "../CartProducts/CartProducts.component"

import "./CartDropdown.styles.scss"

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.map(item => (
            <CartProducts
              key={item.id}
              CartItem={item}
            />
          )
        )}
      </div>
      <Button>
        CHECKOUT
      </Button>
    </div>
  )
}

export default CartDropdown
