import React, { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.component"

import "./Shop.styles.scss"

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      <PageBanner label="Shop" />
      <Breadcrumbs label="Shop" />
      <div className="shop-container container">
        {
          Object.keys(categoriesMap).map((key) => {
            const products = categoriesMap[key]

            return (
              <CategoryPreview
                key={key}
                products={products}
                title={key}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default Shop
