import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Category {
  id: number;
  name: string;
  icon: {
    prefix: string;
    suffix: string;
  };
}

interface Location {
  formatted_address: string;
}

interface Place {
  fsq_id: string;
  categories: Category[];
  name: string;
  location: Location;
}

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
    getPlacesSearch: builder.query<{ results: Place[] }, void>({
      query: () =>
        `/places/search?ll=35.66544525437135,139.73779834232948&radius=1000&categories=13065&limit=9`,
    }),
    getPlacesDetails: builder.query<any, void>({
      query: () => "/places/4b56877ef964a5201b1428e3",
    }),
  }),
});

export const { useGetPlacesSearchQuery, useGetPlacesDetailsQuery } = apiSlice;
