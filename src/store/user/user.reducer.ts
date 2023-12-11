import { AnyAction } from "redux"

import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed
} from "./user.action"

import { UserData } from "../../utils/firebase/firebase.utils"

export type UserState = {
  readonly currentUser: UserData | null
  readonly error: Error | null
  readonly isLoading: boolean
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  error: null,
  isLoading: false
}

export const userReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload }
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null }
  }

  if (
    signOutFailed.match(action) ||
    signInFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload }
  }

  return state
}
