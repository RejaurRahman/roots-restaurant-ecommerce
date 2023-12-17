import { ButtonHTMLAttributes, FC } from "react"
import { Link, LinkProps } from "react-router-dom"

import Spinner from "../Spinner/Spinner.component"

import "./Button.styles.scss"

export enum BUTTON_TYPE_CLASSES {
  google = "google-sign-in",
  inverted = "inverted",
  inline = "inline",
  primary = "primary",
  secondary = "secondary",
  transparent = "transparent"
}

export type ButtonProps = {
  buttonClassType?: BUTTON_TYPE_CLASSES
  buttonType?: "button" | "anchor"
  isLoading?: boolean
  linkRoute?: string
} & (ButtonHTMLAttributes<HTMLButtonElement> | LinkProps)

const Button: FC<ButtonProps> = ({
  buttonClassType = BUTTON_TYPE_CLASSES.primary,
  buttonType = "button",
  children,
  isLoading,
  linkRoute,
  ...otherProps
}) => {
  if (buttonType === "anchor" && linkRoute) {
    const { to, ...anchorProps } = otherProps as LinkProps

    return (
      <Link
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonClassType as keyof typeof BUTTON_TYPE_CLASSES]}`}
        to={linkRoute}
        {...anchorProps}
      >
        {isLoading ? <Spinner /> : children}
      </Link>
    )
  } else {
    const buttonProps = otherProps as ButtonHTMLAttributes<HTMLButtonElement>

    return (
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonClassType as keyof typeof BUTTON_TYPE_CLASSES]}`}
        {...buttonProps}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    )
  }
}

export default Button
