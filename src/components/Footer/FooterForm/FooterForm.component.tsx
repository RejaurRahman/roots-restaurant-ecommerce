import {
  ChangeEvent,
  FC,
  FormEvent,
  useState
} from "react"

import Button, { BUTTON_TYPE_CLASSES } from "../../Button/Button.component"
import FormInput from "../../FormInput/FormInput.component"

import "./FooterForm.styles.scss"

interface Message {
  content: string
  type: string
}

interface FormFields {
  email: string
}

const defaultFormFields: FormFields = {
  email: ""
}

const FooterForm: FC = () => {
  const [message, setMessage] = useState<Message | null>(null)
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields)
  const { email } = formFields

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const input = (event.target as HTMLFormElement).elements.namedItem("email") as HTMLInputElement
    const email = input.value.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailRegex.test(email)) {
      setMessage({ type: "success", content: "Thank you for subscribing!" })
      input.value = ""
    } else {
      setMessage({ type: "error", content: "Please enter a valid email address." })
    }
  }

  return (
    <>
      {message && (
        <div className={`footer-message ${message.type}`}>
          {message.content}
        </div>
      )}
      {message?.type !== "success" && (
        <form
          className="footer-form"
          onSubmit={handleFormSubmit}
        >
          <FormInput
            label="Enter Your Email"
            name="email"
            onChange={handleChange}
            required
            type="email"
            value={email}
          />
          <Button
            buttonClassType={BUTTON_TYPE_CLASSES.inline}
            type="submit"
          >
            Subscribe
          </Button>
        </form>
      )}
    </>
  )
}

export default FooterForm
