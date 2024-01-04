import { CategoryItem } from "../categories/category.types"

export enum CART_ACTION_TYPES {
  ADD_ORDER_START = "ADD_ORDER_START",
  ADD_ORDER_SUCCESS = "ADD_ORDER_SUCCESS",
  ADD_ORDER_FAILURE = "ADD_ORDER_FAILURE",
  CLEAR_CART_ITEMS = "cart/CLEAR_CART_ITEMS",
  SET_CART_COUNT = "cart/SET_CART_COUNT",
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  SET_CART_TOTAL = "cart/SET_CART_TOTAL",
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN"
}

export type CartItem = {
  quantity: number
} & CategoryItem
