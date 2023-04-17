import React from "react";
import "./App.css";
import HomeScreen from "./pages/homescreen/HomeScreen";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  const user = false;
  const ProtectedRoutes = ({ children }) => {
    if (!user) return <Navigate to="/login" />;

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <ProtectedRoutes>
              <HomeScreen />
            </ProtectedRoutes>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
