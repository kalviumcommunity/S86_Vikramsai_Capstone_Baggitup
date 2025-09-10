import React from "react";

export default function WeatherIndicator({ iconUrl, temperature }) {
  return (
    <div className="flex items-center space-x-3 bg-blue-100 p-3 rounded-lg w-max">
      <img src={iconUrl} alt="weather icon" className="w-8 h-8" />
      <span className="text-lg font-medium text-[#0D1B2A]">
        {temperature}°C
      </span>
    </div>
  );
}
