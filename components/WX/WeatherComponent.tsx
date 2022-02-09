import React from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

type WeatherRequest = {
  airportIcao: string;
  metar: string;
  updatedAt: string;
};

const WeatherComponent = () => {
  return (
    <div className="flex ml-20 w-full h-fit bg-zinc-200 min-h-screen items-center justify-center">
      <WeatherCard />
    </div>
  );
};

export default WeatherComponent;
