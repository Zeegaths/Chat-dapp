// import Avatar from "./components/Avatar";
import Header from "./components/Header";
import RegisterUser from "./components/RegisterUser";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import UserProfile from "./components/UserProfile";
import MyAvatar from "./components/MyAvatar";
import Chat from "./components/Chat";



configureWeb3Modal();

function App() {


  return (
    <div>
     <Header />
     <UserProfile />  
     <Chat /> 
     {/* <RegisterUser />  */}
     {/* <MyAvatar /> */}
   
     </div>
  );
}
export default App;
