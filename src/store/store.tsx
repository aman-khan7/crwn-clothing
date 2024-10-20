import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

const middlewares = [
  ...(process.env.NODE_ENV !== "production" ? [logger] : []),
];
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENTION_COMPOSE__?: any;
  }
}
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__) ||
  compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
