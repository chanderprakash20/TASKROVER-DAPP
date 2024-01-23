// src/index.tsx
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Define the array of wallets
const wallets = [new PetraWallet()];

ReactDOM.render(
  // Wrap your App component with AptosWalletAdapterProvider
  <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AptosWalletAdapterProvider>,
  document.getElementById('root')
);
