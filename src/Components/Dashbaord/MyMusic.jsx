import React, { useState } from "react";

const MyMusic = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [music, setMusic] = useState([
    {
      name: "Song 1",
      title: "A wonderful song",
      duration: "3:45",
      status: "Uploaded",
    },
    {
      name: "Song 2",
      title: "A wonderful song",
      duration: "4:20",
      status: "Uploading",
    },
    {
      name: "Song 3",
      title: "A wonderful song",
      duration: "2:55",
      status: "Uploaded",
    },
    {
      name: "Song 4",
      title: "A wonderful song",
      duration: "5:10",
      status: "Uploading",
    },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOptionsClick = (index) => {
    console.log(`Clicked options for song ${music[index].name}`);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          My Music
        </h1>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mr-4 rounded-md ${
              activeTab === "all"
                ? "bg-slate-500 text-black"
                : "bg-transparent hover:bg-slate-800 hover:text-white"
            }`}
            onClick={() => handleTabClick("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 mr-4 rounded-md ${
              activeTab === "uploading"
                ? "bg-slate-500 text-black"
                : "bg-transparent hover:bg-slate-800 hover:text-white"
            }`}
            onClick={() => handleTabClick("uploading")}
          >
            Uploading
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "uploaded"
                ? "bg-slate-500 text-black"
                : "bg-transparent hover:bg-slate-800 hover:text-white   "
            }`}
            onClick={() => handleTabClick("uploaded")}
          >
            Uploaded
          </button>
        </div>
        <table className="w-full  table-fixed text-center m-3 border border-gray-500 rounded-lg ">
          <thead>
            <tr className="bg-gray-500 text-black">
              <th className="px-2 py-1">Name</th>
              <th className="px-2 py-1">Duration</th>
              <th className="px-2 py-1">Status</th>
              <th className="px-2 py-1">Edit</th>
              <th className="px-2 py-1">Delete</th>
            </tr>
          </thead>
          <tbody>
            {music
              .filter((song) => {
                if (activeTab === "all") {
                  return true;
                } else {
                  return song.status.toLowerCase() === activeTab;
                }
              })
              .map((song, index) => (
                <tr key={index} className="border-b border-gray-600">
                  <td className="px-2 py-1">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white rounded-md overflow-hidden mr-4">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">{song.name}</h2>
                        <p>{song.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-1">{song.duration}</td>
                  <td className="px-2 py-1">{song.status}</td>
                  <td className="px-2 py-1 relative">
                    <button className="text-white text-xl border border-green-500 py-1 px-3 rounded-md bg-green-800 hover:bg-green-950">
                      Edit
                    </button>
                    {/* Add your edit and delete options here */}
                  </td>
                  <td className="px-2 py-1 relative">
                    <button className="text-white text-xl border border-red-500 py-1 px-3 rounded-md bg-red-800 hover:bg-red-950">
                      Delete
                    </button>
                    {/* Add your edit and delete options here */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMusic;
