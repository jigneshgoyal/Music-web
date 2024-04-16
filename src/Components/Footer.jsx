import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="container flex flex-wrap justify-between items-start mx-auto px-10 sm:px-20">
        <div className="w-full sm:w-1/2 md:w-auto mb-8 sm:mb-0">
          <h3 className="font-bold text-xl mb-4">Need Help?</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">FAQs</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto mb-8 sm:mb-0">
          <h3 className="font-bold text-xl mb-4">Learn</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">About LEELOOP</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">Our Team</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">Careers</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto mb-8 sm:mb-0">
          <h3 className="font-bold text-xl mb-4">Make Money</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">Sell Your Music</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto mb-8 sm:mb-0">
          <h3 className="font-bold text-xl mb-4">Join Our Community</h3>
          <p>Connect with us </p>
        </div>
      </div>
    </footer>
  );
};