import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
console.log("RapidAPI Key:", rapidApiKey);

export const citiesApi = createApi({
  reducerPath: "citiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wft-geo-db.p.rapidapi.com/v1/geo",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "wft-geo-db.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCitySuggestions: builder.query({
      query: (namePrefix) => `cities?namePrefix=${namePrefix}&limit=5`,
      transformResponse: (response) =>
        response.data.map((city) => ({
          id: city.id,
          name: city.name,
          country: city.country,
        })),
    }),
  }),
});

export const { useGetCitySuggestionsQuery } = citiesApi;
