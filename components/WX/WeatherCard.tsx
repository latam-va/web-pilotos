import axios from "axios";
import React, { useState } from "react";

const WeatherCard = () => {
  const [icao, setIcao] = useState("");
  const [metar, setMetar] = useState("");
  const [error, setError] = useState("");

  const getMetar = async () => {
    if (icao.length === 0) {
      return setError("Por favor ingresa un ICAO");
    }

    try {
      const response = await axios.get(
        `https://api.ivao.aero/v2/airports/${icao}/metar`,
        {
          headers: {
            accept: "application/json",
            apiKey: process.env.IVAO_API_KEY!,
          },
        }
      );

      setMetar(response.data.metar);
    } catch (error: any) {
      setError('Error 404, el ICAO no exitste o hay un problema con la API')
    }
  };

  return (
    <div className="flex w-auto h-auto">
      <div className="flex flex-col">
        <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="bg-gray-100 outline-none"
              type="text"
              placeholder="ICAO del Aeropuerto"
              onChange={(e) => setIcao(e.target.value)}
            />
          </div>
          <div className="bg-green-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <span>
              <button onClick={getMetar}>Buscar</button>
            </span>
          </div>
          <div className="flex flex-col">
            {metar && <h3>{metar}</h3>}
            {error && <h3 className="text-red-600 font-bold">{error}</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
