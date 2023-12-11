import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import {
  emailSignInStart,
  googleSignInStart
} from "../../store/user/user.action"

import Button from "../Button/Button.component"
import FormInput from "../FormInput/FormInput.component"

import "./SignIn.styles.scss"

const defaultFormFields = {
  email: "",
  password: ""
}

const SignIn = ({ toggleComponent }) => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const homeRoute = () => {
    navigate("/")
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())

    homeRoute()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields()

      homeRoute()
    } catch (error) {
      console.log("User sign in failed", error)
    }
  }

  const handleChange = (event) => {
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
            buttonClassType="google"
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
          buttonClassType="secondary"
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <Button
        buttonClassType="inverted"
        onClick={toggleComponent}
      >
        Register An Account
      </Button>
    </div>
  )
}

export default SignIn
