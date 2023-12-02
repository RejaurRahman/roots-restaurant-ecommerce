import React from "react"

import Button from "../Button/Button.component"

import "./CategoryItem.styles.scss"

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="category-body-container">
        <h2>
          {title}
        </h2>
        <Button
          buttonType="transparent"
        >
          Shop Now
        </Button>
      </div>
    </div>
  )
}

export default CategoryItem
