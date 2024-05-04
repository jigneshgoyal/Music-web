import { useEffect, useState } from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import axios from "axios";
import CheckChatPage from "../Components/CheckChatPage";

function ChatPage() {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [chatvalid, setChatValid] = useState(false);

  const getChatData = async () => {
    const response = await axios.post("http://localhost:8080/api/v1/chat/login", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token").trim(),
      },
    });
    console.log(response)
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
            projectID="ccea5a6a-6bcf-450f-bb8d-47323ab25244"
            userName="jignesh"
            userSecret="123456"
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
