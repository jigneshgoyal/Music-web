import React from "react";
import music from "../image/music.jpg";
import "../App.css";
const Uplaod = () => {
  return (
    <div className="relative min-h-screen">
      <img src="https://wallpapercave.com/wp/wp7033570.jpg" className="backdrop-blur-xl h-screen w-screen object-cover absolute z-0 " alt="" />

      <div className="relative z-10 bg-black bg-opacity-75 min-h-screen flex flex-col justify-center items-center">
        <div className="bg-gradient-to-r from-orange-200 to-fuchsia-400 rounded-lg p-8 mt-8 flex flex-col md:flex-row shadow-lg">
          <div className="mb-8 md:mr-20 md:mb-0">
            <div className="mb-4">
              <img
                src={music}
                alt="Music"
                className="w-full h-auto rounded-lg border border-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2">
            <button className="border bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...  rounded-full text-white p-2">
         Upload music
            </button>
            <button className="border bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... bg-red-600 rounded-full text-white p-2">
            Upload cover
            </button>
            </div>
          </div>
          <div className="flex-1">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="title"
                  className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 rounded-md p-2 w-full text-white transition-colors duration-300"
                  placeholder="Title"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="subtitle"
                  className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 rounded-md p-2 w-full text-white transition-colors duration-300"
                  placeholder="Subtitle"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="mainGenre"
                  className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 rounded-md p-2 w-full text-white transition-colors duration-300"
                  placeholder="Main Genre"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="duration"
                  className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 rounded-md p-2 w-full text-white transition-colors duration-300"
                  placeholder="Duration"
                />
              </div>
              <div className="mb-4">
                <label className="text-white block mb-1">Release Date</label>
                <input
                  type="date"
                  id="releaseDate"
                  className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 rounded-md p-2 w-full text-white transition-colors duration-300"
                  placeholder="Proposed Release Date"
                />
              </div>
              <div>
              <div className="">
                  <input
                    type="checkbox"
                    id="yes"
                    className="mr-2 text-red-500 focus:ring-red-500"
                  />
                  <label className="text-white mr-4" htmlFor="">
                    Upload cover by Leeloop
                  </label>
                  </div>
                  <div className="mb-3">
                  <input
                    type="checkbox"
                    id="no"
                    className="mr-2 text-red-500 focus:ring-red-500"
                  />
                  <label className="text-white" htmlFor="">
                    Music Mastering
                  </label>
                  </div>
              </div>
              <button className="bg-black border-2 border-red-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                <svg
                  className="inline-block h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                </svg>
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uplaod;
