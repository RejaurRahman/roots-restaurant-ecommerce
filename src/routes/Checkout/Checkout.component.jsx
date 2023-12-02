import React, { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import "./Checkout.styles.scss"

const Checkout = () => {
  const {
    addItemToCart,
    cartItems,
    removeItemFromCart
  } = useContext(CartContext)

  return (
    <>
      <h1>Checkout page</h1>
      <>
        {
          cartItems.map((cartItem) => {
            const { id, name, quantity } = cartItem

            return (
              <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
                <span onClick={() => addItemToCart(cartItem)}>increment</span>
              </div>
            )
          })
        }
      </>
    </>
  )
}

export default Checkout
