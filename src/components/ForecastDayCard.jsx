import React from "react";
import { BsCloud } from "react-icons/bs";

const ForecastDayCard = ({ day, condition, maxTemp, minTemp }) => (
  <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl text-white">
    <div className="flex items-center gap-4">
      <BsCloud className="text-3xl" />
      <div>
        <h2 className="font-bold">{day}</h2>
        <p>{condition}</p>
      </div>
    </div>
    <div className="text-right">
      <h2>{maxTemp}°C</h2>
      <h2>{minTemp}°C</h2>
    </div>
  </div>
);

export default ForecastDayCard;
