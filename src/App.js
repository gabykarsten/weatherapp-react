import logo from "./logo.svg";
import React from "react";
import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Weather App
        <Weather />
      </header>
    </div>
  );
}

export default App;
