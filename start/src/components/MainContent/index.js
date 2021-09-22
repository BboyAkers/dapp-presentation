import React, { useState } from 'react';
import { ethers } from 'ethers';

import Greeter from '../../artifacts/contracts/Greeter.sol/Greeter.json'
import './MainContent.css';

const MainContent = ({ provider }) => {

  const greeterContractAddress = ""; // Grab Contract Address
  const [greeting, setGreetingMessage] = useState('');
  const [account, setAccount] = useState();
  const [text, setText] = useState('');
  const { ethereum } = window;

  const requestAccounts = async () => {
    // Connect wallet to our app. docs.metamask.io
  }

  const fetchGreeting = async () => {
    try {
      // Use Ethers to Call the Contract abstraction
      // call the greet() function from the contract and grab that data
      // Update the Text on the page to show the contract data via setText()
    }
    catch (error) {
      // Show the error message on the page via setText()
    }
  }

  const updateGreeting = async () => {
    if (!greeting) return;

    try {
      // Get the signer
      // Grab the contract and pass the signer in.
      // Set the greeting via setGreeting() function in the Contract
      // wait for the transaction to be confirmed using .wait()
      // Fetch the updated greeting from the contract via fetch Greeting()
    } catch (error) {
      // Display the error message on screen using setText()
    }
  }

  return (
    <div>
      <h1>Greeting Dapp</h1>
      {/* <button className="waves-effect waves-light btn" onClick={requestAccounts}>Connect App</button> */}
      <p><strong>{text}</strong></p>
      <button className="waves-effect waves-light btn" onClick={fetchGreeting}>Fetch Greeting</button>
      <input
        className="validate"
        onChange={e => setGreetingMessage(e.target.value)}
        placeholder="Enter Text to set greeting"
      />
      <button className="btn waves-effect waves-light" onClick={updateGreeting}>Update Greeting<i className="material-icons right">send</i></button>
    </div>
  )
};

export default MainContent;