import React from "react";
import { BsCloud } from "react-icons/bs";

const HourCard = ({ time, temp }) => (
  <div className="bg-white/10 p-4 rounded-xl text-center text-white">
    <p>{time}</p>
    <BsCloud className="text-2xl mx-auto my-2" />
    <h2>{temp}°C</h2>
  </div>
);

export default HourCard;
