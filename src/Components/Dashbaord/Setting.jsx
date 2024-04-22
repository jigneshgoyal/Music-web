import React from "react";
import { useState } from "react";

function Setting() {
  const [imageSrc, setImageSrc] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png");

  const imageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-black min-h-screen text-white py-8 mt-0">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-3xl font-bold mb-8 text-center">EDIT PROFILE</h1>

        <div className="bg-gray-800 rounded-lg p-6">
          <form className="translate-x-16"> 
            <div className="flex justify-start items-center flex-col gap-4 pb-6 ">
              <img
                src={imageSrc }
                alt=""
                id="newImg"
                className="w-24 h-24 bg-white rounded-full overflow-hidden mr-4 -translate-x-14"
              />
              <div>
                <label>
                  <input
                    type="file"
                    hidden
                    name="musicFile"
                    // accept="audio/*"
                    onChange={imageChange}
                    required
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
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-gray-400 text-black text-xl font-semibold mt-1 px-2 py-1 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block ">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-gray-400 text-black text-xl font-semibold mt-1 px-2 py-1 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block ">
                  Email:
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-gray-400 text-black text-xl font-semibold mt-1 px-2 py-1 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block ">
                  Mobile No.:
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-gray-400 text-black text-xl font-semibold mt-1 px-2 py-1 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block ">
                  Password :
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-gray-400 text-black text-xl font-semibold mt-1 px-2 py-1 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block ">
                  Confirm Password :
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-gray-400 text-black text-xl font-semibold mt-1 px-2 py-1 rounded"
                />
              </div>
              <div>
                <button className="bg-red-500 text-black rounded-md px-4 py-2 m-2">
                  Cancel
                </button>
                <button className="bg-green-500 text-black rounded-md px-4 py-2 m-2">
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
