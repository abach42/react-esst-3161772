import React, { useContext } from "react";
import { WeatherContext } from "../WeatherContext";

export function Weather(props) {
    const weatherState = useContext(WeatherContext)
    const weatherText = weatherState[props.city] ?? "N/A";

    return (
        <p>
            <strong>{props.city}</strong>: {weatherText}
        </p>
    );
}