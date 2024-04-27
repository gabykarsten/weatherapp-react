import React from "react";
import Weather from "./Weather.js";
import Weekly from "./Weekly.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        How's the Weather
        <Weather />
        <Weekly />
        <p>
          <a
            href="https://github.com/gabykarsten/weatherapp-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/gabykarsten"
            target="_blank"
            rel="noreferrer"
          >
            Gabriella Karsten
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
