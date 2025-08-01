import React from "react";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import ForecastDays from "./ForecastDays";
import SearchBar from "./SearchBar";
import useBackgroundImage from "../hooks/useBackgroundImage";

const WeatherLayout = ({ data, onSearch }) => {
  const condition = data?.current?.condition?.text;
  const backgroundImage = useBackgroundImage(condition);

  return (
    <div
      className="relative min-h-screen w-full p-6"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(85%)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
