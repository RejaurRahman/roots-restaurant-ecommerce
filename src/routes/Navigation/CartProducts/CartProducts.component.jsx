import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

import "./CartProducts.styles.scss"

const CartProducts = ({ CartItem }) => {
  const { imageUrl, name, price, quantity } = CartItem

  const formattedPrice = `£${price.toFixed(2)}`

  return (
    <div className="cart-item-container">
      <LazyLoadImage
        src={imageUrl}
        alt={`${name}`}
      />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {formattedPrice}
        </span>
      </div>
    </div>
  )
}

export default CartProducts
