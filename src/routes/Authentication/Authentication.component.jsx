import SignIn from "../../components/SignIn/SignIn.component"
import SignUp from "../../components/SignUp/SignUp.component"

import "./Authentication.style.scss"

const Authentication = () => {
  return (
    <div className="authentication-container container">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
