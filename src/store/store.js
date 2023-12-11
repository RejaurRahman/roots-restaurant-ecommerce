import {
  compose,
  configureStore,
  applyMiddleware
} from "redux"
import {
  persistReducer,
  persistStore
} from "redux-persist"
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"

import logger from "redux-logger"
import { rootReducer } from "./root-reducer"

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean)

const composeEnhancer = (
  process.env.NODE_ENV !== "production" &&
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = configureStore(
  persistedReducer,
  undefined,
  composedEnhancers
)

export const persistor = persistStore(store)
