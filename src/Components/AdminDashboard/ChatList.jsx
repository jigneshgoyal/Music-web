import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["S.No.", "Artist Name", "Button"];

const TABLE_ROWS = [
  {
    name: "John Michael",
  },
  {
    name: "Alexa Liras",
  },
  {
    name: "Laurent Perrier",
  },
  {
    name: "Michael Levi",
  },
  {
    name: "Richard Gran",
  },
  {
    name: "John Michael",
  },
  {
    name: "Alexa Liras",
  },
  {
    name: "Laurent Perrier",
  },
  {
    name: "Michael Levi",
  },
  {
    name: "Richard Gran",
  },
];

export default function ChatList() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Chat List
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
              {TABLE_ROWS.map(({ name }, index) => (
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
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-semibold  ">
                <span className="border border-black py-1 px-3 bg-gray-700 text-white rounded-lg">Chat</span>
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
