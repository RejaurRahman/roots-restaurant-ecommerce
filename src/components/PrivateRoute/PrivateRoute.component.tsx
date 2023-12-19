import { FC } from "react"
import {
  Navigate,
  Outlet
} from "react-router-dom"
import { useSelector } from "react-redux"

import { RootState } from "../../store/store"

const PrivateRoute: FC = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)

  return currentUser ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/auth" />
  )
}

export default PrivateRoute
