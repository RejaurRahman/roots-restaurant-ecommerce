import React, { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LazyLoadImage } from "react-lazy-load-image-component"

import { addItemToCart } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"
import { CategoryItem } from "../../store/categories/category.types"

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component"
import ProductModal from "./ProductModal/ProductModal.component"

import "./ProductCard.styles.scss"

interface ProductCardProps {
  product: CategoryItem
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [showModal, setShowModal] = useState(false)
  const {
    calories,
    diet,
    imageUrl,
    ingredients,
    name,
    notes,
    price
  } = product

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  const formattedPrice = `£${price.toFixed(2)}`

  const toggleModal = () => {
    setShowModal(!showModal)

    if (!showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeModal = () => {
    setShowModal(false)

    document.body.style.overflow = "auto"
  }

  return (
    <div className="product-card-container col-12 col-md-6 col-lg-6 col-xl-4">
      <LazyLoadImage
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
            aria-label="Toggle product ingredients"
            className="product-item-button"
            onClick={toggleModal}
            type="button"
          >
            i
          </button>
          {showModal && (
            <ProductModal
              closeModal={closeModal}
              ingredients={ingredients}
              showModal={showModal}
            />
          )}
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
          buttonClassType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
