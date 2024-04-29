import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Uplaod from "./Pages/Upload";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import MyMusic from "./Components/Dashbaord/MyMusic";
import Profile from "./Components/Dashbaord/Profile";
import { ToastContainer } from "react-toastify";
import AdminDashboard from "./Pages/AdminDashboard";
import ArtistList from "./Components/AdminDashboard/ArtistList";
import MusicList from "./Components/AdminDashboard/MusicList";
import ChatList from "./Components/AdminDashboard/ChatList";
import PaymentGateway from "./Components/PaymentGateway";
import Setting from "./Components/Dashbaord/Setting";
import ViewPage from "./Components/AdminDashboard/ViewPage";
import ChatPage from "./Pages/ChatPage";

function PrivateRoute({ token, children }) {
  if (token === null) return <Navigate to={"/login"} replace />;
  return children;
}

export default function App() {
  const [tokenChanges, setTokenChanges] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [localStorageChange, setLocalStorageChange] = useState(false);

  // update the local storage changes when the login occurs
  useEffect(() => {
    setLocalStorageChange((prev) => !prev);
  }, [tokenChanges]);

  // set the token when the local storage changes modified
  useEffect(() => {
    setToken(
      localStorage.getItem("token") ? localStorage.getItem("token") : null
    );
  }, [localStorageChange]); // Rerun effect when localStorageChange state changes

  // handle the local storage changes
  const handleLocalStorageChange = () => {
    // Toggle localStorageChange state to trigger rerender
    setLocalStorageChange((prevState) => !prevState);
  };
  useEffect(() => {
    // Listen for changes in localStorage
    window.addEventListener("storage", handleLocalStorageChange);

    // unmount the listener after the destroy of component
    return () => {
      window.removeEventListener("storage", handleLocalStorageChange);
    };
  }, []);

  const chat = {
    username: "admin",
    secret: "123456",
  };

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header token={token} setTokenChanges={setTokenChanges} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setTokenChanges={setTokenChanges} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/upload" element={<Uplaod />} />
          <Route path="/viewpage" element={<ViewPage />} />

          <Route path="/leeloop-connect" element={<ChatPage user={chat} />} />
          <Route path="/paymentgateway" element={<PaymentGateway />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute token={token}>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="mymusic" element={<MyMusic />} />
            <Route path="setting" element={<Setting />} />
            <Route path="leeloop-connect" element={<ChatPage />} />
          </Route>
          <Route
            path="/admindashboard"
            element={
              <PrivateRoute token={token}>
                <AdminDashboard />
              </PrivateRoute>
            }
          >
            <Route path="artist" element={<ArtistList />} />
            <Route path="music" element={<MusicList />}>

            </Route>
            <Route path="chat" element={<ChatList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
