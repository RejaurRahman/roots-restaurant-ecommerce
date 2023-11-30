import React from "react"

import CategoryItem from "../CategoryItem/CategoryItem.component"

import "./Directory.styles.scss"

const Directory = ({ categories }) => {
  return (
    <div className="directory-container container">
      {
        categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
          />
        ))
      }
    </div>
  )
}

export default Directory
