import { Card, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";

const TABLE_HEAD = ["S.No.", "Artist Name", "Music Title", "Button"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    title: "Music Title",
  },
  {
    name: "Alexa Liras",
    title: "Music Title",
  },
  {
    name: "Laurent Perrier",
    title: "Music Title",
  },
  {
    name: "Michael Levi",
    title: "Music Title",
  },
  {
    name: "Richard Gran",
    title: "Music Title",
  },
  {
    name: "John Michael",
    title: "Music Title",
  },
  {
    name: "Alexa Liras",
    title: "Music Title",
  },
  {
    name: "Laurent Perrier",
    title: "Music Title",
  },
  {
    name: "Michael Levi",
    title: "Music Title",
  },
  {
    name: "Richard Gran",
    title: "Music Title",
  },
];

export default function MusicList() {
  const [musicData, setMusicData] = useState([]);
  const getAllMusic = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/v1/admin/allMusic"
    );
    console.log(result.data.data);
    setMusicData(result.data.data)
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
              {musicData.map(({ artist, title }, index) => (
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
                      {artist.fullName}
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
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                <span className="border border-black py-1 px-3 bg-gray-700 text-white rounded-lg">View</span>
                </Typography>
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
