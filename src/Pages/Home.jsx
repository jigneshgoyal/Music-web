import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import leeloop from '../image/leeloop-connect.png'

function Home() {
  const navigate = useNavigate();

  const loginUser = () => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (!token) {
      navigate("/login");
    } else {
      navigate("/upload");
    }
  };
  return (
    <>
      {/* First part */}
      <div className="relative min-h-screen ">
        <img
          src="https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?cs=srgb&dl=pexels-daniel-reche-3721941.jpg&fm=jpg"
          className="backdrop-blur-xl h-screen w-screen object-cover absolute z-0 opacity-90 "
          alt=""
        />
        <div className="flex flex-col items-center justify-center h-screen bg- bg-cover bg-center relative z-10 mx-14">
          <div className="text-transparent bg-clip-text font-semibold text-4xl md:text-6xl text-center">
            <span className="text-white">LEELOOP a best way to sell your</span>
            <span className="bg-clip-text bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] animate-gradient-text">
              &nbsp;Songs worldwide and become popular fans
            </span>
          </div>
          <div className="rounded-full bg-gradient-to-r via-purple-500 from-indigo-500 to-pink-500 ... p-[2px] hover:scale-110 mr-3 mt-7">
            <button
              onClick={loginUser}
              className="rounded-full font-bold bg-slate-700 px-8 py-2 text-white text-2xl"
            >
              Upload
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#141414]">
        <div className="text-transparent bg-clip-text font-semibold text-5xl flex text-center justify-center  md:p-10">
        <img src={leeloop} alt="Your Image" className="h-36"/>
            {/* <span className="bg-clip-text bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] animate-gradient-text md:text-7xl">
              Connect Leeloop
            </span> */}
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
            <span className="text-white text-3xl md:text-6xl">
              Connect Admin at just
            </span>
            <div className="bg-clip-text bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] animate-gradient-text text-xl md:text-4xl md:p-4">
              5 CHF
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

      {/* Third part */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-700 pt-10">
        <div className="text-transparent bg-clip-text font-semibold text-5xl md:text-7xl text-center">
          <span className="bg-clip-text bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] animate-gradient-text">
            Our services
          </span>
        </div>

        <div className=" p-16 sm:flex justify-evenly">
          <div className=" w-fit h-fit rounded-lg bg-gradient-to-r via-purple-500 from-indigo-500 to-pink-500 ... p-[3px]">
            <div className="w-full max-w-sm p-4 bg-slate-800 rounded-lg shadow sm:p-10">
              <div className="text-transparent bg-clip-text font-semibold text-3xl md:text-5xl text-center pb-6">
                <span className="bg-clip-text bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] animate-gradient-text">
                  Music Mastering
                </span>
              </div>

              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-5xl font-extrabold tracking-tight">
                  8{" "}
                </span>
                <span className="text-3xl font-extrabold tracking-tight">
                 CHF
                </span>
                <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /music
                </span>
              </div>
              <ul role="list" className="space-y-5 my-7">
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
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Loudness
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Swiss Standards
                  </span>
                </li>
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
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Sharpness
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className=" w-fit h-fit rounded-lg bg-gradient-to-r via-purple-500 from-indigo-500 to-pink-500 ... p-[3px]">
            <div className="w-full max-w-sm p-4 bg-slate-800 rounded-lg shadow sm:p-10">
              <div className="text-transparent bg-clip-text font-semibold text-3xl md:text-5xl text-center pb-6">
                <span className="bg-clip-text bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] animate-gradient-text">
                  Leeloop Cover Art
                </span>
              </div>

              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-5xl font-extrabold tracking-tight">
                  5
                </span>
                <span className="text-3xl font-extrabold tracking-tight">
                 CHF
                </span>
                <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /Cover Image
                </span>
              </div>
              <ul role="list" className="space-y-5 my-7">
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
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    4000x4000
                  </span>
                </li>
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    For Digital Distribution
                  </span>
                </li>
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
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    No Homemade Cover
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
