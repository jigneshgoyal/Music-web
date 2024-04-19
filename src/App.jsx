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
import { ToastContainer } from "react-toastify";
import AdminDashboard from "./Pages/AdminDashboard";
import ArtistList from "./Components/AdminDashboard/ArtistList";
import MusicList from "./Components/AdminDashboard/MusicList";
import ChatList from "./Components/AdminDashboard/ChatList";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
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
