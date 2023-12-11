import {
  compose,
  configureStore,
  applyMiddleware
} from "redux"
import {
  persistReducer,
  persistStore
} from "redux-persist"
import storage from "redux-persist/lib/storage"

// import logger from "redux-logger";
import { rootReducer } from "./root-reducer"

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  next(action)
}

const middleWares = [loggerMiddleware]

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = configureStore(
  persistedReducer,
  undefined,
  composedEnhancers
)

export const persistor = persistStore(store)
