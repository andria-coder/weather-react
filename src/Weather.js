import React from "react";
import "./Weather.css";

export default function Weather(){
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
       <h1>Cologne</h1>
       <ul>
          <li>Wednesday 07:00</li>
          <li>Sunny</li>
       </ul>
       <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="sunny"
                    className="float-left" />
              <span className="float-left">
                <span className="temperature">20</span><span className="unit">°C</span>
              </span>
            </div>
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
