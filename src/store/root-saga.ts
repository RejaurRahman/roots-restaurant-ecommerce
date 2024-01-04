import {
  all,
  call
} from "typed-redux-saga/macro"

import { cartSagas } from "./cart/cart.saga"
import { categoriesSaga } from "./categories/category.saga"
import { userSagas } from "./user/user.saga"

export function* rootSaga() {
  yield* all([
    call(cartSagas),
    call(categoriesSaga),
    call(userSagas)
  ])
}
