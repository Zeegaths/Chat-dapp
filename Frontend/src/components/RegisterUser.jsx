import  { useState } from 'react';
import './UserInputForm.css'; // Import CSS file for styling
import useRegisterUser from '../hooks/useRegisterUser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserInputForm = () => { 
  const [name, setName] = useState('');
  const { registerUser } = useRegisterUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      console.error('Name cannot be empty');
      return;
    }
    const success = await registerUser(name); // Call the registerUser function with the name
    if (success) {
      toast.success('Welcome to the Matrix!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setName(''); // Clear the input field after registration
    }
  };

  return (
    <div className="form-container"> {/* Container for centering and background color */}
      <form onSubmit={handleSubmit} className="user-input-form">
        <div>
          <label htmlFor="name">Set ENS</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>      
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UserInputForm;
