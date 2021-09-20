import React, { useState, useEffect } from 'react';

import MainContent from './components/MainContent'
import ErrorContent from './components/ErrorContent'
import loadingSvg from './images/loading.svg'
import './App.css';
import { ethers } from 'ethers';


const App = () => {

  const [provider, setProvider] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    checkEthereumProvider();
  }, []);

  const checkEthereumProvider = async () => {
    try {
      // Detect the provider
      // Set Loading to False
      // Set the provider
    } catch (error) {
      // Set Loading to False
      // Set provider to False
      // Show the error in the console
    }
  }


  return (
    <div className="App">
      {isLoading ? <div><div><img className="loading-spinner" src={loadingSvg} alt="loading spinner" /><h2>Loading.....</h2></div></div>
        : <div>

          {provider ? <MainContent provider={provider} /> : <ErrorContent />}

        </div>}
    </div>
  );
}

export default App;
