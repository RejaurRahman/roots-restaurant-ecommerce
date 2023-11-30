import React from "react"

import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response)
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
