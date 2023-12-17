import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  TextareaHTMLAttributes
} from "react"

import "./FormInput.style.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  rows: number
}

interface FormInputProps {
  emailForm?: boolean
  label: string
  name?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  textarea?: boolean
  type?: string
  value?: string
}

const FormInput: FC<FormInputProps> = ({
  emailForm,
  label,
  textarea,
  ...otherProps
}) => {
  if (textarea) {
    const textareaProps: TextareaProps = {
      ...otherProps as TextareaProps,
      label,
      rows: 3
    }

    return (
      <div className={`group ${emailForm ? "emailGroup" : ""}`.trim()}>
        <textarea
          aria-label={label}
          className="form-input"
          {...textareaProps}
        />
        {label && (
          <label
            className={`form-input-label ${
              (otherProps.value as string)?.length ? "shrink" : ""
            }`.trim()}
          >
            {label}
          </label>
        )}
      </div>
    )
  } else {
    const inputProps: InputProps = {
      ...otherProps as InputProps,
      label
    }

    return (
      <div className={`group ${emailForm ? "emailGroup" : ""}`.trim()}>
        <input aria-label={label} className="form-input" {...inputProps} />
        {label && (
          <label
            className={`form-input-label ${
              (otherProps.value as string)?.length ? "shrink" : ""
            }`.trim()}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
}

export default FormInput
