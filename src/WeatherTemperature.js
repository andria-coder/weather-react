import React, { useState } from "react";

export default function WeatherTemperature(props){
  const [unit, setUnit] = useState("celsius");

  function showFahrenheight(event){
    event.preventDefault();
    setUnit("fahrenheit")
  }

  function showCelsius(event){
    event.preventDefault();
    setUnit("celsius")
  }
  if (unit === "celsius") {
  return(
    <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C</span><span className="unit"> |{" "}
          <a href="/" onClick={showFahrenheight}>°F</a>
        </span>
    </div>
  );
 } else {
  return (
    <div className="WeatherTemperature">
        <span className="temperature">{Math.round((props.celsius * 9/5) + 32)}</span><span className="unit"><a href="#" onClick={showCelsius}> °C</a></span><span className="unit"> |°F</span>

    </div>
  )
 }


}
