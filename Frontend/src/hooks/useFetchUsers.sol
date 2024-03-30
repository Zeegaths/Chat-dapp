// import { useState, useEffect } from "react";
// import MyAvatar from "./MyAvatar"; // Import your Avatar component
// import Web3 from 'web3';
// import ENSContractABI from "./ENSContractABI.json"; // Import the ABI of your contract

// const useFetchUsers = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         // Connect to the Ethereum network
//         const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

//         // Load contract ABI and address
//         const contractAddress = "CONTRACT_ADDRESS"; // Replace with your contract address
//         const contract = new web3.eth.Contract(ENSContractABI, contractAddress);

//         // Call contract function to get user data
//         const accounts = await web3.eth.getAccounts();
//         const userAccounts = await contract.methods.getAllUsers().call({ from: accounts[0] });

//         // Set user data
//         setUsers(userAccounts);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return users;
// };
