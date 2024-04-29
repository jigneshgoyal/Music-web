import { Card, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import {
  Button,
  Dialog,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
} from "@material-tailwind/react";

const TABLE_HEAD = ["S.No.", "Artist Name", "Music Title", "Button"];

export default function MusicList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [showModal, setShowModal] = useState(false);
  const [musicData, setMusicData] = useState([]);
  const options = ["Released", "Pending", "Await", "Requested"];
  const [formData, setFormData] = useState();

  const getAllMusic = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/v1/admin/allMusic"
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
    console.log("Form Data :", formData);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/admin/updateMusic",
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

  return (
    <div className="bg-black text-white min-h-fit">
      <div className="container mx-auto py-[35px]">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Music List
        </h1>

        <Card className="h-[500px] w-full overflow-scroll bg-gray-800">
          <table className="w-full min-w-max table-auto text-center text-white">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 "
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none "
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {musicData.map((song, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {song.artist.username}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {song.title}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <>
                      <button
                        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(true)}
                      >
                        View
                      </button>
                      {showModal ? (
                        <>
                          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="bg-black text-white min-h-screen flex flex-col">
                                  <main className="p-8">
                                    <div className="p-3 flex flex-col items-center justify-center ">
                                      <img
                                        src={song.coverImage}
                                        alt="Music Cover"
                                        className="w-40 h-40 rounded-lg shadow-lg p-3 text-center"
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
                                          <p className="font-bold">
                                            Artist Name:
                                          </p>
                                          <p>{song.artist.username}</p>
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
                                          <p className="font-bold">
                                            Music Mastering:
                                          </p>
                                          <p>{String(song.musicMastering)}</p>
                                        </div>
                                        <div>
                                          <p className="font-bold">
                                            Cover Image by LeeLoop:
                                          </p>
                                          <p>
                                            {String(song.coverImageByLeeLoop)}
                                          </p>
                                        </div>
                                        <div>
                                          <p className="font-bold">Status:</p>
                                          <p className="text-green-500">
                                            {status}
                                          </p>
                                        </div>
                                        <div>
                                          <p className="font-bold">
                                            Release Date:
                                          </p>
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
                                  <div className="">
                                    <button
                                      className="text-center bg-red-500 p-1 px-3 mx-3 rounded-lg"
                                      onClick={() => {
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
                                          <CardBody className="flex flex-col gap-4">
                                            <Typography
                                              variant="h4"
                                              color="blue-gray"
                                            >
                                              Edit Form
                                            </Typography>

                                            <Typography
                                              className="-mb-2"
                                              variant="h6"
                                            >
                                              Update Released Date
                                            </Typography>
                                            <Input
                                              type="date"
                                              size="lg"
                                              name="releaseDate"
                                              onChange={handleChange}
                                            />
                                            <Typography
                                              className="-mb-2"
                                              variant="h6"
                                            >
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
                                                <option
                                                  key={option}
                                                  value={option}
                                                />
                                              ))}
                                            </datalist>
                                            <Typography
                                              className="-mb-2"
                                              variant="h6"
                                            >
                                              Update Link
                                            </Typography>
                                            <Input
                                              type="text"
                                              size="lg"
                                              name="link"
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
                      ) : null}
                    </>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
