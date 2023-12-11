import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { LazyLoadImage } from "react-lazy-load-image-component"

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart
} from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"

import "../Checkout.styles.scss"

const CheckoutProduct = ({ cartItem }) => {
  const {
    imageUrl,
    name,
    price,
    quantity
  } = cartItem

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))

  const formattedPrice = `£${price.toFixed(2)}`

  return (
    <div className="cart-table-item">
      <div className="cart-table-half cart-table-image-wrapper">
        <div className="cart-table-third">
          <LazyLoadImage
            alt={name}
            className="cart-table-image"
            src={imageUrl}
          />
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
