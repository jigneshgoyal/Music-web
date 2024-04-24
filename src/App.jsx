import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
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

function PrivateRoute({token,children}){
  if(token === null) return <Navigate to={'/login'} replace />
  return children
}

export default function App() {
  const [tokenChanges, setTokenChanges] = useState(false);
  const [token, setToken]  = useState(localStorage.getItem('token'))

  useEffect(()=>{
    setToken(localStorage.getItem('token'))
  }, [tokenChanges])

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header tokenChanges={tokenChanges} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setTokenChanges={setTokenChanges} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/upload" element={<Uplaod />} />
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
          </Route>
          <Route path="/admindashboard" element={<AdminDashboard />}>
            <Route path="artist" element={<ArtistList />} />
            <Route path="music" element={<MusicList />} />
            <Route path="chat" element={<ChatList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
