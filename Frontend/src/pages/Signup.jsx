import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useRegisterUser from '../hooks/useRegisterUser';
import Header from '../components/Header';
import ConnectPage from './ConnectPage';
import RegisterUser from "../components/RegisterUser";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const Signup = () => {
  const navigate = useNavigate();
  const { isConnected } = useWeb3ModalAccount(); // Get the isConnected status
  const { success } = useRegisterUser(); // Use the success status from the useRegisterUser hook

  useEffect(() => {
    // If the user is already connected or the registration was successful,
    // navigate to /chat
    if (isConnected || success) {
      navigate('/chat');
    }
  }, [isConnected, success, navigate]);

  // If not connected or already registered, show ConnectPage with the header containing the connect button
  if (!isConnected || success) {
    return (
      <div>
        <Header />
        <ConnectPage />
      </div>
    );
  } else {
    // If connected and not registered, show the Signup component with the RegisterUser component
    return (
      <div>
        <Header />
        <RegisterUser />
      </div>
    );
  }
};

export default Signup;
