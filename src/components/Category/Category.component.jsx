import React, {
  useContext,
  useState,
  useEffect
} from "react"
import { useParams } from "react-router-dom"

import { CategoriesContext } from "../../contexts/categories.context"

import ProductCard from "../../components/ProductCard/ProductCard.component"

import "./Category.styles.scss"

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <h2 className="category-title">
        {category.toUpperCase()}
      </h2>
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
    </>
  )
}

export default Category
