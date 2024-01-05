import { FC } from "react"

import BannerBg from "../../assets/images/shared/banner.jpg"

import "./PageBanner.styles.scss"

interface PageBannerProps {
  label: string
}

const PageBanner: FC<PageBannerProps> = ({
  label
}) => {
  return (
    <div className="banner page-banner">
      <img
        alt="Vegetable Banner"
        className="banner-image"
        height={148}
        src={BannerBg}
        width={320}
      />
      <div className="banner-overlay" />
      <div className="container">
        <h1 className="banner-heading">
          {label}
        </h1>
      </div>
    </div>
  )
}

export default PageBanner
