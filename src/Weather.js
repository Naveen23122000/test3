import React,{useState} from 'react';
import './Weather.css';

const Weather=()=>{
    const [city,setCity]=useState('');
    const [weatherData,setWeatherData]=useState();

    const fetchWeatherData=async()=>{
        try{
            const response=await fetch('http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=63b614628e8880975147c96cf8e35c6a');
            const data=await response.json();
            setWeatherData(data);
        }
        catch(error){
            console.error('Error:',error);
        }
    };

    return(

        <div className='weather-container'>
            <input id='input-box' type='text' placeholder='Enter City' value={city} onChange={(e)=>setCity(e.target.value)}/>
            <button id="weather-button" onClick={fetchWeatherData}>Get Weather</button>
            {weatherData&&(
                <div className='weather-info'>
                    <h2> Weather in {weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Latitute: {weatherData.coord.lat}</p>
                    <p>Longitude: {weatherData.coord.lon}</p>
                    <p>Temperature: {weatherData.main.temp} C</p>
                    <p>Min. Temperature: {weatherData.main.temp_min} C</p>
                    <p>Max. Temperature: {weatherData.main.temp_max} C</p>
                    <p>Humidity: {weatherData.main.humidity}</p>
                    <p>Pressure: {weatherData.main.pressure}</p>
                    </div>
            )}
        </div>
    )
};

export default Weather;