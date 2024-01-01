import { AnyAction } from "redux"

import {
  CART_ACTION_TYPES,
  CartItem
} from "./cart.types"
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

  if (action.type === CART_ACTION_TYPES.CLEAR_CART_ITEMS) {
    return {
      ...state,
      cartItems: []
    }
  }

  return state
}
