import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

import Button from "../Button/Button.component"

import "./DirectoryItem.styles.scss"

const DirectoryItem = ({ directory }) => {
  const { imageUrl, title } = directory

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
        >
          Shop Now
        </Button>
      </div>
    </div>
  )
}

export default DirectoryItem
