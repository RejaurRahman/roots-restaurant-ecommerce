import React from "react"

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils"

import SignUp from "../SignUp/SignUp.component"

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <>
      sign in page

      <button onClick={logGoogleUser}>
        sign in with Google
      </button>
      <SignUp />
    </>
  )
}

export default SignIn
