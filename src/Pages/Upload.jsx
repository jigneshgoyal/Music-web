import React, { useState } from "react";
import music from "../image/music.jpg";
import "../App.css";
import axios from "axios";

const Uplaod = () => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    mainGenre: "",
    duration: "",
  });

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFile1Change = (e) => {
    setFile1(e.target.files[0]);
  };

  const handleFile2Change = (e) => {
    setFile2(e.target.files[0]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("subTitle", formData.subTitle);
    formDataToSend.append("mainGenre", formData.mainGenre);
    formDataToSend.append("duration", formData.duration);
    formDataToSend.append("musicFile", file1);
    formDataToSend.append("coverImage", file2);

    try {
      console.log(formDataToSend)
      const response = await axios.post(
        "http://localhost:8080/api/v1/music/upload",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);

    }
  };

  return (
    <div className="relative min-h-screen">
      <img
        src="https://wallpapercave.com/wp/wp7033570.jpg"
        className="backdrop-blur-xl h-screen w-screen object-cover absolute z-0 "
        alt=""
      />
      <form onSubmit={handleSubmit}>
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
              <div className="flex flex-col gap-2 items-center">
                <label>
                  <input
                    type="file"
                    hidden
                    name="musicFile"
                    accept="audio/*"
                    onChange={handleFile1Change}
                    required
                  />
                  <div className="flex w-72 h-9 px-2 p-5 flex-col bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none border ">
                    UPLOAD MUSIC
                  </div>
                </label>
                <label>
                  <input
                    type="file"
                    hidden
                    name="coverImage"
                    onChange={handleFile2Change}
                    required
                  />
                  <div className="flex w-72 h-9 px-2 p-5 flex-col bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none border">
                    COVER
                  </div>
                </label>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-3">
                <div className="mb-4">
                  <input
                    type="text"
                    value={formData.title}
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 rounded-md p-2 w-full text-white transition-colors duration-300"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={formData.subTitle}
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 rounded-md p-2 w-full text-white transition-colors duration-300"
                    placeholder="Subtitle"
                    name="subTitle"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={formData.mainGenre}
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 rounded-md p-2 w-full text-white transition-colors duration-300"
                    placeholder="Main Genre"
                    name="mainGenre"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={formData.duration}
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 rounded-md p-2 w-full text-white transition-colors duration-300"
                    placeholder="Duration"
                    name="duration"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="">
                  <input
                    type="checkbox"
                    id="yes"
                    className="mr-2 text-red-500 focus:ring-red-500"
                  />
                  <label className="text-white mr-4 text-xl" htmlFor="">
                    Upload cover by Leeloop
                  </label>
                </div>
                <div className="mb-3">
                  <input
                    type="checkbox"
                    id="no"
                    className="mr-2 text-red-500 focus:ring-red-500"
                  />
                  <label className="text-white text-xl" htmlFor="">
                    Music Mastering
                  </label>
                </div>
              </div>
              <div className="text-center mt-4">
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
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Uplaod;
