import { FC } from "react"

import { Link } from "react-router-dom"

import "./SocialList.styles.scss"

const SocialList: FC = () => {
  return (
    <ul className="top-header-social-list">
      <li className="top-header-social-item">
        <Link
          className="top-header-social-link"
          rel="noreferrer"
          target="_blank"
          to="https://en-gb.facebook.com/"
        >
          FB
        </Link>
      </li>
      <li className="top-header-social-item">
        <Link
          className="top-header-social-link"
          rel="noreferrer"
          target="_blank"
          to="https://twitter.com/"
        >
          TW
        </Link>
      </li>
      <li className="top-header-social-item">
        <Link
          className="top-header-social-link"
          rel="noreferrer"
          target="_blank"
          to="https://www.instagram.com/"
        >
          IN
        </Link>
      </li>
    </ul>
  )
}

export default SocialList
