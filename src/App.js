import "./App.css";
import Home from "./PortfolioContainer/home/Home";
import React, { }  from 'react';

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <link href="https://cdn.jsdelivr.net/npm/react-vertical-timeline-component@3.3.1/style.min.css"></link>
      <Home style={{ height: "100vh" }} />
    </div>
  );
}

export default App;
