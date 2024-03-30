import  { useEffect } from 'react';
import Chat from '../components/Chat'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import {
  useWeb3ModalAccount
} from "@web3modal/ethers/react";
import useRegisterUser from '../hooks/useRegisterUser';

const ChatPage = () => {
  const navigate = useNavigate();
  const { isConnected } = useWeb3ModalAccount(); // Get the isConnected status
  const { success } = useRegisterUser(); // Use the success status from the useRegisterUser hook

  useEffect(() => {
    // If the user is not connected or if they are already registered, navigate back to the connect page
    if (!isConnected || success) {
      navigate('/');
    }
  }, [isConnected, success, navigate]);

  // If not connected or already registered, show ConnectPage with the header containing the connect button
  if (isConnected || success) {
      navigate('/chat');     
  }
  return (
    <div>
      <Header />
      <Chat />
    </div>
  )
}

export default ChatPage;
