// import React, { useEffect } from 'react';
import RegisterUser from '../components/RegisterUser';
// import { useNavigate } from 'react-router-dom';
// import useRegisterUser from '../hooks/useRegisterUser';
import Header from '../components/Header';

const Signup = () => {
  // const navigate = useNavigate();
  // const { success } = useRegisterUser(); // Use the success status from the useRegisterUser hook

  // useEffect(() => {
  //   if (success) {
  //     navigate('/chat'); // Navigate to the chat page upon successful registration
  //   }
  // }, [success, navigate]);

  return (
    <div>
      <Header />
      <RegisterUser />
    </div>
  );
};

export default Signup;
