import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sports from "./Componenets/Sports";
import Quiz from "./Componenets/Quiz";
import Movies from "./Componenets/Movies";
import Health from "./Componenets/Health";
import General from "./Componenets/General";
import Technology from "./Componenets/Technology";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/tv-movies" element={<Movies />} />
          <Route path="/health-fitness" element={<Health />} />
          <Route path="general-knowledge" element={<General />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
