import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils"

import FormInput from "../FormInput/FormInput.component"
import Button from "../Button/Button.component"

import "./SignUp.styles.scss"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUp = ({ toggleComponent }) => {
  const [formFields, setFormFields] = useState
  (defaultFormFields)
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields
  const navigate = useNavigate()

  const homeRoute = () => {
    navigate("/")
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()

    homeRoute()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords do not match")
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      )

      await createUserDocumentFromAuth(user, {displayName})

      resetFormFields()

      homeRoute()
    } catch(error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use")
      } else {
        console.log("user creation encountered an error", error)
      }
    }
  }

  const handleChange = (event) => {
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
            buttonClassType="google"
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
          buttonClassType="secondary"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      <Button
        buttonClassType="inverted"
        onClick={toggleComponent}
      >
        Have an account? Log In
      </Button>
    </div>
  )
}

export default SignUp
