import { useEffect, useState } from "react";
import { getProposalsContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/provider";
import { ethers } from "ethers";
import ensAbi from "../constants/ensAbi.json";
import multicallAbi from "../constants/multicall2.json";

const useGetUsers = () => {
  const [data, setData] = useState([]);
  const [numOfUsers, setNumOfUsers] = useState(0);

  const contract = getProposalsContract(readOnlyProvider);

  useEffect(() => {
    (async () => {
      contract
        .name()
        .then((res) => setNumOfUsers(Number(res)))
        .catch((err) => console.log(err));

      const poolIDs = [...Array.from({ length: numOfUsers })].map(
        (_, index) => index
      );

      //   console.log(poolIDs);

      const itf = new ethers.Interface(ensAbi);
      const calls = poolIDs.map((x) => ({
        target: import.meta.env.VITE_STAKING_CONTRACT_ADDRESS,
        callData: itf.encodeFunctionData("getUserProfile", [x]),
      }));

      //multicall
      const multicall = new ethers.Contract(
        import.meta.env.VITE_MULTICALL_CONTRACT_ADDRESS,
        multicallAbi,
        readOnlyProvider
      );

      // eslint-disable-next-line no-unused-vars
      const [_, result] = await multicall.aggregate.staticCall(calls);

      const decodedResponses = result.map((x) =>
        itf.decodeFunctionResult("getUserProfile", x)
      );

        console.log(decodedResponses);

      const formattedData = decodedResponses.map((response, i) => {
        const formattedObject = {};
        const values = Object.values(response[0]);
        formattedObject.index = i;
        formattedObject.ens = values[0];
        formattedObject.address = values[1];
        formattedObject.tokenUrI = values[2];   
        return formattedObject;
      });

      //   console.log(formattedData);

      setData([...formattedData]);
    })();
  }, [contract, numOfUsers]);

  return data;
};

export default useGetUsers;