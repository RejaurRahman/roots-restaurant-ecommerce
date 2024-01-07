import { FC } from "react"

import { Link } from "react-router-dom"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./SocialList.styles.scss"

library.add(
  fab
)

const SocialList: FC = () => {
  return (
    <ul className="top-header-social-list">
      <li className="top-header-social-item">
        <Link
          aria-label="FaceBook"
          className="top-header-social-link"
          rel="noreferrer"
          target="_blank"
          to="https://en-gb.facebook.com/"
        >
          <FontAwesomeIcon
            icon={["fab", "facebook-f"]}
          />
        </Link>
      </li>
      <li className="top-header-social-item">
        <Link
          aria-label="Twitter"
          className="top-header-social-link"
          rel="noreferrer"
          target="_blank"
          to="https://twitter.com/"
        >
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
          />
        </Link>
      </li>
      <li className="top-header-social-item">
        <Link
          aria-label="Instagram"
          className="top-header-social-link"
          rel="noreferrer"
          target="_blank"
          to="https://www.instagram.com/"
        >
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
          />
        </Link>
      </li>
    </ul>
  )
}

export default SocialList
