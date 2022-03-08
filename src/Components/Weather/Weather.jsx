import React, { useState } from 'react'
import axios from 'axios';
import styles from './Weather.module.css'
import InnerCards from '../InnerCard'

const Weather = () => {


    // state initializing
    const [city, setCity] = useState("");
    const [data, setData] = useState ({
        description: "",
        country: "",
        sunset: "",
        sunrise: "",
        temp: "",
        lat: "",
        lon: "",
        speed: "",
    });



    // find city funtion with axios method 
    const searchCity = (e) => {
        e.preventDefault();
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2e619c283a5f074b6b6c01191c925e2`)
     
        // if find successfully run then 
        .then((response) => {
            setData({
                description: response.data.weather[0].description,
                country: response.data.sys.country,
                sunset: response.data.sys.sunset,
                sunrise: response.data.sys.sunrise,
                temp: response.data.main.temp,
                lat: response.data.coord.lat,
                lon: response.data.coord.lon,
                speed: response.data.wind.speed,
            })
        })
      
        // else run catch 
        .catch((error) => {
            alert("Please write city name carefully")
            console.log(error , " error");
        })
    } 
  return (
      <React.Fragment>
            <div className={`container ${styles.main_container}`}>
                <h1>Weather Application <span className={styles.h1_span}>React JS</span> </h1>
                    <div className={styles.input_main}>
                        <input type="text" placeholder="Enter City Name" className='form-control' value={city} onChange={(e)=>{setCity(e.target.value);}} />
                        <button type='submit' onClick={searchCity}>Search</button>    
                    </div>
                <InnerCards value={data}/>
            </div>
      </React.Fragment>
  )
}

export default Weather