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
    getPlacesSearch: builder.query<{ results: Place[] }, string>({
      query: (query) =>
        `/places/search?ll=35.66544525437135,139.73779834232948&radius=1000&categories=13065&query=${query}`,
    }),
    getPlacesDetails: builder.query<any, string>({
      queryFn: async (arg, _api, _extraOptions, baseQuery) => {
        const details = await baseQuery(`/places/${arg}`);
        const photos = await baseQuery(`/places/${arg}/photos`);
        const tips = await baseQuery(`/places/${arg}/tips`);

        return {
          data: {
            details: details.data,
            photos: photos.data,
            tips: tips.data,
          },
        };
      },
    }),
  }),
});

export const { useLazyGetPlacesSearchQuery, useLazyGetPlacesDetailsQuery } =
  apiSlice;
