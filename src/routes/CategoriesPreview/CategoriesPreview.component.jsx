import React, { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.component"

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  const foodOrder = [
    "soup",
    "salad",
    "pasta",
    "pizza",
    "curry",
    "desert",
    "drinks"
  ]

  if (!categoriesMap) {
    return null
  }

  return (
    <>
      {
        foodOrder.map((title, index) => {
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
