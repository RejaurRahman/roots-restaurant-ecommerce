import React from "react"
import { Link } from "react-router-dom"

import "./Breadcrumbs.styles.scss"

const Breadcrumbs = ({ label }) => {
  return (
    <div class="breadcrumb-container container">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li
                class="breadcrumb-item active"
                aria-current="page"
              >
                {label}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs
