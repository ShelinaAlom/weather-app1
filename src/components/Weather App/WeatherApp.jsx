import React from 'react'
import './WeatherApp.css'

import search_icon from "../Asse/search.png";
import clear_icon from "../Asse/clear.png";
import cloud_icon from "../Asse/cloud.png";
import drizzle_icon from "../Asse/drizzle.png";
import rain_icon from "../Asse/rain.png";
import snow_icon from "../Asse/snow.png";
import wind_icon from "../Asse/wind.png";
import humidity_icon from "../Asse/humidity.png";

const WeatherApp = () => {

  let api_key = "6421a67fbe99027eb8070844037c5b4c";

  const search =() => {
    const element = document.getElementsByClassName("cityInput")
    if (element[0].value==="")
    {
      return 0;
    }
  }
  return (
    <div className='container'> 
    <div className="top-bar">
      <input type="text" className="cityInput" placeholder='Search'/>
      <div className="search-icon" onClick={()=>{search()}}>
       <img src={search_icon} alt="" />
      </div>
    </div>
    <div className="weather-image">
    <img src={cloud_icon} alt="" />
    </div>
    <div className="weather-temp">24°c</div>
    <div className="weather-location">London</div>
    <div className="data-container">
    <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
    </div>
    <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
    </div>
    </div>
   
    </div>
  
  );
};

export default WeatherApp
