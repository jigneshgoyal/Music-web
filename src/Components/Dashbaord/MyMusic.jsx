import React, { useState, useNavigator } from "react";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../constant";

export default function MyMusic() {
  const [activeTab, setActiveTab] = useState("all");
  const [music, setMusic] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentSong, setCurrentSong] = useState({});
  const navigate = useNavigator;

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
    console.log(response.data.data.uploadedMusic);
    setMusic(response.data.data.uploadedMusic);
  };
  useEffect(() => {
    getProfileDetail();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (Object.keys(currentSong).length !== 0) {
      setShowModal(true);
    }
  }, [currentSong]);

  const confirmAction = async (id) => {
    let confirmAction = confirm(
      "Are you sure to delete this song? You have to pay 120 CHF for that"
    );
    console.log("object")
    if (confirmAction) {
      console.log("object 2" )
      console.log(id)
      try {
        const response = await axios.delete(
          `http://localhost:8080/api/v1/music/deleteById/${id}`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: localStorage.getItem("token").trim(),
            },
          }
        );
        console.log(response);
        if (response.status == 200) {
          alert("Music Deleted Successfully");
        }
      } catch (error) {
        alert("Something went wrong");
      }
    } else {
      // alert("Action canceled");
      navigate("dashboard/mymusic");
    }
  };

  return (
    <>
      {showModal && (
        <SongModel song={currentSong} setShowModal={setShowModal} />
      )}
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
                activeTab === "released"
                  ? "bg-slate-500 text-black"
                  : "bg-transparent hover:bg-slate-800 hover:text-white"
              }`}
              onClick={() => handleTabClick("released")}
            >
              Released
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "awaiting"
                  ? "bg-slate-500 text-black"
                  : "bg-transparent hover:bg-slate-800 hover:text-white   "
              }`}
              onClick={() => handleTabClick("awaiting")}
            >
              Awaiting
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "pending"
                  ? "bg-slate-500 text-black"
                  : "bg-transparent hover:bg-slate-800 hover:text-white   "
              }`}
              onClick={() => handleTabClick("pending")}
            >
              Pending
            </button>
          </div>
          <table className="w-full  table-fixed text-center m-3 border border-gray-500 rounded-lg ">
            <thead>
              <tr className="bg-gray-500 text-black">
                <th className="px-2 py-1">Name</th>
                <th className="px-2 py-1">Duration</th>
                <th className="px-2 py-1">Status</th>
                <th className="px-2 py-1">View</th>
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
                            src={song.coverImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">
                            {song.title}
                          </h2>
                          <p>{song.subTitle}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-1">{song.duration} Seconds</td>
                    <td className="px-2 py-1">{song.status}</td>
                    <td className="p-4">
                      <>
                        <button
                          className="bg-blue-200 text-black active:bg-blue-500 
                        font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => {
                            setCurrentSong(song);
                          }}
                        >
                          View
                        </button>
                      </>
                    </td>
                    <td className="p-4">
                      <>
                        <button
                          className="bg-red-500 text-black active:bg-blue-500 
                        font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => {
                            confirmAction(song._id);
                          }}
                        >
                          Delete
                        </button>
                      </>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const SongModel = (props) => {
  const { song, setShowModal } = props;
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto  max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="bg-gray-800 text-white min-h-screen flex flex-col">
            <main className="p-8">
              <div className="p-3 flex flex-col items-center justify-center ">
                <img
                  src={song.coverImage}
                  alt="Music Cover"
                  className="w-48 h-48 rounded-lg shadow-lg p-3 text-center"
                />
                <audio
                  controls
                  src={song.musicFile}
                  className="rounded-lg shadow-lg w-56 h-10"
                ></audio>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold">Title:</p>
                    <p>{song.title}</p>
                  </div>
                  <div>
                    <p className="font-bold">Subtitle:</p>
                    <p>{song.subTitle}</p>
                  </div>
                  <div>
                    <p className="font-bold">Genre:</p>
                    <p>{song.mainGenre}</p>
                  </div>
                  <div>
                    <p className="font-bold">Duration:</p>
                    <p>{song.duration}</p>
                  </div>
                  <div>
                    <p className="font-bold">Music Mastering:</p>
                    <p>{String(song.musicMastering)}</p>
                  </div>
                  <div>
                    <p className="font-bold">Cover Image by LeeLoop:</p>
                    <p>{String(song.coverImageByLeeLoop)}</p>
                  </div>
                  <div>
                    <p className="font-bold">Status:</p>
                    <p className="text-green-500">{song.status}</p>
                  </div>
                  <div>
                    <p className="font-bold">Release Date:</p>
                    <p>{song.releaseDate}</p>
                  </div>
                  <div>
                    <p className="font-bold">Link:</p>
                    <p>{song.publishedLink}</p>
                  </div>
                </div>
              </div>
            </main>
            <div className="text-center">
              <button
                className="text-center bg-red-500 p-1 px-3 rounded-lg"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
