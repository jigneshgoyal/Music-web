import { useEffect, useState } from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import axios from "axios";

function ChatPage() {
  const [username, setUsername] = useState()
  const [secret, setSecret] = useState()

  const getData = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/v1/chat/",
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": localStorage.getItem('token').trim()
        },
      }
    )
    console.log(response.data.data.username)
    setUsername(response.data.data.username)
    console.log(response.data.data.secret)
    setSecret(response.data.data.secret)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="bg-gray-300">
      <PrettyChatWindow
        projectID="b4245e12-2d4e-4f58-8d1d-18b311cc49f1"
        userName= {username}
        userSecret= {secret}  
        // Render Custom Components
        height="88vh"
        />
    </div>
  );
}

export default ChatPage;
