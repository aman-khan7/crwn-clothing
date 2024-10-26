// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";
// import { thunk } from "redux-thunk";

const middlewares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer as any);

// const middlewares = [
//   thunk as any,
//   ...(process.env.NODE_ENV !== "production" ? [logger] : []),
// ];
// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENTION_COMPOSE__?: any;
//   }
// }
// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__) ||
//   compose;
// const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares) as any,
});

// export const store = createStore(persistedReducer, undefined, composeEnhancers);

export type RootState = ReturnType<typeof rootReducer>;

// export const persistor = persistStore(store);
