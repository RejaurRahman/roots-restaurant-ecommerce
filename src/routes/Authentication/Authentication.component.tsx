import { FC, lazy, Suspense, useState } from "react"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"

import "./Authentication.style.scss"

const SignIn = lazy(() => import("../../components/SignIn/SignIn.component"))
const SignUp = lazy(() => import("../../components/SignUp/SignUp.component"))

const Authentication: FC = () => {
  const [showSignIn, setShowSignIn] = useState(true)

  const toggleAuthenticationComponent = () => {
    setShowSignIn(!showSignIn)
  }

  return (
    <Suspense>
      <div className="authentication-container container">
        <Breadcrumbs label={showSignIn ? "Login" : "Create Account"} />
        {showSignIn ? (
          <SignIn toggleComponent={toggleAuthenticationComponent} />
        ) : (
          <SignUp toggleComponent={toggleAuthenticationComponent} />
        )}
      </div>
    </Suspense>
  )
}

export default Authentication
