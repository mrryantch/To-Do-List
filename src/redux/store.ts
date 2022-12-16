import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./ticket";
import filterReducer from "./filter";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  ticket: ticketReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export type RootState = ReturnType<typeof store.getState>;
