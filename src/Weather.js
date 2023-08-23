import React from "react";
import "./Weather.css";

export default function Weather(){
  return(
    <div className="Weather">
       <h1>Cologne</h1>
       <ul>
          <li>Wednesday 07:00</li>
          <li>Sunny</li>
       </ul>
       <div className="row">
          <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny" />
            20°C
          </div>
          <div className="col-6">
            <ul>
              <li>
                Precipitation: 5%
              </li>
              <li>Humidity 60%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
       </div>

    </div>

  )
}
