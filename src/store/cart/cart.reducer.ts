import { AnyAction } from "redux"

import { CartItem } from "./cart.types"
import {
  setCartItems,
  setIsCartOpen
} from "./cart.action"

export type CartState = {
  cartItems: CartItem[]
  isCartOpen: boolean
}

export const CART_INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false
}

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    }
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload
    }
  }

  return state
}
