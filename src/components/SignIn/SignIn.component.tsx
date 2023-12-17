import {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useState
} from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import {
  emailSignInStart,
  googleSignInStart
} from "../../store/user/user.action"

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component"
import FormInput from "../FormInput/FormInput.component"

import "./SignIn.styles.scss"

const defaultFormFields = {
  email: "",
  password: ""
}

interface SignInProps {
  toggleComponent: () => void
}

const SignIn: FC<SignInProps> = ({ toggleComponent }) => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const homeRoute = useCallback(() => {
    navigate("/")
  }, [navigate])

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields()

      homeRoute()
    } catch (error) {
      console.log("User sign in failed", error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="col-12 col-md-8 col-lg-5 mx-auto sign-in-container">
      <h1>Login to Roots</h1>

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <div className="social-login">
          <Button
            buttonClassType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
          <div className="social-text">
            or login with your email:
          </div>
        </div>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Button
          buttonClassType={BUTTON_TYPE_CLASSES.secondary}
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <Button
        buttonClassType={BUTTON_TYPE_CLASSES.inverted}
        onClick={toggleComponent}
      >
        Register An Account
      </Button>
    </div>
  )
}

export default SignIn
