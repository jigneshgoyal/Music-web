import { PrettyChatWindow } from "react-chat-engine-pretty"; 
 
const AdminChatPage = (props) => { 
  return ( 
    <div style={{ height: "88vh", width: "85vw" }}> 
      <PrettyChatWindow 
        projectId="b4245e12-2d4e-4f58-8d1d-18b311cc49f1"
        username="admin"
        secret="123456"
        style={{ height: "100%" }} 
      /> 
    </div> 
  ); 
}; 
 
export default AdminChatPage;