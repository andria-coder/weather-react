import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
  console.log(props)

  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response){
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);


  }



  if(ready) {
    return (

      <div className="WeatherForecast">
        <div className="row">
          <WeatherForecastDay data={forecast[0]} />

        </div>

      </div>
    )

  } else {
      const apiKey = "207331124b00o1ab9037f98ta857dc55";
      let lat = props.coordinates.lat;
      let lon = props.coordinates.lon;
      let apiUrl =`https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

      axios.get(apiUrl).then(handleResponse);

      return null;

  }

}