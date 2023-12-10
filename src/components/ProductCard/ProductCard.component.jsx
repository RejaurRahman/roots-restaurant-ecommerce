import React, { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import Button from "../Button/Button.component"

import "./ProductCard.styles.scss"

const ProductCard = ({ product }) => {
  const {
    calories,
    diet,
    imageUrl,
    name,
    notes,
    price
  } = product

  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  const formattedPrice = `£${price.toFixed(2)}`

  return (
    <div className="product-card-container col-12 col-md-6 col-lg-6 col-xl-4">
      <img
        alt={name}
        className="product-item-image"
        src={imageUrl}
      />
      <div className="product-item-content">
        <div className="product-item-top">
          <div className="product-item-left">
            <h3 className="product-item-heading">
              {name}
            </h3>
            <span className="product-item-note">
              {notes}
            </span>
          </div>
          <button
            className="product-item-button"
          >
            i
          </button>
        </div>
        {diet && diet.length > 0 && (
          <ul className="vegan-veg">
            {diet.map((dietType, index) => (
              <li
                className="vegan-veg-text"
                key={index}
              >
                {dietType}
              </li>
            ))}
          </ul>
        )}
        <span className="product-item-price">
          {formattedPrice}
          <span className="product-item-calories">
            ({calories} kcal)
          </span>
        </span>
        <Button
          buttonClassType="inverted"
          onClick={addProductToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
