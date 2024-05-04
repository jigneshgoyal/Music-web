import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { baseUrl } from "../../constant";

const Profile = () => {
  const [profileDetail, setProfileDetail] = useState({});

  const getProfileDetail = async () => {
    const response = await axios.get(
      `${baseUrl}/api/v1/user/allDetails`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token").trim(),
        },
      }
    );
    console.log(response.data.data)
    setProfileDetail(response.data.data);
  };
  useEffect(() => {
    getProfileDetail();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white py-8 mt-0">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-3xl font-bold mb-8 text-center">My Profile</h1>

        {/* Profile */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-full overflow-hidden mr-4">
                <img
                  src={profileDetail.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{profileDetail.username}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Details */}

        <div className="bg-gray-800 rounded-lg p-6 ">
          <div className="bg-gray-800 rounded-lg pb-10 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-4xl font-bold">Personal Details</h2>
              </div>
              <Link to="/dashboard/setting">
              <button className="text-white text-xl border border-green-500 py-1 px-3 rounded-md bg-green-800 hover:bg-green-950">
                Edit
              </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="mb-4">
              <label htmlFor="firstName" className="block ">
              Name:
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-gray-800 text-white focus:outline-none text-xl font-semibold mt-1"
                value={profileDetail.username}
                readOnly
              />
            </div>
           
            <div className="mb-4">
              <label htmlFor="firstName" className="block ">
                Email:
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-gray-800 text-white focus:outline-none text-xl font-semibold mt-1"
                value={profileDetail.email}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block ">
                Address :
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-gray-800 text-white focus:outline-none text-xl font-semibold mt-1"
                value={profileDetail.address}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
