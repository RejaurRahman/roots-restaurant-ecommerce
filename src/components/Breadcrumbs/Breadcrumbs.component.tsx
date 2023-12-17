import { FC } from "react"

import { Link } from "react-router-dom"

import "./Breadcrumbs.styles.scss"

interface BreadcrumbsProps {
  label: string
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  label
}) => {
  return (
    <div className="breadcrumb-container container">
      <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li
                aria-current="page"
                className="breadcrumb-item active"
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
