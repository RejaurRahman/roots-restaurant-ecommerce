import React, { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

import Button from "../Button/Button.component"

import "./DirectoryItem.styles.scss"

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate()
  const { imageUrl, title } = category

  const onNavigateHandler = useCallback(() => {
    navigate(`/shop/${title}`.toLowerCase())
  }, [navigate, title])

  return (
    <div className="directory-container">
      <LazyLoadImage
        alt={title}
        className="background-image"
        height={296}
        src={imageUrl}
        width={351}
      />
      <div className="directory-body-container">
        <h2>
          {title}
        </h2>
        <Button
          buttonType="transparent"
          onClick={onNavigateHandler}
        >
          Shop Now
        </Button>
      </div>
    </div>
  )
}

export default DirectoryItem
