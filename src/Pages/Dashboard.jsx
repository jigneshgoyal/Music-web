import React from "react";
import Sidebar from "../Components/Dashbaord/Sidebar";
import Profile from "../Components/Dashbaord/Profile";
import MyMusic from "../Components/Dashbaord/MyMusic";
import { Outlet } from "react-router-dom";


function Dashboard() {
  return (
    
    <div className="App flex">
      <Sidebar />
      <div className="flex-1 pl-[255px]">
        <Outlet />
      </div>
      
    </div>

  );
}

export default Dashboard;
