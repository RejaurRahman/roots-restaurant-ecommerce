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
  AuthError,
  AuthErrorCodes
} from "firebase/auth"

import {
  googleSignInStart,
  signUpStart
} from "../../store/user/user.action"

import FormInput from "../FormInput/FormInput.component"
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component"

import "./SignUp.styles.scss"

const defaultFormFields = {
  confirmPassword: "",
  displayName: "",
  email: "",
  password: ""
}

interface SignUpProps {
  toggleComponent: () => void
}

const SignUp: FC<SignUpProps> = ({ toggleComponent }) => {
  const [formFields, setFormFields] = useState
  (defaultFormFields)
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields
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

    if (password !== confirmPassword) {
      alert("passwords do not match")
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))

      resetFormFields()

      homeRoute()
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use")
      } else {
        console.log("user creation encountered an error", error)
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="col-12 col-md-8 col-lg-5 mx-auto sign-up-container">
      <h1>Sign Up With Roots</h1>

      <form
        className="register-form"
        onSubmit={handleSubmit}
      >
        <div className="social-login">
          <Button
            buttonClassType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign Up
          </Button>
          <div className="social-text">
            or register with your email:
          </div>
        </div>

        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button
          buttonClassType={BUTTON_TYPE_CLASSES.secondary}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      <Button
        buttonClassType={BUTTON_TYPE_CLASSES.inverted}
        onClick={toggleComponent}
      >
        Have an account? Log In
      </Button>
    </div>
  )
}

export default SignUp
