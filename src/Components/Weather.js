import React, { useState } from 'react'
import './Weather.css'

const api = {
    key: 'a31e3cec5f3ec329ef4cc2b2f5251ed7',
    base: 'https://api.openweathermap.org/data/2.5/'
} 

function Weather(){
    const [search, setSearch] = useState("")
    const [weather, setWeather] = useState("")

    const searchPress = () =>{
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res => res.json()))
        .then((data) => setWeather(data))
    } 

    document.title = "Weather";

  return (
    <div className='Weather'>
    <div className='card'>
    <header className='App-header'>
    <h1>Weather App</h1>
    <div className='info'>
    <input type='text' placeholder='Enter Place' onChange={(e)=>setSearch(e.target.value)}></input>
    <button onClick={searchPress}>Search</button>
    </div>
    {(typeof weather.main !== "undefined")? (
        <div className='result'>
        <p><i class="fa-solid fa-fan fa-spin-pulse"></i></p>
        <p>Place <i class="fa-solid fa-location-dot"></i> : {weather.name}</p><br/>        
        <p>Sky <i class="fa-solid fa-cloud-sun-rain"></i> : {weather.weather[0].main}</p><br/>
        <p>Temp <i class="fa-solid fa-temperature-half fa-bounce"></i> : {weather.main.temp}°C</p><br/>
        <p>Description : {weather.weather[0].description}</p>
        </div>
    ): <div className='noresult'>("Not Found!!!")</div>}
    </header>
    </div>
    </div>
  )
}

export default Weather
