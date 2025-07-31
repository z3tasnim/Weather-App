import React from "react";
import { FaLocationDot, FaWind } from "react-icons/fa6";

const CurrentWeather = ({ city, country, condition, temperature, wind }) => (
  <div className="text-white space-y-2">
    <h3 className="text-2xl font-semibold">
      <FaLocationDot className="inline mr-2" />
      {city} - {country}
    </h3>
    <h1 className="text-4xl font-bold">{condition}</h1>
    <h1 className="text-5xl font-bold">{temperature}°C</h1>
    <p className="text-md">
      <FaWind className="inline mr-1" />
      {wind}
    </p>
  </div>
);

export default CurrentWeather;
