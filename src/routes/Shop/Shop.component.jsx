import React, { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"
import ProductCard from "../../components/ProductCard/ProductCard.component"

import "./Shop.styles.scss"

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      <PageBanner label="Shop" />
      <Breadcrumbs label="Shop" />
      <div className="products-container container">
        {
          Object.keys(categoriesMap).map((title) => (
            <div key={title}>
              <h2>{title}</h2>
              <div className="products-container">
                {
                  categoriesMap[title].map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Shop
