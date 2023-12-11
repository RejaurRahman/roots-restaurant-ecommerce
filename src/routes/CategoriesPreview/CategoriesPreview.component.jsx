import React from "react"
import { useSelector } from "react-redux"

import { selectCategoriesMap } from "../../store/categories/category.selector"

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.component"

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)

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
