import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import menu from "./SidebarMenu";
import SideBarItem from "./Sidebar-item";

const Sidebar = () => {
  // console.log(SidebarMenu);
  const location = useLocation();
  const [active, setActive] = useState(1);

  useEffect(() => {
    menu.forEach((element) => {
      if (location.pathname === element.path) {
        setActive(element.id);
      }
    });
  }, [location.pathname]);

  const __navigate = (id) => {
    setActive(id);
  };

  return (
    <nav className="bg-gray-950 h-full w-64 fixed left-0 top-0 flex flex-col text-white">
      <div className="sidebar-container">
        <div className="sidebar-logo-container p-4">
          <h2 className="text-2xl">LeeLOOP</h2>
        </div>

        <div className="sidebar-container">
          <div className="sidebar-items">
            {menu.map((item, index) => (
              <div key={index} onClick={() => __navigate(item.id)}>
                <SideBarItem active={item.id === active} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
