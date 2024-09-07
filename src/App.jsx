import React,{FC,useMemo} from 'react';
import  './App.css';
import{
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from '@solana/web3.js';
import {Airdrop} from './airdrop';
import { ShowSolBalance } from './userBalance';
import "@solana/wallet-adapter-react-ui/styles.css"
import { SendTokens } from './assets/sendSolana';
function App() {
  const network=WalletAdapterNetwork.Devnet;
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/YrfP7UcQMl_KTrwGjNtYd8MCoR0ZiSXx"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton/>
          <WalletDisconnectButton/>
          {}
          <Airdrop></Airdrop>
          <ShowSolBalance></ShowSolBalance>
          <SendTokens></SendTokens>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App;
