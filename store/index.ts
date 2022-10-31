import { configureStore } from "@reduxjs/toolkit";

import searchHistoryReducer from "./search-history/slice";

import { apiSlice } from "./api/slice";

export const store = configureStore({
  reducer: {
    searchHistory: searchHistoryReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
