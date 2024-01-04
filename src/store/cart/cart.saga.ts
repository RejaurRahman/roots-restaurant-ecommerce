import {
  all,
  call,
  put,
  takeLatest
} from "typed-redux-saga/macro"

import { createOrderDocument } from "../../utils/firebase/firebase.utils"

import { CART_ACTION_TYPES } from "./cart.types"
import {
  addOrderFailure,
  addOrderSuccess
} from "./cart.action"

export function* addOrder({
  payload: {
    cartItems,
    totalAmount,
    uniqueId,
    userId
  }
}: any) {
  try {
    yield call(createOrderDocument, cartItems, totalAmount, uniqueId, userId)
    yield put(addOrderSuccess())
  } catch (error) {
    yield put(addOrderFailure(error))
  }
}

export function* onAddOrderStart() {
  yield takeLatest(CART_ACTION_TYPES.ADD_ORDER_START, addOrder)
}

export function* cartSagas() {
  yield all([call(onAddOrderStart)])
}
