import React, { useState } from "react";
import music from "../image/music.jpg";
import "../App.css";
import axios from "axios";
import { baseUrl } from "../constant";

const Upload = () => {
  const [imageSrc, setImageSrc] = useState(music);
  const [isLeeloopChecked, setIsLeeloopChecked] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading
  const [agreedToTerms, setAgreedToTerms] = useState(false); // State to track if user agreed to terms

  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    mainGenre: "",
    duration: "",
    musicMastering: false,
    coverImageByLeeLoop: false,
  });

  const [musicFile, setMusicFile] = useState(null);
  const [musicUploaded, setMusicUploaded] = useState(false); // State to track if music is uploaded

  const handleMusicFileChange = (e) => {
    setMusicFile(e.target.files[0]);
    setFormData({ ...formData, musicFile: e.target.files[0] });
    setMusicUploaded(true); // Set musicUploaded to true when a music file is selected
  };

  const handleCoverImageChange = (e) => {
    setFormData({ ...formData, coverImage: e.target.files[0] });
    const file = e.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "coverImageByLeeLoop" || e.target.name === "musicMastering") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
      if (e.target.name === "coverImageByLeeLoop") {
        setIsLeeloopChecked(e.target.checked);
      }
    } else if (e.target.name === "termsAgreement") {
      setAgreedToTerms(e.target.checked); // Update agreedToTerms state based on checkbox value
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/music/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token").trim(),
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        alert("Music uploaded successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFormData({
        title: "",
        subTitle: "",
        mainGenre: "",
        duration: "",
        musicMastering: false,
        coverImageByLeeLoop: false,
      });
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <div className={`relative min-h-screen ${loading ? "opacity-50 pointer-events-none" : ""}`}>
      {loading && (
        <div className="fixed inset-0 bg-black opacity-50 z-50 flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-24 w-24"></div>
        </div>
      )}
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
                  src={imageSrc}
                  alt="Music"
                  className="w-[360px] h-[300px] rounded-lg border border-gray-500"
                />
              </div>
              <div className="flex flex-col gap-2 items-center">
                <label>
                  <input
                    type="file"
                    hidden
                    name="musicFile"
                    accept="audio/*"
                    onChange={handleMusicFileChange}
                    required
                  />
                  <div className="flex w-72 h-9 px-2 p-5 flex-col bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none border ">
                    {musicUploaded ? "MUSIC UPLOADED" : "UPLOAD MUSIC"}
                  </div>
                </label>
                <label>
                  <input
                    type="file"
                    hidden
                    name="coverImage"
                    onChange={handleCoverImageChange}
                    disabled={isLeeloopChecked}
                  />
                  <div
                    className={`flex w-72 h-9 px-2 p-5 flex-col bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none border ${
                      isLeeloopChecked ? "opacity-30 cursor-not-allowed" : ""
                    }`}
                  >
                    COVER IMAGE
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
                <div>
                  <input
                    type="checkbox"
                    name="coverImageByLeeLoop"
                    value={formData.coverImageByLeeLoop}
                    className="mr-2 text-red-500 focus:ring-red-500"
                    checked={isLeeloopChecked}
                    onChange={handleChange}
                  />
                  <label className="text-white" htmlFor="">
                    Upload cover by Leeloop at 5 CHF
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="musicMastering"
                    value={formData.musicMastering}
                    className="mr-2 text-red-500 focus:ring-red-500"
                    onChange={handleChange}
                  />
                  <label className="text-white" htmlFor="">
                    Music Mastering at 5 CHF
                  </label>
                </div>
                <div className="mb-3">
                  <input
                    type="checkbox"
                    name="termsAgreement"
                    className="mr-2 text-red-500 focus:ring-red-500"
                    checked={agreedToTerms}
                    onChange={handleChange}
                  />
                  <label className="text-white" htmlFor="">
                    I agree LeeLoop Media <a href="/termsAndCondition" className="text-black">-General terms</a>
                  </label>
                </div>
              </div>
              <div className="text-center mt-4">
                <button
                  className={`bg-black border-2 border-red-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${
                    !musicFile || !agreedToTerms ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!musicFile || !agreedToTerms}
                >
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

export default Upload;
