import React from "react";
import ForecastDayCard from "./ForecastDayCard";

const ForecastDays = ({ forecast }) => (
  <div className="space-y-4 mt-6">
    <h1 className="text-white text-2xl font-semibold">Next Days Forecast</h1>
    {forecast.map((day, idx) => (
      <ForecastDayCard
        key={idx}
        day={day.date}
        condition={day.day.condition.text}
        maxTemp={day.day.maxtemp_c}
        minTemp={day.day.mintemp_c}
      />
    ))}
  </div>
);

export default ForecastDays;
