import React from "react";
import HourCard from "./HourCard";

const HourlyForecast = ({ hourlyData }) => (
  <div className="flex gap-4 overflow-x-auto py-4">
    {hourlyData.map((hour, idx) => (
      <HourCard key={idx} time={hour.time} temp={hour.temp_c} />
    ))}
  </div>
);

export default HourlyForecast;
