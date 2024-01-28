import { FC } from "react"
import { Link } from "react-router-dom"

import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { CategoryItem } from "../../store/categories/category.types"

import ProductCard from "../ProductCard/ProductCard.component"

import "./CategoryPreview.styles.scss"

interface CategoryPreviewProps {
  title: string
  products: CategoryItem[]
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  if (!products || !Array.isArray(products)) {
    return null
  }

  return (
    <div className="category-preview-container">
      <div className="category-title-container container">
        <h2 className="shop-category-title">
          {title}
        </h2>
        <Link
          aria-label="View Category"
          className="shop-category-button"
          to={title}
        >
          View Category
          <FontAwesomeIcon
            icon={faChevronRight}
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
