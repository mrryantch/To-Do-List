import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./ticket";
import filterReducer from "./filter";

export const store = configureStore({
  reducer: { ticket: ticketReducer, filter: filterReducer },
});
export type RootState = ReturnType<typeof store.getState>;
