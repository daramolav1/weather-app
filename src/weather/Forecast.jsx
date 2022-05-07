export default function Forecast({ day }) {
  return (
    <div
      className="card text-center mb-5"
      style={{ background: "rgba(204, 204, 204, 0.4)" }}
    >
      <div className="card-body">
        <h5 className="card-text">{day.date}</h5>
        <h5 className="card-text">{day.day.condition.text}</h5>
        <img src={day.day.condition.icon} alt="Weather icon" />
        <h5 className="card-text">{day.day.avgtemp_f}°</h5>
      </div>
    </div>
  );
}
