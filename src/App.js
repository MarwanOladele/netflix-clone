import React from "react";
import "./App.css";
import HomeScreen from "./pages/homescreen/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
