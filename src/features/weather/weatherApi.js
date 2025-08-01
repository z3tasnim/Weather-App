// src/features/weather/weatherApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.weatherapi.com/v1/" }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) =>
        `forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`,
    }),
    getCitySuggestions: builder.query({
      query: (query) =>
        `search.json?key=${API_KEY}&q=${encodeURIComponent(query)}`,
    }),
  }),
});

export const { useGetWeatherByCityQuery, useGetCitySuggestionsQuery } =
  weatherApi;
