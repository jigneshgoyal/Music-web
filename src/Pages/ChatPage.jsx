import { useEffect, useState } from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import axios from "axios";
import CheckChatPage from "../Components/CheckChatPage";
import { baseUrl } from "../constant";

function ChatPage() {
  const [email, setEmail] = useState();
  const [chatvalid, setChatValid] = useState(false);
  const [id, setId] = useState()

  const getData = async () => {
    const response = await axios.get(
      `${baseUrl}/api/v1/user/allDetails`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token").trim(),
        },
      }
    );
    console.log(response);

    setChatValid(response.data.data.chat);
    setEmail(response.data.data.email);
    setId(response.data.data._id);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {chatvalid ? (
        <div className="bg-gray-300">
          <PrettyChatWindow
            projectId="b4245e12-2d4e-4f58-8d1d-18b311cc49f1"
            username={email}
            secret={email}
            height="88vh"
          />
        </div>
      ) : (
        <CheckChatPage userId ={id}/>
      )}
    </div>
  );
}

export default ChatPage;
