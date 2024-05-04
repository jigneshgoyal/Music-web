import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../../constant";

const TABLE_HEAD = ["S.No.", "Name", "Email", "Address"];

export default function ArtistList() {
  const [adminData, setAdminData] = useState([]);
  const getAllAdmin = async () => {
    const result = await axios.get(
      `${baseUrl}/api/v1/admin/allUsers`
    );
    console.log(result.data.data);
    setAdminData(result.data.data)
  };
  useEffect(() => {
    getAllAdmin();
  }, []);

  return (
    <div className="bg-black text-white min-h-fit">
      <div className="container mx-auto py-[35px]">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Artist List
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
              {adminData.map(({ username, email, address }, index) => (
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
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {address}
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
