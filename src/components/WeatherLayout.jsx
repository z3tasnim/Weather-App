import React from "react";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import ForecastDays from "./ForecastDays";
import SearchBar from "./SearchBar";
import useBackgroundClass from "../hooks/useBackgroundClass";

const WeatherLayout = ({ data, onSearch }) => {
  const condition = data?.current?.condition?.text;
  const bgClass = useBackgroundClass(condition);

  return (
    <div className={`min-h-screen w-full p-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left section */}
        <div>
          <CurrentWeather
            city={data.location.name}
            country={data.location.country}
            condition={condition}
            temperature={data.current.temp_c}
            wind={`${data.current.wind_kph} km/h ${data.current.wind_dir}`}
          />
          <HourlyForecast hourlyData={data.forecast.forecastday[0].hour} />
        </div>

        {/* Right section */}
        <div>
          <SearchBar onSearch={onSearch} />
          <ForecastDays forecast={data.forecast.forecastday.slice(1)} />
        </div>
      </div>
    </div>
  );
};

export default WeatherLayout;
