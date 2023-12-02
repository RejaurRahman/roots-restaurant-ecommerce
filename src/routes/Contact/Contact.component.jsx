import React from "react"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import ContactForm from "../../components/ContactForm/ContactForm.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"

const Contact = () => {
  return (
    <>
      <PageBanner label="Contact" />
      <Breadcrumbs label="Contact" />
      <ContactForm />
    </>
  )
}

export default Contact
