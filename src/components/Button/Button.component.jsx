import React from "react"
import { Link } from "react-router-dom"

import "./Button.styles.scss"

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  inline: "inline",
  primary: "primary",
  secondary: "secondary",
  transparent: "transparent"
}

const Button = ({
  buttonClassType,
  buttonType,
  children,
  linkRoute,
  ...otherProps
}) => {
  return buttonType === "anchor" ? (
    <Link
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonClassType]}`}
      to={linkRoute}
      {...otherProps}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonClassType]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
