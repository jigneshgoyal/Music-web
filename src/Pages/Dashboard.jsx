import React from "react";
import Sidebar from "../Components/Dashbaord/Sidebar";
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
