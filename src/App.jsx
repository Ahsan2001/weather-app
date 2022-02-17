import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Karachi");
  const [search, setSearch] = useState("Karachi");

  // useEffect( () => {
  //     const fetchApi = async () => {
  //       const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a2e619c283a5f074b6b6c01191c925e2&units=metric`;
  //       const response = await fetch(url);
  //       setWeather(response);
  //     }
  //     fetchApi();
  // }
  // ) ;


  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a2e619c283a5f074b6b6c01191c925e2&units=metric`
    )
      .then((response) => response.json())
      .then((result) => {
        setWeather(result);
      })
      .catch((Error) => {
        console.log("Erorr Running", Error);
      });
  }, [city]);


  const searchCity = (e) => {
    setSearch(city);
  };



  return (
    <>
      <div className="inner-content-main">
        <h1>WEATHER APPLICATION</h1>
        <form>
          <label htmlFor="city">Enter your city name to check weather</label>
          <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
          <button onClick={searchCity}>Search </button>
        </form>
        <div className="inner-data">
          <li>CITY:  <span>{weather.name}</span> </li>
          <li>TEMPERTURE: <span>{weather && weather.main && weather.main.temp}</span> </li>
          <li>CONDITION: <span>{weather &&  weather.weather &&  weather.weather[0] &&  weather.weather[0].main}</span> </li>
        </div>
      </div>
    </>
  )
}



export default App































