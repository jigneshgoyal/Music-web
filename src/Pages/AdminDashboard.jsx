import React from 'react'
import AdminSidebar from '../Components/AdminDashboard/AdminSidebar'
import { Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="App flex">
    <AdminSidebar />
    <div className="flex-1 pl-[255px]">
      <Outlet />
    </div>
    
  </div>
  )
}

export default AdminDashboard
