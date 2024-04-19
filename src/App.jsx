import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Uplaod from "./Pages/Upload";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import MyMusic from "./Components/Dashbaord/MyMusic";
import Profile from "./Components/Dashbaord/Profile";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/upload" element={<Uplaod />} />
          <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
            <Route path="mymusic" element={<MyMusic />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
