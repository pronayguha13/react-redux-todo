import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

import counter_one_reducer from "./reducers/counter-reducer";
import counter_two_reducer from "./reducers/counter2-reducer";
const rootReducer = combineReducers(counter_one_reducer, counter_two_reducer);

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  persistedReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
