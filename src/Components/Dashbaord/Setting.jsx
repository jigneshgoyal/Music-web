import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../../constant";

function Setting() {
  const [data, setData] = useState({});
  const [imageSrc, setImageSrc] = useState(data.profileImage);
  const [formData, setFormData] = useState();

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
    console.log(response.data.data);
    setData(response.data.data);
    setImageSrc(response.data.data.profileImage);
  };
  useEffect(() => {
    getProfileDetail();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCoverImageChange = (e) => {
    console.log(e.target.files[0]);
    setFormData({ ...formData, profileImage: e.target.files[0] });
    const file = e.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data :", formData);

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/user/updateUserDetails`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token").trim(),
          },
        }
      );
      console.log(response);
      if (response.status == 200) {
        alert("Details updated successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const passChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const passSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data :", formData);
  };

  return (
    <div className="bg-black min-h-screen text-white py-8 mt-0">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-3xl font-bold mb-8 text-center">EDIT PROFILE</h1>

        <div className="bg-gray-800 rounded-lg p-6">
          <form onSubmit={handleSubmit} className="translate-x-16">
            <div className="flex justify-start items-center flex-col gap-4 pb-6 ">
              <img
                src={imageSrc}
                alt="NA"
                id="newImg"
                className="w-24 h-24 bg-white rounded-lg overflow-hidden mr-4 -translate-x-14"
              />
              <div>
                <label>
                  <input
                    type="file"
                    hidden
                    name="profileImage"
                    // value={data.profileImage}
                    onChange={handleCoverImageChange}
                  />
                  <div className="flex w-40 h-9 px-2 flex-col bg-yellow-500 rounded-xl -translate-x-16 shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none border ">
                    Change Image
                  </div>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8">
              <div className="mb-4">
                <label htmlFor="firstName" className="block ">
                  Name :
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder={data.username}
                  className="bg-gray-400 text-black text-xl font-semibold mt-1 px-2 py-1 rounded"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block ">
                  Address :
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder={data.address}
                  className="bg-gray-400 text-black text-xl font-semibold mt-1 px-2 py-1 rounded"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Link to="/dashboard/profile">
                  <button className="bg-red-500 text-black rounded-md px-4 py-2 my-4 mx-2">
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="bg-green-500 text-black rounded-md px-4 py-2 m-2"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>

        <h1 className="text-3xl font-bold m-8 text-center">CHANGE PASSWORD</h1>
        <div className="bg-gray-800 rounded-lg p-6">
          <form className="translate-x-16" onSubmit={passSubmit}>
            <div className="grid grid-cols-2 gap-x-8 mt-5">
              <div className="mb-4">
                <label htmlFor="firstName" className="block ">
                  Old Password :
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  placeholder="*********"
                  className="bg-gray-400 text-black text-xl font-semibold mt-1 px-2 py-1 rounded"
                  onChange={passChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block ">
                  New Password :
                </label>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="*********"
                  className="bg-gray-400 text-black text-xl font-semibold mt-1 px-2 py-1 rounded"
                  onChange={passChange}
                />
              </div>

              <div>
                <Link to="/dashboard/profile">
                  <button className="bg-red-500 text-black rounded-md px-4 py-2 my-4 mx-2">
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="bg-green-500 text-black rounded-md px-4 py-2 m-2"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Setting;
