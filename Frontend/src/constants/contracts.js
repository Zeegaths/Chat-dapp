import { ethers } from "ethers";
// import chatAbi from "../constants/chatAbi.json";
import ensAbi from "../constants/ensAbi.json"
// import erc20ABI from "./ABIerc20.json";

// export const getChatContract = (providerOrSigner) =>
//   new ethers.Contract(
//     import.meta.env.VITE_chat_contract_address,
//     chatAbi,
//     providerOrSigner
//   );

export const getEnsContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_ens_contract_address,
    ensAbi,
    providerOrSigner
  );

