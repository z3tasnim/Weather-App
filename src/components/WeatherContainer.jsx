import React, { useState } from "react";
import { useGetWeatherByCityQuery } from "../features/weather/weatherApi";
import WeatherLayout from "./WeatherLayout";

const WeatherContainer = () => {
  const [city, setCity] = useState("Sylhet");
  const { data, isLoading, isError } = useGetWeatherByCityQuery(city);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (isError || !data)
    return <p className="text-red-400">Failed to fetch data.</p>;

  return <WeatherLayout data={data} onSearch={handleSearch} />;
};

export default WeatherContainer;
