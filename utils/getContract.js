import ContractAbi from "../artifacts/contracts/Youtube.sol/YouTube.json";
import { ethers } from "ethers";

export default function getContract() {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Getting the signer
  const signer = provider.getSigner();
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    "0x3E1ca31CCe66263f9eABADCc423000c17E7125b2",
    ContractAbi.abi,
    signer
  );
  // Returning the contract
  return contract;
}
