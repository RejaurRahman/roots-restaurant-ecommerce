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
        src={BannerBg}
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
