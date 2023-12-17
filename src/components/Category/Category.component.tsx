import {
  FC,
  useEffect,
  useState
} from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from "../../store/categories/category.selector"

import ProductCard from "../ProductCard/ProductCard.component"
import Spinner from "../Spinner/Spinner.component"

import "./Category.styles.scss"

interface CategoryParams {
  category: string
}

const Category: FC = () => {
  const { category } = useParams<
    keyof CategoryParams
  >() as CategoryParams
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
