import React from "react";

const Profile = () => {
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Jignesh Goyal</h2>
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
              <button className="text-white text-xl border border-green-500 py-1 px-3 rounded-md bg-green-800 hover:bg-green-950">
                Edit
              </button >
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
                className="bg-gray-800 text-white focus:outline-none text-xl font-semibold mt-1"
                value="Jignesh"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block ">
                Last Name:
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-gray-800 text-white focus:outline-none text-xl font-semibold mt-1"
                value="Goyal"
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
                value="abc@gmail.com"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block ">
                Mobile No.:
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-gray-800 text-white focus:outline-none text-xl font-semibold mt-1"
                value="+91 9876543210"
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
