import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface History {
  histories: string[];
}

const initialState: History = {
  histories: [],
};

export const historySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    addSearchHistory: (state, action: PayloadAction<string>) => {
      state.histories.push(action.payload);
    },
  },
});

export const { addSearchHistory } = historySlice.actions;

export default historySlice.reducer;
