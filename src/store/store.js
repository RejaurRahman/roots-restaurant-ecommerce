import {
  applyMiddleware,
  compose,
  configureStore
} from "redux"

import { rootReducer } from "./root-reducer"

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }

  next(action)
}

const middlewares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = configureStore(rootReducer, undefined, composedEnhancers)
