import { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  const key = `${process.env.REACT_APP_API_KEY}`;
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const handleChange = ({ target }) => {
    setLocation(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3&aqi=no&alerts=no`
    );
    const data = await response.json();
    setWeather(data);
    setLocation("");
  };

  return (
    <div>
      <header className="mb-3">
        <h5 className="text-uppercase p-3">Weather App</h5>
      </header>
      <section className="container pt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group row d-flex justify-content-center">
            <div className="input-group mb-3 col-md-6 ">
              <input
                type="text"
                name="location"
                id="location"
                className="form-control"
                placeholder="Enter city or zip code"
                onChange={handleChange}
                value={location}
                required
              />
              <button
                className="btn btn-light"
                type="submit"
                id="button-addon2"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </form>
      </section>
      {weather.error ? (
        <h1 className="text-center pt-5">{weather.error.message}</h1>
      ) : (
        <Weather weather={weather} />
      )}
    </div>
  );
}
