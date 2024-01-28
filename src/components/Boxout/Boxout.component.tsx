import { FC } from "react"

import { faPhone, faLocationDot, faClockRotateLeft, faAt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import data from "../../data/page-content.json"

import "./Boxout.styles.scss"

const Boxout: FC = () => {
  return (
    <div className="container boxout-container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 boxout">
          <div className="boxout-column">
            <span className="boxout-icon">
              <FontAwesomeIcon
                icon={faPhone}
                size="2x"
              />
            </span>
            <span className="boxout-title">Phone</span>
            <span className="boxout-text">{data.business_details.phone}</span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 boxout">
          <div className="boxout-column">
            <span className="boxout-icon">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="2x"
              />
            </span>
            <span className="boxout-title">Location</span>
            <span className="boxout-text">
              {[
                data.business_details.address.street,
                data.business_details.address.city,
                data.business_details.address.state,
                data.business_details.address.county,
                data.business_details.address.postal_code
              ].map((value, index, array) => (
                <span key={index}>
                  <span>{value}</span>
                  {index !== array.length - 1 && <span>, </span>}
                </span>
              ))}
            </span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 boxout">
          <div className="boxout-column">
            <span className="boxout-icon">
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                size="2x"
              />
            </span>
            <span className="boxout-title">Open Hours</span>
            <span className="boxout-text">
              {data.business_details.open_days}: {data.business_details.open_hours}
            </span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 boxout">
          <div className="boxout-column">
            <span className="boxout-icon">
              <FontAwesomeIcon
                icon={faAt}
                size="2x"
              />
            </span>
            <span className="boxout-title">Email</span>
            <span className="boxout-text">
              {data.business_details.address.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boxout
