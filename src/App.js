import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers"
import React, { useState } from 'react';


function PatientInterface() {
  const provider = new ethers.JsonRpcProvider("https://rpc2.sepolia.org");
  // Ensure you have the private key, contract ABI, and contract address available
  // const signer = new ethers.Wallet("0xprivate_key", provider);
  // const contract = new ethers.Contract("contract_address", contractABI, signer);

  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileHash = `Name: ${name}, DOB: ${dateOfBirth}`;
    // Ensure the contract is defined and has the setPatientProfile method
    // const result = await contract.setPatientProfile(name, profileHash, walletAddress);
  };


  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="date" placeholder="Date of Birth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
        <input type="text" placeholder="Ethereum Wallet Address" value={walletAddress} onChange={e => setWalletAddress(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MedChain</h1>
        <PatientInterface />
      </header>
    </div>
  );
}

export default App;
