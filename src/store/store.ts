import {
  applyMiddleware,
  compose,
  createStore,
  Middleware
} from "redux"

import {
  persistReducer,
  PersistConfig,
  persistStore
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"

import { rootSaga } from "./root-saga"
import rootReducer from "./root-reducer"

export type RootState = ReturnType<typeof rootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares: Middleware[] = [
  ...(process.env.NODE_ENV !== "production" ? [logger] : []),
  sagaMiddleware,
].filter(Boolean) as Middleware[]


const composeEnhancer: typeof compose =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
