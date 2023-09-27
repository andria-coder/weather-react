import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){

  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false)
  }, [props.coordinates]);


  function handleResponse(response){
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);
  }

  function search(){
      const apiKey = "207331124b00o1ab9037f98ta857dc55";
      let lat = props.coordinates.lat;
      let lon = props.coordinates.lon;
      let apiUrl =`https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

      axios.get(apiUrl).then(handleResponse);

      return null;
  }



  if(ready) {
    return (

      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index){
            if (index < 5){
            return (
              <div className="col" key={index} >
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
          })}
        </div>
      </div>
    );

  } else { search();
  }

}
