import { FC } from "react"

import { LazyLoadImage } from "react-lazy-load-image-component"

import data from "../../data/page-content.json"

import "./TextMedia.styles.scss"

const imagePaths: string[] = [
  require("../../assets/images/about/bottles.webp"),
  require("../../assets/images/about/flavours.webp"),
  require("../../assets/images/about/egg.webp")
]

interface TextMediaItem {
  content: string
  heading: string
  reverseLayout?: boolean
}

const TextMedia: FC = () => {
  return (
    <div className="text-media">
      <div className="container">
        {data.text_medias.map((text_media: TextMediaItem, index: number) => {
          const imagePath = imagePaths[index % imagePaths.length]

          return (
            <div
              className={`row ${text_media.reverseLayout ? "text-media-reverse" : ""}`.trim()}
              key={index}
            >
              <div className="col-12 col-lg-6 text-media-content">
                <h2>{text_media.heading}</h2>
                <p>{text_media.content}</p>
              </div>

              <div className="col-12 col-lg-6 text-media-image">
                <LazyLoadImage
                  alt={`${text_media.heading} image`}
                  height={296}
                  src={imagePath}
                  width={335}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TextMedia
