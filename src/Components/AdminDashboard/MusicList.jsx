import { Card, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";

const TABLE_HEAD = ["S.No.", "Artist Name", "Music Title", "Button"];

const data = {
  coverImage:
    "https://static.vecteezy.com/system/resources/thumbnails/000/435/728/small/1404.i033.096.S.m003.c10.Headphones_grunge.jpg",
  musicFile: "music_file.mp3",
  artistName: "John Doe",
  title: "Amazing Song",
  subtitle: "The Best Hits",
  genre: "Pop",
  duration: "3:45",
  releaseDate: "2023-04-20",
  link: "https://example.com/amazing-song",
};

export default function MusicList() {
  const [showModal, setShowModal] = useState(false);
  const [musicData, setMusicData] = useState([]);
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
              {musicData.map(({ artist, title, coverImage, duration, mainGenre, musicFile, subTitle, coverImageByLeeLoop }, index) => (
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
                      {artist.username}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {title}
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
                                        src={coverImage}
                                        alt="Music Cover"
                                        className="w-40 h-40 rounded-lg shadow-lg p-3 text-center"
                                      />
                                      <audio
                                        controls
                                        src={musicFile}
                                        className="rounded-lg shadow-lg w-56 h-10"
                                      ></audio>
                                    </div>
                                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="font-bold">
                                            Artist Name:
                                          </p>
                                          <p>{artist.username}</p>
                                        </div>
                                        <div>
                                          <p className="font-bold">Title:</p>
                                          <p>{title}</p>
                                        </div>
                                        <div>
                                          <p className="font-bold">Subtitle:</p>
                                          <p>{subTitle}</p>
                                        </div>
                                        <div>
                                          <p className="font-bold">Genre:</p>
                                          <p>{mainGenre}</p>
                                        </div>
                                        <div>
                                          <p className="font-bold">Duration:</p>
                                          <p>{duration}</p>
                                        </div>
                                        <div>
                                          <p className="font-bold">
                                            Music Mastering:
                                          </p>
                                          <p>Applied</p>
                                        </div>
                                        <div>
                                          <p className="font-bold">
                                            Cover Image by LeeLoop:
                                          </p>
                                          <p>{coverImageByLeeLoop}</p>
                                        </div>
                                        <div>
                                          <p className="font-bold">Status:</p>
                                          <p className="text-green-500">
                                            Released
                                          </p>
                                        </div>
                                        <div>
                                          <p className="font-bold">
                                            Release Date:
                                          </p>
                                          <p>{data.releaseDate}</p>
                                        </div>
                                        <div>
                                          <p className="font-bold">Link:</p>
                                          <a
                                            href={data.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 underline"
                                          >
                                            {data.link}
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </main>
                                  <div className="">
                                  <button
                                  className="text-center bg-red-500 p-1 px-3 rounded-lg"
                                  onClick={() => {setShowModal(false)}}
                                  >
                                    Cancel
                                  </button>
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
