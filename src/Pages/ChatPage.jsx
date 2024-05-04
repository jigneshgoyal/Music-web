import { useEffect, useState } from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import axios from "axios";
import CheckChatPage from "../Components/CheckChatPage";

function ChatPage() {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [chatvalid, setChatValid] = useState(false);

  const getChatData = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/chat/", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token").trim(),
      },
    });
    setUsername(response.data.data.username);
    setSecret(response.data.data.secret);
  };

  const getData = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/v1/user/allDetails",
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token").trim(),
        },
      }
    );
    console.log(response);

    setChatValid(response.data.data.chat);
  };

  useEffect(() => {
    getChatData();
    getData();
  }, []);

  return (
    <div>
      {chatvalid ? (
        <div className="bg-gray-300">
          <PrettyChatWindow
            projectID="b4245e12-2d4e-4f58-8d1d-18b311cc49f1"
            userName={username}
            userSecret={username}
            // Render Custom Components
            height="88vh"
          />
        </div>
      ) : (
        <CheckChatPage />
      )}
    </div>
  );
}

export default ChatPage;
