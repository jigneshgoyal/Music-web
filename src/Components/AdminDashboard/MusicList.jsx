import {
  Card,
  Typography,
  Dialog,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { baseUrl } from "../../constant";

export default function MusicList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [showModal, setShowModal] = useState(false);
  const [musicData, setMusicData] = useState([]);
  const options = ["Released", "Pending", "Awaiting", "Requested"];
  const [formData, setFormData] = useState({});
  const [currentSong, setCurrentSong] = useState({});

  const getAllMusic = async () => {
    const result = await axios.get(
      `${baseUrl}/api/v1/admin/allMusic`
    );
    console.log(result.data.data);
    setMusicData(result.data.data);
  };
  useEffect(() => {
    getAllMusic();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, id: currentSong._id });
    console.log("Form Data :", formData);

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/admin/updateMusic`,
        { ...formData, id: currentSong._id },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("adminEmail").trim(),
          },
        }
      );
      console.log(response);
      if (response.status == 200) {
        alert("Details updated successfully");
        setOpen(false);
        setShowModal(false);
        getAllMusic();
        setCurrentSong({});
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (Object.keys(currentSong).length !== 0) {
      console.log("Getting True at First", currentSong);
      setShowModal(true);
    } else {
      console.log("Else Part");
    }
  }, [currentSong]);

  return (
    <>
      {showModal && (
        <SongModel
          song={currentSong}
          setShowModal={setShowModal}
          handleOpen={handleOpen}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          options={options}
          open={open}
          setCurrentSong={setCurrentSong}
        />
      )}
   
       <div className="bg-black text-white min-h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">
            My Music
          </h1>
         
          <table className="w-full  table-fixed text-center m-3 border border-gray-500 rounded-lg ">
            <thead>
              <tr className="bg-gray-500 text-black">
              <th className="px-16 py-1 text-left">S.No.</th>
                <th className="px-2 py-1">Name</th>
                <th className="px-2 py-1">Artist Name</th>
                <th className="px-2 py-1">Duration</th>
                <th className="px-2 py-1">View</th>

              </tr>
            </thead>
            <tbody>
              {musicData.map((song, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td className="px-16 py-1 text-left">{index + 1}</td>
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
                    <td className="px-2 py-1">{song.artist?.username}</td>
                    <td className="px-2 py-1">{song.duration} Seconds</td>

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
  const {
    song,
    setShowModal,
    handleOpen,
    handleSubmit,
    handleChange,
    options,
    open,
    setCurrentSong,
  } = props;
  return (
    <>
      <div className="flex justify-center m-0 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="bg-gray-800 text-white min-h-screen flex flex-col">
              <main className="p-8">
                <div className=" flex flex-col items-center justify-center ">
                  <img
                    src={song.coverImage}
                    alt="Music Cover"
                    className="w-40 h-40 rounded-lg shadow-lg p-3 text-center"
                  />
                  <a
                    href={song.coverImage}
                    download="music_cover.jpg"
                    className="bg-yellow-500 p-1 m-1  rounded"
                  >
                    Download Image
                  </a>
                  <audio
                    controls
                    src={song.musicFile}
                    className="rounded-lg shadow-lg w-56 h-10"
                  ></audio>
                </div>
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-bold">Artist Name:</p>
                      <p>{song.artist?.username}</p>
                    </div>
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
                      <p className="text-blue-500 underline">
                        {song.publishedLink}
                      </p>
                    </div>
                  </div>
                </div>
              </main>
              <div className="text-center">
                <button
                  className="text-center bg-red-500 p-1 px-3 mx-3 rounded-lg"
                  onClick={() => {
                    setCurrentSong({});
                    setShowModal(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="text-center bg-green-500 p-1 px-3 mx-3 rounded-lg"
                  onClick={handleOpen}
                >
                  Update
                </button>

                <Dialog
                  size="xs"
                  open={open}
                  // handler={handleOpen}
                  className="bg-transparent shadow-none"
                >
                  <Card className="mx-auto w-full max-w-[24rem]">
                    <form onSubmit={handleSubmit}>
                      <input type="hidden" name="id" value={song._id} />
                      <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                          Edit Form
                        </Typography>

                        <Typography className="-mb-2" variant="h6">
                          Update Released Date
                        </Typography>
                        <Input
                          type="date"
                          size="lg"
                          name="releaseDate"
                          onChange={handleChange}
                        />
                        <Typography className="-mb-2" variant="h6">
                          Status
                        </Typography>
                        <input
                          list="options"
                          id="dropdown"
                          size="lg"
                          className="p-3 border border-gray-200 rounded-md"
                          onChange={handleChange}
                          name="status"
                        />
                        <datalist id="options">
                          {options.map((option) => (
                            <option key={option} value={option} />
                          ))}
                        </datalist>
                        <Typography className="-mb-2" variant="h6">
                          Update Link
                        </Typography>
                        <Input
                          type="text"
                          size="lg"
                          name="publishedLink"
                          onChange={handleChange}
                        />
                      </CardBody>
                      <CardFooter className="pt-0">
                        <Button
                          variant="gradient"
                          // onClick={handleOpen}
                          type="submit"
                          fullWidth
                          className="text-black border border-gray-500 text-xl"
                        >
                          Update Details
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
