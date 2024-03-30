import { useCallback, useState } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getEnsContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const useRegisterUser = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [success, setSuccess] = useState(false); // State variable to track success status

  const registerUser = useCallback(async (ensName) => {
    if (!isSupportedChain(chainId)) {
      console.error("Wrong network");
      return false;
    }

    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();
    const contract = getEnsContract(signer);

    try {
      const transaction = await contract.registerUser(ensName);
      const receipt = await transaction.wait();

      if (receipt.status) {
        console.log("User Registration successful!");
        setSuccess(true); // Update success statu
        return true;
      } else {
        console.log("User registration failed!");
        return false;
      }
    } catch (error) {
      console.error("error: ", error);
      return false;
    }
  }, [chainId, walletProvider]);

  return { registerUser, success }; // Return both registerUser function and success status
};

export default useRegisterUser;
