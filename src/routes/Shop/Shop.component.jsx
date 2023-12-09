import React from "react"
import { Routes, Route } from "react-router-dom"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"
import Category from "../../components/Category/Category.component"
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.component"

import "./Shop.styles.scss"

const Shop = () => {
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
