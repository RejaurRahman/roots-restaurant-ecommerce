import React, {
  useEffect,
  useState
} from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from "../../store/categories/category.selector"

import ProductCard from "../../components/ProductCard/ProductCard.component"
import Spinner from "../../components/Spinner/Spinner.component"

import "./Category.styles.scss"

const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <h2 className="category-title">
        {category.toUpperCase()}
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row">
            {
              products && (
                products.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                  />
                ))
              )
            }
          </div>
        </div>
      )}
    </>
  )
}

export default Category
