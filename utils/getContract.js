import React, { useState, useEffect } from "react";
import Game from "../pages/game";
import Mint from "./mint";
import { ethers } from "ethers";
import contractabi from "./abi.json";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import axios from "axios";
import constants from "./constants";
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const futureDate = new Date(1660917600000);
// const futureDate = new Date(1660889040000);
// const whiteListDate = new Date(1660914000000);
const whiteListDate = new Date(1660917600000);

const [timeStamp, setTimeStamp] = useState(futureDate);
const [wallets, setWallets] = useState("");
const [currentMintCount, setCurrentMintCount] = useState(1);
const [NFTCount, setNFTCount] = useState(1);
const [walletAddress, setWalletAddress] = useState("");
const [walltetAddressSmall, setWalltetAddressSmall] = useState("");
const [userMints, setUserMints] = useState(null);
// const [quantity, setQuantity] = useState(1);
// const [chainId, setChainId] = useState(1);
const [outOfShit, setOutofshit] = useState(false);

//
//
//
// Contract Integration
//
//
//
//
useEffect(() => {
  setTimeout(() => {
    if (
      window?.ethereum &&
      window?.ethereum?.selectedAddress &&
      wallets === ""
    ) {
      setWallets(window.ethereum.selectedAddress.slice(-4));
      setWalletAddress(window?.ethereum?.selectedAddress);
      setWalltetAddressSmall(
        window?.ethereum?.selectedAddress.toLocaleLowerCase()
      );
      checkWl(window?.ethereum?.selectedAddress.toLocaleLowerCase());
    }
  }, 1000);
  setTimeout(() => {
    mintCount();
  }, 2000);
}, []);
function createPost(walleteId) {
  axios
    .post("https://server.spotmies.com/api/suggestion/new-suggestion", {
      suggestionFor: "other",
      suggestionFrom: "others",
      subject: "whitelist_something",
      body: walleteId,
    })
    .then((response) => {
      // setPost(response.data);
      console.log(response);
    });
}
async function requestAccount(showError) {
  const alertMessage = showError ?? true;
  if (window.ethereum) {
    if (wallets !== "") {
      checkWl(walltetAddressSmall);
      if (alertMessage) alert("Wallet already connected");
      return;
    }
    gaWalletTracker("new-wallet");
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      mintCount();
      getChainId();
      // setWalletText(true);
      gaWalletTracker("wallet-connected");
      setWallets(accounts[0].slice(-4));
      console.log(accounts[0]);
      setWalletAddress(accounts[0]);
      setWalltetAddressSmall(accounts[0].toLocaleLowerCase());
      checkWl(accounts[0].toLocaleLowerCase());
      // console.log("account", accounts[0].toLocaleLowerCase());
      // createPost(accounts[0]);
    } catch (error) {
      // console.log("Error connecting....");
      alert(error);
    }
  } else {
    //console.log("Metamask not detected");
    gaWalletTracker("no-metamask");
    alert("Metamask not detected");
  }
}
function checkWl(walleteAddress) {
  let isWhiteList = false;
  constants.whiteList.forEach((item) => {
    if (item.toLowerCase() === walleteAddress) {
      isWhiteList = true;
    }
  });
  console.log("is whitelist", isWhiteList);
  if (isWhiteList) {
    setTimeStamp(whiteListDate);
  }
}
const getChainId = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    const { chainId } = await provider.getNetwork();
    console.log("chainId", chainId);
    // setChainId(chainId);

    if (chainId !== 1) {
      alert("Please connect to Ethereum Mainnet");
    }
  } catch (error) {
    console.log("Error connecting....");
  }
};

const getContract = () => {
  try {
    const contractAddress = "0xcF645B0B28967D984f63ec5D7b87c6aB415CcE62";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractabi, signer);
    // console.log("contract", contract);
    return contract;
  } catch (error) {
    console.log("error, getcontract", error);
  }
};

const isValid = async () => {
  const isValid = await getContract().MerkleVerify(proof, leaf);
  console.log("isValid?", isValid);
};

const mintCount = async () => {
  // const TotalMinted = await getContract().suppliedNFTs();

  if (!window.ethereum) {
    //alert("Metamask not detected");
    console.log("Metamask not detected");
    return null;
  }

  try {
    const TotalMinted = await getContract().totalSupply();
    const userMinted = await getContract().userMint();
    console.log("userMints:  ", userMinted);
    console.log("myMints", parseInt(userMinted._hex, 16));
    setUserMints(parseInt(userMinted._hex, 16));
    console.log("totalMinted", TotalMinted);
    console.log(parseInt(TotalMinted._hex, 16));
    try {
      let count = parseInt(TotalMinted._hex, 16);

      setCurrentMintCount(count);
      if (count >= 4969) {
        setOutofshit(true);
      }
    } catch (error) {
      setCurrentMintCount(2000);
    }
    return parseInt(userMinted._hex, 16);

    // setCurrentMintCount(3769);
  } catch (err) {
    console.log("mintcount error", err);
    return null;
  }
};

const mintToken = async (userMintArg) => {
  // const connection = contract.connect(signer);
  // const addr = connection.address;
  // const supply = await contract.suppliedNFTs();
  // setSupply(supply);
  try {
    if (NFTCount < 1) {
      alert("Please enter valid quantity");
      return;
    }
    let ethValue = NFTCount * 0.005;
    let isWhiteList = false;
    constants.whiteList.forEach((item) => {
      if (item.toLowerCase() === walltetAddressSmall.toLowerCase()) {
        isWhiteList = true;
      }
    });
    console.log("is whitelist", isWhiteList);
    if (isWhiteList) {
      console.log("whitelisted", walltetAddressSmall);
      if (userMintArg === null) {
        alert("Please connect to wallet");
        return;
      } else if (userMintArg == 0) {
        ethValue = NFTCount * 0.002 - ((1 - userMintArg) * 0.002).toFixed(3);
        if (ethValue < 0) {
          ethValue = 0;
        }
      } else {
        ethValue = (NFTCount * 0.002).toFixed(3);
      }
    } else {
      console.log("not whitelisted", walltetAddressSmall);
      if (userMintArg == 0) {
        ethValue = NFTCount * 0.005 - ((1 - userMintArg) * 0.005).toFixed(3);
      }
    }

    // if (currentMintCount + NFTCount > 1000) {
    //   var ethValue = NFTCount * 0.002;
    // } else {
    //   var ethValue = NFTCount * 0;
    // }
    // var ethValue = NFTCount * 0.002;
    console.log("final", NFTCount, ethValue);
    getContract()
      .mint(NFTCount, proof, leaf, {
        value: ethers.utils.parseEther(ethValue.toString()),
      })
      .then((val) => {
        alert("Token minted successfully");

        mintCount();
        // console.log("val", val);
        // console.log("error", error);
      })
      .catch((error) => {
        // console.log("error", error);
        // console.table(error);
        console.log(error.reason);
        alert(error.reason);
        // console.log("errortp", typeof error);
        // console.log("errorm", error.message);
      });
  } catch (error) {
    console.log("error91, mint button", error);
  }

  //console.log(result);
};

const clickedMint = async () => {
  requestAccount(false);
  getChainId();
  let userMints = await mintCount();
  console.log("userMints", userMints);
  if (userMints != null) {
    mintToken(userMints);
  }
};

//
//
//
// End Of Contract Integration
//
//
//
//