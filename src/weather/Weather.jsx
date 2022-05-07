import Forecast from "./Forecast";

export default function Weather({ weather }) {
  if (weather.location) {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-around">
          <div>
            <h1>
              {weather.location.name}, {weather.location.region}
            </h1>
            <h4 className="font-weight-light">
              {weather.current.last_updated}
            </h4>
            <div className="d-flex">
              <img
                src={weather.current.condition.icon}
                alt="Weather Icon"
                className="w-50"
              />
              <div>
                <h1 className="display-2">{weather.current.temp_f}°</h1>
                <h4 className="font-weight-light text-center">
                  {weather.current.condition.text}
                </h4>
              </div>
            </div>
          </div>
          <table className="col-md-5 text-center">
            <tbody>
              <tr>
                <td>{weather.forecast.forecastday[0].day.maxtemp_f}° High</td>
                <td>{weather.current.wind_mph}mph Wind</td>
                <td>{weather.forecast.forecastday[0].astro.sunrise} Sunrise</td>
              </tr>
              <tr>
                <td>{weather.forecast.forecastday[0].day.mintemp_f}° Low</td>
                <td>
                  {weather.forecast.forecastday[0].day.daily_chance_of_rain}%
                  Rain
                </td>
                <td>{weather.forecast.forecastday[0].astro.sunset} Sunset</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-center mt-5">Forecast</h2>
          <div className="d-flex justify-content-center">
            {weather.forecast.forecastday.map((day, index) => (
              <Forecast day={day} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
