import React, { useEffect } from "react";
// import { useNavigator } from "react-router-dom";
import leeloop from "../image/leeloop-connect.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../constant";

function CheckChatPage(userId) {
  const navigate = useNavigate();
  const chatSignup = async () => {
    console.log(userId)
    const response = await axios.post(
      `/${baseUrl}api/v1/chat/signup`,
      // "http://localhost:8080/api/v1/chat/signup",
      userId,
      // {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //     Authorization: localStorage.getItem("token"),
      //   },
      // }
    );
    console.log(response);
    alert("Successfully Registered")
    navigate("/")

  };
  useEffect(() => {
    console.log(localStorage.getItem("token"));
  });

  return (
    <div className="bg-[#141414]">
      <div className="text-transparent bg-clip-text font-semibold text-5xl flex text-center justify-center  md:p-10">
        <img src={leeloop} alt="Your Image" className="h-36" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center p-2 md:gap-8">
        <div className="md:w-3/5 lg:w-2/5">
          <img
            className="opacity-90"
            src="https://www.tunecore.com/wp-content/uploads/sites/12/2022/06/DavidCorrey.jpeg"
            alt=""
          />
        </div>
        <div className="text-transparent bg-clip-text font-semibold text-3xl">
          <button
            className="nav-link bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={chatSignup}
          >
            Connect Admin
          </button>
          <span className="text-white text-3xl md:text-6xl">&nbsp;at just</span>
          <div className="bg-clip-text bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] animate-gradient-text text-xl md:text-4xl md:p-4">
            &nbsp;5 CHF
          </div>
          <div className="">
            <ul className="space-y-5 my-7">
              <li className="flex items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>

                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-2xl">
                  Live CHAT 1:1. (not KI/AI)
                </span>
              </li>
              <li className="flex justify-start items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>

                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-2xl">
                  Instant Music Recommendations
                </span>
              </li>
              <li className="flex justify-start items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>

                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-2xl">
                  Distribution to plan
                </span>
              </li>
              <li className="flex justify-start items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>

                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-2xl">
                  Sale reports
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckChatPage;
