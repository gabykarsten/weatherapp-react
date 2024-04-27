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
      </header>
    </div>
  );
}

export default App;
