import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface History {
  lastQuery: string;
  histories: string[];
}

const initialState: History = {
  lastQuery: "",
  histories: [],
};

export const historySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    addSearchHistory: (state, action: PayloadAction<string>) => {
      if (!state.histories.includes(action.payload)) {
        state.histories.push(action.payload);
      }
    },
    setLastQuery: (state, action: PayloadAction<string>) => {
      state.lastQuery = action.payload;
    },
  },
});

export const { addSearchHistory, setLastQuery } = historySlice.actions;

export default historySlice.reducer;
