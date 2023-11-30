import SignIn from "../../components/SignIn/SignIn.component"
import SignUp from "../../components/SignUp/SignUp.component"

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"

const Authentication = () => {
  return (
    <>
      <h1>sign in page</h1>

      <SignIn />
      <SignUp />
    </>
  )
}

export default Authentication
