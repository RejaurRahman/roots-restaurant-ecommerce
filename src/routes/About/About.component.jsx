import React from "react"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"
import TextMedia from "../../components/TextMedia/TextMedia.component"

const About = () => {
  return (
    <>
      <PageBanner label="About" />
      <Breadcrumbs label="About Us" />
      <TextMedia />
    </>
  )
}

export default About
