// import React from 'react'
import UserProfile from "./UserProfile";
import "./Chat.css"
import RegisterUser from "./RegisterUser";
import Header from "./Header";
const Chat = () => {
  return (
    <div>
      <div>The Matrix</div>
      <Header />  
      <UserProfile />  
      <RegisterUser />  
    </div>
  )
}

export default Chat
