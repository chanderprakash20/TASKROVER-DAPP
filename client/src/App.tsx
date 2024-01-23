// src/App.tsx
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import React from 'react';
import DecentralizedMarketplace from './components/DecentralizedMarketplace';
import './App.css';
import { Col } from 'antd'; // Assuming you are using Ant Design Col

function App() {
  return (
    <div className="App">
      {/* Your existing content */}
      <DecentralizedMarketplace />

      {/* Add the WalletSelector component */}
      <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
        <WalletSelector />
      </Col>
    </div>
  );
}

export default App;
