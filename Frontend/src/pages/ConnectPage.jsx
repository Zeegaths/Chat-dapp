import Header from "../components/Header";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ConnectPage = () => {
  const { isConnected } = useWeb3ModalAccount();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect only if connected
    if (isConnected) {
      navigate("/signUp");
    }
  }, [isConnected, navigate]);

  // Do not render anything if not connected
  if (!isConnected) {
    return (
      <div>        
        <Header />
        <p>Connecting to wallet...</p>
      </div>
    );
  }

  // Return null if connected, as the redirect will handle navigation
  return null;
};

export default ConnectPage;
