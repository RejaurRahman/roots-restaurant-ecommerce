import { FC } from "react"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./SocialList.styles.scss"

import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

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
            icon={faFacebookF}
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
            icon={faTwitter}
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
            icon={faInstagram}
          />
        </Link>
      </li>
    </ul>
  )
}

export default SocialList
