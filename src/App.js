import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/homescreen/HomeScreen";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./pages/profilecsreen/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsub;
  }, [dispatch]);

  // const ProtectedRoutes = ({ children }) => {
  //   if (!user) return <Navigate to="/login" />;
  //   return children;
  // };
  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
