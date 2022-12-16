import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  activeFilter: boolean;
  completedFilter: boolean;
  showAllFilter: boolean;
}
const initialState: initialStateProps = {
  activeFilter: false,
  completedFilter: false,
  showAllFilter: true,
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    updateCompletedFilter: (state, action) => {
      state.completedFilter = action.payload;
    },
    updateShowAllFilter: (state, action) => {
      state.showAllFilter = action.payload;
    },
  },
});

export const {
  updateActiveFilter,
  updateCompletedFilter,
  updateShowAllFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
