import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../image/logo1.png";
import AOS from "aos";
import "aos/dist/aos.css";


const Header = ({ token, setTokenChanges, adminEmail, setAdminEmailChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logout = () => {
    console.log("clicked");
    localStorage.clear();
    setTokenChanges(prev => !prev);
    setAdminEmailChange(prev => !prev);
  };

  return (
    <header className="bg-gray-950 text-white shadow-2xl sticky top-0 z-50 py-3 px-7 md:py-4 lg:py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-24" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 md:space-x-6 lg:space-x-8">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {(token || adminEmail) ? (
              <>
                <li>
                  <button className="nav-link" onClick={logout}>
                    Logout
                  </button>
                </li>
                {(adminEmail && !token) ? (
                  <li>
                    <Link
                    to="/admindashboard/artist"
                    className="nav-link bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                  >
                    Admin Dashboard
                  </Link>
                  </li>
                ): (<li>
                  <Link
                    to="/dashboard/profile"
                    className="nav-link bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                  >
                    Dashboard
                  </Link>
                </li>)}
                
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="nav-link bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                  >
                    SIGNUP
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        {/* Mobile Navbar */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="bg-gray-950 py-4 md:hidden">
          <ul className="space-y-4 flex flex-col items-center">
            <li>
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>

            {(token || adminEmail) ? (
              <>
               <li>
                  <button className="nav-link" onClick={logout}>
                    Logout
                  </button>
                </li>
               
                {(adminEmail && !token) ? (
                   <li>
                   <Link
                     to="/admindashboard/artist"
                     className="nav-link bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                     onClick={closeMenu}
                   >
                     Admin Dashboard
                   </Link>
                 </li>
                ):(
                  <li>
                  <Link
                    to="/dashboard/profile"
                    className="nav-link bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                    onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                </li>
                )}
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="nav-link" onClick={closeMenu}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="nav-link bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                    onClick={closeMenu}
                  >
                    SIGNUP
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
