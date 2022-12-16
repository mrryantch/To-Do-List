import { createSlice } from "@reduxjs/toolkit";
import { TicketType } from "../data";
import { removeItem, updateStatus, updateContent } from "./util";

const initialState: Array<TicketType> = [];
export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.push(action.payload);
    },
    deleteTicket: (state, action) => {
      // dispatch ticket index and remove that index from redux
      removeItem(state, action.payload);
    },
    editTicket: (state, action) => {
      updateContent(state, action.payload.key, action.payload.content);
    },
    updateTicketStatus: (state, action) => {
      updateStatus(state, action.payload);
    },
    sortAscendingTrigger: (state) => {
      state = state.reverse();
    },
    sortDescendingTrigger: (state) => {
      state = state.reverse();
    },
  },
});

export const {
  addTicket,
  deleteTicket,
  editTicket,
  updateTicketStatus,
  sortAscendingTrigger,
  sortDescendingTrigger,
} = ticketSlice.actions;
export default ticketSlice.reducer;
