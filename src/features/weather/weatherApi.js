// src/features/weather/weatherApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "9c7e22a47de940a4bcc183305252907";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.weatherapi.com/v1/" }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) =>
        `forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`,
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi;
