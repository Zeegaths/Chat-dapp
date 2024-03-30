import Header from "../components/Header";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ConnectPage = () => {
  const { isConnected } = useWeb3ModalAccount();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not connected
    if (!isConnected) {
      navigate("/");
    }
  }, [isConnected, navigate]);

  // Render only if not connected
  if (!isConnected) {
    return (
      <div>        
        <Header />
        <p>Connecting to wallet...</p>
      </div>
    );
  }

  // Return null if connected, navigation will handle redirection
  return null;
};

export default ConnectPage;
