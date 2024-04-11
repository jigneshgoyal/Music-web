import React from "react";
import music from "../image/music.jpg";
import "../App.css";
const Uplaod = () => {
  return (
    <div className="relative min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source
          src="https://res.cloudinary.com/dtonbpwvj/video/upload/v1712767204/music-video_hmmcpb.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 bg-black bg-opacity-75 min-h-screen flex flex-col justify-center items-center">
        <div className="flex justify-between w-full px-4">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-red-500 rounded-full mr-4"></div>
            <h1 className="text-white text-2xl font-bold">MY UPLOADS</h1>
          </div>
          <div className="flex">
            <a
              href="#"
              className="bg-black hover:bg-red-500 border-2 border-red-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Home
            </a>
          </div>
        </div>

        <div className="bg-black rounded-lg p-8 mt-8 flex flex-col md:flex-row shadow-lg">
          <div className="mb-8 md:mr-20 md:mb-0">
            <div className="mb-4">
              <img
                src={music}
                alt="Music"
                className="w-full h-auto rounded-lg border border-gray-500"
              />
            </div>
            <div className="text-white font-bold text-lg relative mb-4">
              Upload Music
              <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
            </div>
            <div className="text-white font-bold text-lg relative mb-4">
              Upload Cover
              <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
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
              <div className="mb-4">
                <label className="text-white block mb-1">
                  Music Collecting Society (e.g. SUISA)
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="yes"
                    className="mr-2 text-red-500 focus:ring-red-500"
                  />
                  <label className="text-white mr-4" htmlFor="yes">
                    Yes
                  </label>
                  <input
                    type="checkbox"
                    id="no"
                    className="text-red-500 focus:ring-red-500"
                  />
                  <label className="text-white" htmlFor="no">
                    No
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
