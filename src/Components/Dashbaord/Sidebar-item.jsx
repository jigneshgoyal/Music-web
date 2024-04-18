import React from 'react';
import { Link } from 'react-router-dom';

const SideBarItem = ({ item, active }) => {
  return (
    <Link
      to={item.path}
      className={`sidebar-item flex items-center justify-center py-4 ${
        active ? 'bg-slate-800' : 'hover:bg-gray-950'
      }`}
    >
      <img
        src={item.icon}
        alt={`icon-${item.icon}`}
        className="sidebar-item-icon h-6 w-6 mr-2"
      />
      <span className="sidebar-item-label">{item.title}</span>
    </Link>
  );
};

export default SideBarItem;