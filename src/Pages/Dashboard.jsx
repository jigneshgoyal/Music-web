import React from "react";
import Sidebar from "../Components/Dashbaord/Sidebar";
import Profile from "../Components/Dashbaord/Profile";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyMusic from "../Components/Dashbaord/MyMusic";
import { Router, Routes, Route } from "react-router-dom";

function Dashboard() {
  return (
    
    <div className="App flex">
      <Sidebar />
      <div className="flex-1 pl-[255px]">
      <MyMusic/>
      </div>
    </div>

  );
}

export default Dashboard;
