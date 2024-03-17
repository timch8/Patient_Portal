# MedChain: Decentralized Electronic Health Record (EHR) Platform

## Project Introduction 

This project aims to develop a secure and patient-centric decentralised Electronic Health Record (EHR) platform using Base blockchain and Filecoin's IPFS technologies


### Objective:
- A secure EHR platform where medical data is encrypted
- Access to medical data by healthcare providers is controlled by patients


#### Key Features:
- Data encryption and decentralised storage: Securely store encrypted patient data on IPFS, accessible and decryptable only by authorized healthcare providers.
- Blockchain Integration: Base (ethereum layer-2) blockchain store references (hashes) to the data on IPFS, providing an immutable ledger of all transactions and interactions.
- Patient & Healthcare Provider Portals: view patient's medical information and add new medical records.
- Smart Contract Functionality: managing patient-controlled medical records access and updates.


#### Technical Stack:
- Frontend: React.js is used to build interactive user interfaces for both patients and healthcare providers.
- Blockchain: Base (ethereum layer-2) blockchain serves as the backbone, providing a secure platform for contract deployment and interaction.
- Solidity Smart Contracts: manage patient profiles and associated medical records.
- Ethers.js: library employed to interact with the Ethereum blockchain, enabling the frontend to communicate with smart contracts and perform blockchain transactions.
- IPFS: utilised for off-chain encrypted medical data storage 


## MedChain React Application for Patients [Working Build]

This repository contains the React frontend for MedChain, allowing patient users to interact with the smart contract seamlessly.


### Features
Current version:
- Register new patient profile

Future version:
- Smart contract interaction 
- Account login 
- EHR dashboard for patients
- Grant permission of data access to healthcare providers




## Setup and Installation
1. Clone the repository:
    ```bash
   git clone https://github.com/timch8/Patient_Portal.git 

2. Navigate to the project directory:
    ```bash
    cd Patient_Portal 
3. Install dependencies:
    ```bash
    npm install 
4. Start the development server:
    ```bash
    npm start
