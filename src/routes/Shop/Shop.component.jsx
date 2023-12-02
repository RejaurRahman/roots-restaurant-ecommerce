import React, { useContext } from "react"

import { ProductsContext } from "../../contexts/products.context"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import ProductCard from "../../components/ProductCard/ProductCard.component"

import "./Shop.styles.scss"

const Shop = () => {
  const { products } = useContext(ProductsContext)

  return (
    <div className="products-container container">
      <Breadcrumbs label="Shop" />
      {
        products.map(({ product }) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  )
}

export default Shop
