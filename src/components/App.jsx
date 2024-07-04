import React, {
  useState,
  useEffect,
} from "react";
import { Weather } from "./Weather";
import { WeatherContext } from "../WeatherContext";

export function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setWeather((prevWeatherObject) => {
        return {
          ...prevWeatherObject,
          Berlin: "rainy 🌧️",
        };
      });
    }, 500);

    setTimeout(() => {
      setWeather((prevWeatherObject) => {
        return {
          ...prevWeatherObject,
          Bonn: "sunny ☀️",
        };
      });
    }, 1000);

    setTimeout(() => {
      setWeather((prevWeatherObject) => {
        return {
          ...prevWeatherObject,
          'Frankfurt am Main': "hot and cold ⛅",
        };
      });
    }, 1000);

  }, []);

  return (
    <div>
      <h1>⛅ Wetta</h1>

      <WeatherContext.Provider value={weather}>
        <Weather city="Berlin" />
        <Weather city="Frankfurt am Main" />
        <Weather city="Bonn" />
      </WeatherContext.Provider>
    </div>
  );
}
