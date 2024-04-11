import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen ">
      <img src="https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?cs=srgb&dl=pexels-daniel-reche-3721941.jpg&fm=jpg" className="backdrop-blur-xl h-screen w-screen object-cover absolute z-0 opacity-90 " alt="" />
    <div className="flex flex-col items-center justify-center h-screen bg- bg-cover bg-center relative z-10 mx-14">
      <div className="text-transparent bg-clip-text font-semibold text-4xl md:text-6xl text-center">
        <span className="text-white">LEELOOP a best way to sell your</span>
        <span className="bg-clip-text bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] animate-gradient-text">
          &nbsp;Songs worldwide and become popular fans
        </span>
      </div>
      <div className="rounded-full bg-gradient-to-r via-purple-500 from-indigo-500 to-pink-500 ... p-[2px] hover:scale-110 mr-3 mt-7">
      <Link to={"/upload"} ><button className="rounded-full font-bold bg-slate-700 px-8 py-2 text-white text-2xl">Upload</button></Link>
          </div>
    </div>
    </div>
  );
}

export default Home;
