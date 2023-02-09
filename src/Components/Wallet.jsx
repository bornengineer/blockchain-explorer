import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
// import Web3 from 'web3';

const Wallet = ({ web3, updateProvider }) => {
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();
  const [network, setNetwork] = useState();

  // const web3 = new Web3(Web3.givenProvider);
  async function loadAccount() {
    const accounts = await web3.eth.requestAccounts();
    console.log("account");
    setAccount(accounts[0]);
    return accounts[0];
  }
  async function loadBalance(acc) {
    console.log("balance");
    const net = await web3.eth.net.getNetworkType();
    const bal = await web3.eth.getBalance(acc);
    setNetwork(net)
    setBalance((bal / 1e18).toFixed(4));
    return balance;
  }
  const connectWallet = (() => {
    updateProvider();
    console.log("kro", web3);
    loadAccount()
      .then((acc) => loadBalance(acc))
      .catch((err) => {
        console.log(new Error(err.message));
      })
    // loadDetails();
  });

  // const loadDetails = async function () {
  //   const latestBlockNumber = await web3.eth.getBlockNumber();
  //   console.log(`Latest block number: ${latestBlockNumber}`);

  //   // Get the data for a specific block on the Ethereum blockchain
  //   const blockNumber = latestBlockNumber - 5;
  //   const block = await web3.eth.getBlock(blockNumber);
  //   console.log(`Block data:`, block);

  //   // Get the data for a specific transaction on the Ethereum blockchain
  //   const transactionHash = '0xb6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da';
  //   const transaction = await web3.eth.getTransaction(transactionHash);
  //   console.log(`Transaction data:`, transaction);
  // }

  return (
    <Box>
      <button style={{ margin: "20px 0" }} onClick={connectWallet}>Connect Wallet</button>
      <h4>Account : {account}</h4>
      <h4>Balance : {balance ? `${balance} (${network})` : ""}</h4>
      <p style={{ marginTop: "50px", fontSize: "14px", color: "gray" }}>After clicking 2-3 times the wallet get's connected (some Web3 js API issue was there)</p>
    </Box >
  )
}

export default Wallet