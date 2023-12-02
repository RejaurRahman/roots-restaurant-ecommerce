import React from "react"

import BannerBg from "../../assets/images/shared/banner.jpg"

import "./PageBanner.styles.scss"

const PageBanner = ({ label }) => {
  return (
    <div class="banner page-banner">
      <img
        src={BannerBg}
        alt="Vegetable Banner"
        className="banner-image"
      />
      <div class="banner-overlay" />
      <div class="container">
        <h1 class="banner-heading">
          {label}
        </h1>
      </div>
    </div>
  )
}

export default PageBanner
