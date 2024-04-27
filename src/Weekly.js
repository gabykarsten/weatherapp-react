import React from "react";
import "./Weekly.css";

export default function Weekly() {
  return (
    <div className="overview">
      <div className="daily">
        <h6 className="day">Sat</h6>
        <h6 className="icon">&#x2601;</h6>
        <h6 className="temperature">14&deg;C</h6>
      </div>
      <div className="daily">
        <h6 className="day">Sun</h6>
        <h6 className="icon">&#x2601;</h6>
        <h6 className="temperature">14&deg;C</h6>
      </div>
      <div className="daily">
        <h6 className="day">Mon</h6>
        <h6 className="icon">&#x2601;</h6>
        <h6 className="temperature">14&deg;C</h6>
      </div>
      <div className="daily">
        <h6 className="day">Tue</h6>
        <h6 className="icon">&#x2601;</h6>
        <h6 className="temperature">14&deg;C</h6>
      </div>
      <div className="daily">
        <h6 className="day">Wed</h6>
        <h6 className="icon">&#x2601;</h6>
        <h6 className="temperature">14&deg;C</h6>
      </div>
    </div>
  );
}
