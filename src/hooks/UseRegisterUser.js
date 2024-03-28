import { useCallback } from "react";
import { isSupportedChain } from "../utils";
// import { isAddress } from "ethers";
import { getProvider } from "../constants/providers";
// import { getChatContract } from "../constants/contracts";
import { getEnsContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const useRegisterUser = (name) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    // if (!isAddress(address)) return console.error("Invalid address");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract =getEnsContract(signer);

    try {
      const transaction = await contract.registerUser(name);

      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        return console.log("Create Pool successful!");
      }

      console.log("Create Poo failed!");
    } catch (error) {
      console.error("error: ", error);
    }
  }, [chainId, name, walletProvider]);
};

export default useRegisterUser;