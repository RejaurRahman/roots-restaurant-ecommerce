import React, { useContext } from "react"

import { CartContext } from "../../../contexts/cart.context"

import "../Checkout.styles.scss"

const CheckoutProduct = ({ cartItem }) => {
  const {
    imageUrl,
    name,
    price,
    quantity
  } = cartItem

  const {
    clearItemFromCart,
    addItemToCart,
    removeItemToCart
  } = useContext(CartContext)

  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemToCart(cartItem)

  const formattedPrice = `£${price.toFixed(2)}`

  return (
    <div className="cart-table-item">
      <div className="cart-table-half cart-table-image-wrapper">
        <div className="cart-table-third">
          <img src={imageUrl} alt={name} className="cart-table-image" />
        </div>
        <div className="cart-table-seventh">
          <h4 className="cart-table-product">{name}</h4>
        </div>
      </div>
      <div className="cart-table-sixth cart-table-price">{formattedPrice}</div>
      <div className="cart-table-sixth">
        <div className="cart-table-qty">
          <div
            className="cart-table-qty-btn"
            onClick={addItemHandler}
          >
            &#43;
          </div>
          <div className="cart-table-qty-value">{quantity}</div>
          <div
            className="cart-table-qty-btn"
            onClick={removeItemHandler}
          >
            &#45;
          </div>
        </div>
      </div>
      <div
        className="cart-table-sixth cart-table-delete"
        onClick={clearItemHandler}
      >
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutProduct
