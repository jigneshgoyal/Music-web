import { Card, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../../constant";

const TABLE_HEAD = ["S.No.", "Artist Name", "Button"];

export default function ChatList() {
  const [artistData, setArtistData] = useState([]);
  const getAllAdmin = async () => {
    const result = await axios.get(
      `${baseUrl}/api/v1/admin/allUsers`
    );
    console.log(result.data.data);
    setArtistData(result.data.data);
  };
  useEffect(() => {
    getAllAdmin();
  }, []);
  return (
    <div className="bg-black text-white min-h-fit">
      <div className="container mx-auto py-[35px]">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Chat List
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
              {artistData.map(({ username }, index) => (
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
                      {username}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Typography
                      as="span"
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      <Link to="adminleeloop-connect">
                        <span className="border border-black py-1 px-3 bg-gray-700 text-white rounded-lg">
                          Chat
                        </span>
                      </Link>
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
