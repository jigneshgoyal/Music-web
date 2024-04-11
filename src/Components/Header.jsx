import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-black text-white shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-7">
        <div className="font-bold text-2xl">LEELOOP</div>
        <ul>
          <li className="rounded-full bg-gradient-to-r via-purple-500 from-indigo-500 to-pink-500 ... p-[2px] hover:scale-110 mr-3">
          <Link to={"/signup"}><button className="rounded-full font-bold bg-slate-700 px-6 py-2">Sign Up</button></Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
