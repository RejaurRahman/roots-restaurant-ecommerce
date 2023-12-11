import React from "react"
import { useSelector } from "react-redux"

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector"

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.component"
import Spinner from "../../components/Spinner/Spinner.component"

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoading)

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
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  )
}

export default CategoriesPreview
