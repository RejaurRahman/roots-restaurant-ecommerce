import { FC, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"
import Category from "../../components/Category/Category.component"
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.component"

import { fetchCategoriesStart } from "../../store/categories/category.action"

import "./Shop.styles.scss"

const Shop: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  })

  return (
    <>
      <PageBanner label="Shop" />
      <Breadcrumbs label="Shop" />
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  )
}

export default Shop
