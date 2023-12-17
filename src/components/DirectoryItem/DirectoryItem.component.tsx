import { FC } from "react"

import { LazyLoadImage } from "react-lazy-load-image-component"

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component"

import "./DirectoryItem.styles.scss"

interface DirectoryItemProps {
  category: {
    imageUrl: string
    title: string
  }
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title } = category

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
        <h2>{title}</h2>
        <Button
          buttonClassType={BUTTON_TYPE_CLASSES.transparent}
          buttonType="anchor"
          linkRoute={`/shop/${title}`.toLowerCase()}
        >
          Shop Now
        </Button>
      </div>
    </div>
  )
}

export default DirectoryItem
