import React from "react"

import "./FormInput.style.scss"

const FormInput = ({
  label,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
        {...otherProps}
      />
      {
        label && (
          <label
            className={`form-input-label ${otherProps.value.length ? "shrink" : ""}`.trim()}
          >
            {label}
          </label>
        )
      }
    </div>
  )
}

export default FormInput
