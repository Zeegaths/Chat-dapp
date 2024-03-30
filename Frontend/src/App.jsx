// import Avatar from "./components/Avatar";
import Header from "./components/Header";
import RegisterUser from "./components/RegisterUser";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import UserProfile from "./components/UserProfile";
// import MyAvatar from "./components/MyAvatar";
import Chat from "./components/Chat";
import "./components/Header.jsx";
import "./components/RegisterUser.jsx"
// import {
//     createBrowserRouter,
//     RouterProvider,
// } from "react-router-dom";

// import ConnectPage from "./pages/ConnectPage.jsx";
// import UserRegistration from "./pages/UserRegistration.jsx";
// import Signup from "./pages/Signup.jsx";
// import MyAvatar from "./components/MyAvatar.jsx";
// import ChatPage from "./pages/ChatPage.jsx";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Signup />,
//     },

//     {
//         path: "/UserProfile",
//         element: <UserRegistration />,
//     },
//     {
//         path: "/chat",
//         element: <ChatPage/>,
//     },
// ]);



configureWeb3Modal();

function App() {


  return (
    <div>
      {/* <Header /> */}
      <Chat />
    
        {/* <RouterProvider router={router} /> */}
     </div>
  );
}
export default App;
