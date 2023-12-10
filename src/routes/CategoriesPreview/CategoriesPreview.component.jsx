import React, { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.component"

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {
        Object.keys(categoriesMap).map((title, index) => {
          const products = categoriesMap[title]

          return (
            <CategoryPreview
              key={index}
              products={products}
              title={title}
            />
          )
        })
      }
    </>
  )
}

export default CategoriesPreview
