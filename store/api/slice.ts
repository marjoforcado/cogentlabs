import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.foursquare.com/v3",
    prepareHeaders: (headers) => {
      if (process.env.NEXT_PUBLIC_FOUR_SQ_SECRET) {
        headers.set("Authorization", process.env.NEXT_PUBLIC_FOUR_SQ_SECRET);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPlaces: builder.query<any, void>({
      query: () =>
        `/places/search?ll=35.66544525437135,139.73779834232948&radius=1000&categories=13065`,
    }),
  }),
});

export const { useGetPlacesQuery } = apiSlice;
