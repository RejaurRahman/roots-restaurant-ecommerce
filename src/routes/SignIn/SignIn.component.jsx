import React from "react"

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils"

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      sign in page

      <button onClick={logGoogleUser}>
        sign in with Google
      </button>
    </div>
  )
}

export default SignIn
