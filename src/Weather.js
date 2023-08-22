import React from "react";
import axios from "axios";
import { InfinitySpin } from 'react-loader-spinner'
;
export default function Weather(props){
  function handleResponse(response){
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}C`
  );
}
let apiKey= "0d206f601e5e6e86a658ffd9322e991a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);


  return (
    <div className="Weather">
      <h1>"Hello from Weather"</h1>
      <InfinitySpin
        width='200'
        color="white"
      />
    </div>
  )
}
