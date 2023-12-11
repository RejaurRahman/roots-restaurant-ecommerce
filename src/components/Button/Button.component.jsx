import React from "react"
import { Link } from "react-router-dom"

import Spinner from "../Spinner/Spinner.component"

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
  isLoading = false,
  linkRoute,
  ...otherProps
}) => {
  return buttonType === "anchor" ? (
    <Link
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonClassType]}`}
      disabled={isLoading}
      to={linkRoute}
      {...otherProps}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        children
      )}
    </Link>
  ) : (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonClassType]}`}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        children
      )}
    </button>
  )
}

export default Button
