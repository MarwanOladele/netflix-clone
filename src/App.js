import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/homescreen/HomeScreen";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const user = false;
  const ProtectedRoutes = ({ children }) => {
    if (!user) return <Navigate to="/login" />;

    return children;
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userAuth) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = userAuth.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    return () => {
      unsub();
    };
  }, []);

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
