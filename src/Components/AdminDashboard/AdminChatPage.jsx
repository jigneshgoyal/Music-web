import { PrettyChatWindow } from "react-chat-engine-pretty"; 
 
const AdminChatPage = (props) => { 
  return ( 
    <div style={{ height: "88vh", width: "85vw" }}> 
      <PrettyChatWindow 
       projectID='ccea5a6a-6bcf-450f-bb8d-47323ab25244'
       userName='admin'
       userSecret='123456'
        style={{ height: "100%" }} 
      /> 
    </div> 
  ); 
}; 
 
export default AdminChatPage;