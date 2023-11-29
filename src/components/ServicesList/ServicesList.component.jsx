import React from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faBoxArchive, faRibbon, faTruck, faUserClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import data from "../../data/page-content.json"

import "./ServicesList.styles.scss"

library.add(
  faBoxArchive,
  faRibbon,
  faTruck,
  faUserClock,
)

const ServicesList = () => {
  return (
    <div class="home--services">
      <div class="container">
        <div class="row">
          {data.services_list.map((list, index) => (
            <div class="col-6 col-lg-3" key={index}>
              <div class="home--services-circle" style={{backgroundColor: list.colour}}>
                <FontAwesomeIcon icon={["fas", `${list.iconName}`]} size="2x" />
              </div>
              <h5 class="home--services-heading">
                {list.heading}
              </h5>
              <p class="home--services-copy">
                {list.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesList
