import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["S.No.", "Name", "Email"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    email: "abc@gmail.com",
  },
  {
    name: "Alexa Liras",
    email: "abc@gmail.com",
  },
  {
    name: "Laurent Perrier",
    email: "abc@gmail.com",
  },
  {
    name: "Michael Levi",
    email: "abc@gmail.com",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
  },
  {
    name: "John Michael",
    email: "abc@gmail.com",
  },
  {
    name: "Alexa Liras",
    email: "abc@gmail.com",
  },
  {
    name: "Laurent Perrier",
    email: "abc@gmail.com",
  },
  {
    name: "Michael Levi",
    email: "abc@gmail.com",
  },
  {
    name: "Richard Gran",
    email: "abc@gmail.com",
  },
];

export default function ArtistList() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Artist List
        </h1>

        <Card className="h-[500px] w-full overflow-scroll bg-slate-400">
          <table className="w-full min-w-max table-auto text-center text-black">
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
              {TABLE_ROWS.map(({ name, email }, index) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
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
                      {name}
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
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
