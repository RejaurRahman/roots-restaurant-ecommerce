import { FC } from "react"

import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core"
import { faBoxArchive, faRibbon, faTruck, faUserClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import data from "../../data/page-content.json"

import "./ServicesList.styles.scss"

library.add(
  faBoxArchive,
  faRibbon,
  faTruck,
  faUserClock
)

const iconMap: Record<string, IconDefinition> = {
  "box-archive": faBoxArchive,
  "ribbon": faRibbon,
  "truck": faTruck,
  "user-clock": faUserClock
}

const ServicesList: FC = () => {
  return (
    <div className="home-services">
      <div className="container">
        <div className="row">
          {data.services_list.map((list, index) => (
            <div
              className="home-services-item col-6 col-lg-3"
              key={index}
            >
              <div
                className="home-services-circle"
                style={{backgroundColor: list.colour}}
              >
                <FontAwesomeIcon
                  icon={iconMap[list.iconName]}
                  size="2x"
                />
              </div>
              <h5 className="home-services-heading">
                {list.heading}
              </h5>
              <p className="home-services-copy">
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
