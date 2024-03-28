// import Avatar from "./components/Avatar";
import Header from "./components/Header";
import RegisterUser from "./components/RegisterUser";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import UserProfile from "./components/UserProfile";
import MyAvatar from "./components/MyAvatar";



configureWeb3Modal();

function App() {


  return (
    <div>
     <Header />
     <UserProfile />     
     <MyAvatar /> 
     <RegisterUser/>  
    </div>
  );
}
export default App;
