import React, { useState } from "react";
import FormattedDate from "./FormattedDate"
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"

    });

  }



if (weatherData.ready) {
  return(
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a city..."
              className="form-control"/>
          </div>
          <div className="col-3">
            <input
            type="Submit"
            value="Search"
            className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
       <h1>{weatherData.city}</h1>
       <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
       </ul>
       <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="float-left" />
              <span className="float-left">
                <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
       </div>
    </div>
  );
} else {
    const apiKey = "0d206f601e5e6e86a658ffd9322e991a";
    let city = "Cologne"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
  }
}
