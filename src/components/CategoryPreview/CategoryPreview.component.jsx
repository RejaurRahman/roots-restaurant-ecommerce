import React from "react"
import { Link } from "react-router-dom"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ProductCard from "../ProductCard/ProductCard.component"

import "./CategoryPreview.styles.scss"

library.add(
  faChevronRight
)

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <div className="category-title-container container">
        <h2 className="shop-category-title">
          {title}
        </h2>
        <Link
          className="shop-category-button"
          to={title}
        >
          View Category
          <FontAwesomeIcon
            icon={["fas", "fa-chevron-right"]}
          />
        </Link>
      </div>

      <div className="container">
        <div className="row">
          {
            products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryPreview
