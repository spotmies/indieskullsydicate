import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractabi from "./abi.json";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import axios from "axios";
import constants from "./constants";
import Landing from "../Landing";
import LandingMobile from "../mobile/Landing";
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

function Parent(props) {
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
  const [walletText, setWalletText] = useState("");
  // const [quantity, setQuantity] = useState(1);
  // const [chainId, setChainId] = useState(1);
  const [outOfShit, setOutofshit] = useState(false);
  const [totalMints, settotalMints] = useState("0");

  // Google analytics constants
  const gaWalletTracker = useAnalyticsEventTracker("wallet");
  const gaMintTracker = useAnalyticsEventTracker("mint");
  const gaOtherTracker = useAnalyticsEventTracker("others");

  //////////////////////////////////////////////////////////////////////
  ////////MEKRLE TREE /////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  const whiteList_leaves = constants.whiteList.map((x) => keccak256(x));
  const whiteList_tree = new MerkleTree(whiteList_leaves, keccak256, {
    sortPairs: true,
  });
  const buf2hex = (x) => "0x" + x.toString("hex");

  const proof = whiteList_tree
    .getProof(buf2hex(keccak256(walletAddress)))
    .map((x) => buf2hex(x.data));

  const leaf = buf2hex(keccak256(walletAddress));

  console.log("My leaf:", buf2hex(keccak256(walletAddress)));
  console.log(
    "Proof:",
    whiteList_tree
      .getProof(buf2hex(keccak256(walletAddress)))
      .map((x) => buf2hex(x.data))
  );
  console.log("Root Hash:", buf2hex(whiteList_tree.getRoot()));

  ////////////////////////////////////////////////////////
  /////SKULL MERKLE TREE/////////////////////////////////
  ////////////////////////////////////////////////////////

  const skullList_leaves = constants.SkullLists.map((x) => keccak256(x));
  const skullList_tree = new MerkleTree(skullList_leaves, keccak256, {
    sortPairs: true,
  });
  const skull_buf2hex = (x) => "0x" + x.toString("hex");

  const skull_proof = skullList_tree
    .getProof(skull_buf2hex(keccak256(walletAddress)))
    .map((x) => skull_buf2hex(x.data));

  const skull_leaf = skull_buf2hex(keccak256(walletAddress));

  console.log("My skull leaf:", skull_buf2hex(keccak256(walletAddress)));
  console.log(
    "skull Proof:",
    skullList_tree
      .getProof(skull_buf2hex(keccak256(walletAddress)))
      .map((x) => skull_buf2hex(x.data))
  );
  console.log("Root skull Hash:", skull_buf2hex(skullList_tree.getRoot()));

  const is_whiteList_Valid = async () => {
    const isValid = await getContract().whiteList_MerkleVerify(proof, leaf);
    console.log("isValid?", isValid);
    return isValid;
  };

  const is_skullList_Valid = async () => {
    const isValid = await getContract().skullList_MerkleVerify(
      skull_proof,
      skull_leaf
    );
    console.log("isValid?", isValid);
    return isValid;
  };

  ///////////////////////////////////////////////////////////////////
  ///////////END OF MERKLE TREE /////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  //
  //
  //
  // Contract Integration
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

  // function createPost(walleteId) {
  //   axios
  //     .post("https://server.spotmies.com/api/suggestion/new-suggestion", {
  //       suggestionFor: "other",
  //       suggestionFrom: "others",
  //       subject: "whitelist_ISS",
  //       body: walleteId,
  //     })
  //     .then((response) => {
  //       // setPost(response.data);
  //       console.log(response);
  //     });
  // }

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
        setWalletText(true);
        gaWalletTracker("wallet-connected");
        setWallets(accounts[0].slice(-4));
        console.log(accounts[0]);
        setWalletAddress(accounts[0]);
        setWalltetAddressSmall(accounts[0].toLocaleLowerCase());
        checkWl(accounts[0].toLocaleLowerCase());
        console.log("account", accounts[0].toLocaleLowerCase());
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

  async function checkWl(walleteAddress) {
    let isWhiteList = false;
    let isSkullList = false;
    const TotalMinted = await getContract().totalSupply();
    constants.whiteList.forEach((item) => {
      if (item.toLowerCase() === walleteAddress) {
        isWhiteList = true;
      }
    });
    constants.SkullLists.forEach((item) => {
      if (item.toLowerCase() === walleteAddress) {
        isSkullList = true;
      }
    });
    console.log("is whitelist", isWhiteList);
    console.log("is skullListed", isSkullList);
    if (isWhiteList || TotalMinted.toString() >= 2000) {
      setTimeStamp(whiteListDate);
    } else if (isSkullList || TotalMinted.toString() >= 1500) {
      // setTimeStamp(skullListDate);
      console.log("waiting for skull list");
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
      const contractAddress = "0x2e6E1B66DA3dd61F118a6d03c12C451F39CDe0fb";
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractabi,
        signer
      );
      // console.log("contract", contract);
      return contract;
    } catch (error) {
      console.log("error, getcontract", error);
    }
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
      console.log("totalMinted", TotalMinted.toString());
      settotalMints(totalMints.toString());

      console.log(parseInt(TotalMinted._hex, 16));
      try {
        let count = parseInt(TotalMinted._hex, 16);

        setCurrentMintCount(count);
        if (count >= 2500) {
          setOutofshit(true);
        }
      } catch (error) {
        setCurrentMintCount(TotalMinted.toString());
      }
      return userMinted.toString();

      // setCurrentMintCount(3769);
    } catch (err) {
      console.log("mintcount error", err);
      return null;
    }
  };

  const mintToken = async (userMintArg, NFTCount) => {
    // const connection = contract.connect(signer);
    // const addr = connection.address;
    // const supply = await contract.suppliedNFTs();
    // setSupply(supply);
    console.log("nft count ", NFTCount);
    try {
      if (NFTCount < 1) {
        alert("Please enter valid quantity");
        return;
      }

      let ethValue = NFTCount * 0.005;
      let isWhiteList = await is_whiteList_Valid();
      let isSkullList = await is_skullList_Valid();

      console.log("is whitelist", isWhiteList, "is skulllist", isSkullList);
      if (isWhiteList) {
        console.log("whitelisted", walltetAddressSmall);
        if (userMintArg === null) {
          alert("Please connect to wallet");
          return;
        } else {
          ethValue = 0;
        }
      } else if (isSkullList) {
        console.log("is skullListed", walltetAddressSmall);
        ethValue = NFTCount * 0.002;
      }

      console.log("final", NFTCount, ethValue);
      if (isWhiteList) {
        getContract()
          .mint(NFTCount, proof, leaf, {
            value: ethers.utils.parseEther(ethValue.toString()),
          })
          .then((val) => {
            alert("Token minted successfully");
            mintCount();
          })
          .catch((error) => {
            console.log(error.reason);
            alert(error.reason);
          });
      } else {
        getContract()
          .mint(NFTCount, skull_proof, skull_leaf, {
            value: ethers.utils.parseEther(ethValue.toString()),
          })
          .then((val) => {
            alert("Token minted successfully");
            mintCount();
          })
          .catch((error) => {
            console.log(error.reason);
            alert(error.reason);
          });
      }
    } catch (error) {
      console.log("error91, mint button", error);
    }

    //console.log(result);
  };

  const clickedMint = async (mints) => {
    setNFTCount(mints);
    console.log("clickedMint", mints);
    requestAccount(false);
    getChainId();
    let userMints = await mintCount();
    console.log("userMints", userMints);
    if (userMints != null) {
      mintToken(userMints, mints);
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
  return (
    <div>
      {props.isMobile ? (
        <LandingMobile
          totalMint={totalMints}
          onClickMint={(val) => {
            clickedMint(val);
          }}
        />
      ) : (
        <Landing
          totalMint={totalMints}
          loadImage={true}
          onClickMint={(val) => {
            clickedMint(val);
          }}
        />
      )}
    </div>
  );
}

export default Parent;
