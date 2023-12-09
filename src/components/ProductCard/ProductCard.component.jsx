import React, { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import Button from "../Button/Button.component"

import "./ProductCard.styles.scss"

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product

  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  const formattedPrice = `£${price.toFixed(2)}`;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">
          {name}
        </span>
        <span className="price">
          {formattedPrice}
        </span>
      </div>
      <Button
        buttonType="inverted"
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </div>
  )
}

export default ProductCard
