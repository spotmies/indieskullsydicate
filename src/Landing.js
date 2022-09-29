import skull from "./assets/right_new_1.png";
import man from "./assets/left_new.png";

import roadMapleft from "./assets/Roadmap_left.png";
import roadMapRight from "./assets/Roadmap_right.png";

import syndicateLeft from "./assets/Thesyndicate_left.png";
import syndicateRight from "./assets/Thesyndicate_right.png";
import mouse from "./assets/hand_mouse.png";
// import openHand from "./assets/open-hand.png";

import iSSlogo from "./assets/logo.png";
import skull1 from "./assets/skull_images/1.png";
import skull2 from "./assets/skull_images/2.png";
import skull3 from "./assets/skull_images/3.png";
import skull4 from "./assets/skull_images/4.png";
import skull5 from "./assets/skull_images/5.png";
import skull6 from "./assets/skull_images/6.png";
import skull7 from "./assets/skull_images/7.png";
import skull8 from "./assets/skull_images/8.png";
import skull9 from "./assets/skull_images/9.png";
import skull10 from "./assets/skull_images/10.png";
import skull11 from "./assets/skull_images/11.png";
import skull12 from "./assets/skull_images/12.png";
import skull13 from "./assets/skull_images/13.png";
import wallet_Icon from "./assets/metamask_icon.png";
import soundOn from "./assets/skull_with_earphone.png";
import soundOff from "./assets/skull_music_off.png";

import "./App.css";

import { useState, useEffect } from "react";
import roadmapLogo from "./assets/roadmap.png";
import syndicate from "./assets/thesyndicate.png";
import ship from "./assets/opensea_icon.png";
import discord from "./assets/discord_icon.png";
import twitter from "./assets/twitter_icon.png";
import mint from "./assets/mint_2.png";
import shipHover from "./assets/hower_opensea.png";
import discordHover from "./assets/hower_discord.png";
import twitterHover from "./assets/hower_twitter.png";
import Snowfall from "react-snowfall";
import homeAudio from "./assets/dark_forest_copy.mp3";

function Landing(props) {
  const [visible, setVisible] = useState(true);
  const [showMint, setshowMint] = useState(false);
  const [showElements, setshowElements] = useState(false);
  const [showRoadMap, setShowRoadMap] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [screen, setScreen] = useState(0);
  // const audio = new Audio(homeAudio);

  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  /////////CONTRACT VARIABLES////////////////////////
  ///////////////////////////////////////////////////
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

  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  ///////// eND OF CONTRACT VARIABLES////////////////////////
  ///////////////////////////////////////////////////

  const skullImage = [
    skull1,
    skull2,
    skull3,
    skull4,
    skull5,
    skull6,
    skull7,
    skull8,
    skull9,
    skull10,
    skull11,
    skull12,
    skull13,
  ];

  const roadMapContent = (
    <div className="absolute flex flex-row flex-grow justify-center h-[60vh] items-center fade-in w-[40%] max-w-[420px]">
      <div className="flex flex-col items-center justify-center w-full">
        <h1
          className="text-white font-alphaEcho text-4xl"
          style={{
            cursor: "url(" + mouse + "), auto",
          }}>
          Roadmap
        </h1>
        <div className="h-[28rem] no-scrollbar overflow-scroll">
          <p className="font-aveny text-white text-clip mt-8 text-justify">
            Zoople has two bodies, his human half, and his phantom half - he
            also has more than one presence in each dimension, often meeting
            with himself during unpredictable time-shifts.
            <br></br>
            <br></br>His human half appears unscathed, although, it will show
            some weird characteristics depending on what dimension Zoople is
            present in and adapted to.
            <br></br>
            <br></br>His phantom half consists of all kinds of matter forming
            the shape of a skull.
            <br></br>
            <br></br>None of Zoople's bodies can feel nor communicate with
            either half, yet they manage to work together in tandem.
            <br></br>
            <br></br>The question is which side has more control over the other
            and what are their goals?
            <br></br>
            <br></br>No-one is really sure how Zoople came to exist, as even his
            existence in and of himself is contradictory and nonsensical; the
            combination of the living and the unexplainable seems like nothing
            more than a myth.
            <br></br>
            <br></br>In the absence of any definitive facts, theories on the
            origins of the 'Indie Skull Syndicate' (what all Zoople's
            collectively refer to themselves as, for some weird reason) are
            extremely popular and abundant, if you ever ask him.
            <br></br>
            <br></br>Some think they're the result of some wicked necromantic
            ritual gone wrong. Others say that they might be the creations of
            some transient deity. Or they will believe they have been sent
            somewhere as punishment.
            <br></br>
            <br></br>Regardless of where this mysterious wanderer came from and
            where he is, it doesn't change the fact that his mere existence is a
            wonder on its own.
            <br></br>
            <br></br>Zoople will regularly encounter himself. Some of the
            meetings end in friendship, others in aggression. The sad thing is,
            they don't last forever and no matter what happens - each limbo will
            be returned to their own dimension at any time to wait for another
            time shift, wander their world and hope their bodies will continue
            to get along.
            <br></br>
            <br></br>Chances of the same Zoople's meeting again? How long is a
            piece of string? More importantly, how many dimensions are there?
            All we know is if a Zoople did ever manage to meet himself more than
            once, if they don't kill each other... they might just end up
            getting onto something.
            <br></br>
            <br></br>Is this what the Indie Skull Syndicate is meant to do? Why
            do they call themselves this and what will they discover?
            <br></br>
            <br></br>There's only one way to find out and that is by joining the
            syndicate yourself and embarking on your journey with your own
            Zoople.
          </p>
        </div>
      </div>
    </div>
  );

  const storyContent = (
    <div className="absolute flex flex-col flex-grow justify-center h-[60vh] items-center fade-in w-[40%] max-w-[420px] fade-in">
      <h1 className="text-white font-alphaEcho text-4xl">Story</h1>
      <div className="h-172 no-scrollbar overflow-scroll">
        <p className="font-aveny text-white text-clip mt-8 text-justify">
          Zoople has two bodies, his human half, and his phantom half - he also
          has more than one presence in each dimension, often meeting with
          himself during unpredictable time-shifts.
          <br></br>
          <br></br>His human half appears unscathed, although, it will show some
          weird characteristics depending on what dimension Zoople is present in
          and adapted to.
          <br></br>
          <br></br>His phantom half consists of all kinds of matter forming the
          shape of a skull.
          <br></br>
          <br></br>None of Zoople's bodies can feel nor communicate with either
          half, yet they manage to work together in tandem.
          <br></br>
          <br></br>The question is which side has more control over the other
          and what are their goals?
          <br></br>
          <br></br>No-one is really sure how Zoople came to exist, as even his
          existence in and of himself is contradictory and nonsensical; the
          combination of the living and the unexplainable seems like nothing
          more than a myth.
          <br></br>
          <br></br>In the absence of any definitive facts, theories on the
          origins of the 'Indie Skull Syndicate' (what all Zoople's collectively
          refer to themselves as, for some weird reason) are extremely popular
          and abundant, if you ever ask him.
          <br></br>
          <br></br>Some think they're the result of some wicked necromantic
          ritual gone wrong. Others say that they might be the creations of some
          transient deity. Or they will believe they have been sent somewhere as
          punishment.
          <br></br>
          <br></br>Regardless of where this mysterious wanderer came from and
          where he is, it doesn't change the fact that his mere existence is a
          wonder on its own.
          <br></br>
          <br></br>Zoople will regularly encounter himself. Some of the meetings
          end in friendship, others in aggression. The sad thing is, they don't
          last forever and no matter what happens - each limbo will be returned
          to their own dimension at any time to wait for another time shift,
          wander their world and hope their bodies will continue to get along.
          <br></br>
          <br></br>Chances of the same Zoople's meeting again? How long is a
          piece of string? More importantly, how many dimensions are there? All
          we know is if a Zoople did ever manage to meet himself more than once,
          if they don't kill each other... they might just end up getting onto
          something.
          <br></br>
          <br></br>Is this what the Indie Skull Syndicate is meant to do? Why do
          they call themselves this and what will they discover?
          <br></br>
          <br></br>There's only one way to find out and that is by joining the
          syndicate yourself and embarking on your journey with your own Zoople.
        </p>
      </div>
    </div>
  );
  const playAudio = (state) => {
    const audioTag = document.getElementById("audio");

    try {
      if (state) {
        audioTag.play();

        audioTag.volume = 0.7;
        audioTag.loop = true;
        console.log("playing");
      } else {
        console.log("pausing");
        audioTag.pause();
        audioTag.loop = false;
        audioTag.volume = 0;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const animate = () => {
    playAudio(true);
    var character = window?.document?.getElementById("character");
    var character2 = window?.document?.getElementById("character2");
    character?.classList?.remove("trans-left");
    character2?.classList?.remove("trans-right");
    character.classList.add("left-animation");
    character2.classList.add("right-animation");
    setTimeout(() => {
      setshowMint(true);
      setshowElements(true);
    }, 100);
  };

  const removeAnimation = (src) => {
    var character =
      window?.document?.getElementById("character") ??
      window?.document?.getElementById("character3") ??
      window?.document?.getElementById("character5");
    var character2 =
      window?.document?.getElementById("character2") ??
      window?.document?.getElementById("character4") ??
      window?.document?.getElementById("character6");
    character?.classList?.remove("trans-left");
    character2?.classList?.remove("trans-right");
    character?.classList?.remove("left-animation");
    character2?.classList?.remove("right-animation");
    character?.classList?.add("right-animation1");
    character2?.classList?.add("left-animation1");
  };

  const addAnimation = () => {
    var character =
      window?.document?.getElementById("character") ??
      window?.document?.getElementById("character3") ??
      window?.document?.getElementById("character5");
    var character2 =
      window?.document?.getElementById("character2") ??
      window?.document?.getElementById("character4") ??
      window?.document?.getElementById("character6");
    character?.classList?.remove("right-animation1");
    character2?.classList?.remove("left-animation1");
    character2?.classList?.remove("left-animation2");
    character?.classList?.add("left-animation");
    character2?.classList?.add("right-animation");
  };

  const hideShowHalfSkull = (display) => {
    var character = window?.document?.getElementById("character");
    var character2 = window?.document?.getElementById("character2");
    character.style.opacity = "100%";
    character2.style.opacity = "100%";
    character.style.display = display;
    character2.style.display = display;
    // for (let i = 1; i < 11; i++) {
    //   setTimeout(() => {
    //     character.style.opacity = `${i * 10}%`;
    //     character2.style.opacity = `${i * 10}%`;
    //   }, i * 50);
    // }
  };

  const hideSkullFlow = (display) => {
    const character = window?.document?.getElementById("skullflow");
    if (character === null || character === undefined) return;
    character.style.display = display;
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  useEffect(() => {
    hideShowHalfSkull("none");
    if (props.loadImage) {
      setTimeout(() => {
        console.log("skull images loaded");
        const skullFlow = window?.document?.getElementById("skullflow");
        skullImage.forEach((element, index) => {
          setTimeout(() => {
            skullFlow.src = element;
            if (index === skullImage.length - 1) {
              // skullFlow.style.display = "none";
              // skullFlow.style.opacity = "0%";
              hideSkullFlow("none");
              hideShowHalfSkull("block");

              // setVisible(true);
            }
          }, index * 150);
        });
      }, 100);
    }
  }, [props.loadImage]);

  useEffect(() => {
    setTimeout(() => {
      if (showElements) {
        window?.document
          ?.getElementById("roadmapStorybtn")
          ?.classList.add("roadmapStorybtn");
        window?.document
          ?.getElementById("social-media-animation")
          ?.classList.add("social-media-animation");
        window?.document
          ?.getElementById("nav-bar-animation")
          ?.classList.add("nav-bar-animation");
      }
    }, 100);
  }, [showElements]);

  const changeScreenImage = (key) => {
    var character = window?.document?.getElementById("character");
    var character2 = window?.document?.getElementById("character2");
    switch (key) {
      case 0:
        character.src = man;
        character2.src = skull;
        break;
      case 1:
        character.src = syndicateLeft;
        character2.src = syndicateRight;
        break;
      case 2:
        character.src = roadMapleft;
        character2.src = roadMapRight;

      default:
        break;
    }
  };

  const toggleScreen = (scr) => {
    if (scr === screen) return;

    if (scr === 0) {
      setShowRoadMap(false);
      setShowStory(false);
      setshowMint(true);
    } else if (scr === 1) {
      setshowMint(false);
      setShowStory(true);
      setShowRoadMap(false);
    } else if (scr === 2) {
      setShowRoadMap(true);
      setshowMint(false);
      setShowStory(false);
    }

    removeAnimation(scr);
    console.log(scr);
    //0 - mint
    //1 - roadmap
    //2 - story
    setTimeout(() => {
      changeScreenImage(scr);
      addAnimation(scr);
      setScreen(scr);
    }, 300);
  };

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
        // checkWl(window?.ethereum?.selectedAddress.toLocaleLowerCase());
      }
    }, 1000);
    setTimeout(() => {
      // mintCount();
    }, 2000);
  }, []);

  async function requestAccount(showError) {
    const alertMessage = showError ?? true;
    if (window.ethereum) {
      if (wallets !== "") {
        // checkWl(walltetAddressSmall);
        if (alertMessage) alert("Wallet already connected");
        return;
      }
      // gaWalletTracker("new-wallet");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // mintCount();
        // getChainId();
        // setWalletText(true);
        // gaWalletTracker("wallet-connected");
        setWallets(accounts[0].slice(-4));
        console.log(accounts[0]);
        setWalletAddress(accounts[0]);
        setWalltetAddressSmall(accounts[0].toLocaleLowerCase());
        // checkWl(accounts[0].toLocaleLowerCase());
        // console.log("account", accounts[0].toLocaleLowerCase());
        // createPost(accounts[0]);
      } catch (error) {
        // console.log("Error connecting....");
        alert(error);
      }
    } else {
      //console.log("Metamask not detected");
      // gaWalletTracker("no-metamask");
      alert("Metamask not detected");
    }
  }

  const soundControl = () => {
    const soundIcon = window?.document?.getElementById("sound-icon");
    console.log(soundIcon.name);
    if (soundIcon.name == "true") {
      console.log("sound off");
      soundIcon.name = "false";
      soundIcon.src = soundOff;
      playAudio(false);
    } else {
      console.log("sound on");
      soundIcon.name = "true";
      soundIcon.src = soundOn;
      playAudio(true);
    }
    // console.log(audio.state);
  };

  return (
    <div className="App relative">
      {/* <video
        autoPlay
        muted
        loop
        className="landing-page-bg"
        src={backGroundVideo}
      /> */}
      <div className="fixed-postion-div">
        <Snowfall snowflakeCount={300} radius={[0.5, 1]} wind={[1.5, 4]} />
      </div>
      <div
        id="bg-container"
        className="flex flex-col h-screen bg-container-white bg-container-image z-10">
        <div className="mx-32" id="nav-bar-animation">
          <div className="flex justify-between items-center">
            {showElements ? (
              <img src={iSSlogo} className="h-24" />
            ) : (
              <div className="h-24" />
            )}

            {showElements && (
              <div className="flex">
                <img
                  src={soundOn}
                  id="sound-icon"
                  name="true"
                  className="h-14 mr-[60px]"
                  onClick={soundControl}
                />
                <img
                  src={wallet_Icon}
                  className="h-14"
                  onClick={requestAccount}
                />
              </div>
            )}
          </div>
        </div>
        {showElements && (
          <div className="absolute bottom-[4%]"> {roadmapStorybtn()}</div>
        )}
        {showElements && (
          <div className="absolute bottom-[8%] right-[1px]">
            {socialMedia()}
          </div>
        )}
        <div className="flex justify-center items-end flex-grow w-full px-8 opacity-100">
          <div className="w-[80vw]">
            {mintSoon()}
            {/* {screen === 1 && theRoadMap()}
            {screen === 2 && theStory()} */}
          </div>
          {/* audio tag  */}
          <audio id="audio" src={homeAudio} loop />
        </div>
      </div>
    </div>
  );

  function mintSoon() {
    return (
      <div className="flex items-end w-full justify-center parent relative">
        {screen === 1 && showStory ? storyContent : null}
        {screen === 2 && showRoadMap ? roadMapContent : null}
        {screen === 0 && showMint ? (
          <div className="absolute flex flex-row flex-grow justify-center h-[60vh] items-center fade-in">
            <h1 className="text-white font-alphaEcho text-4xl">
              Mint Date<br></br>Will be <br /> announced soon
            </h1>
          </div>
        ) : (
          <></>
        )}

        {visible && (
          <img
            src={skull1}
            alt="Man"
            id="skullflow"
            className="h-[80vh] z-50 opacity-100"
          />
        )}

        <>
          <img
            src={man}
            alt="Man"
            id="character"
            className="h-[73vh] trans-left"
            onClick={animate}
          />

          <img
            src={skull}
            onClick={animate}
            id="character2"
            className="h-[73vh] trans-right z-10"
          />
        </>
      </div>
    );
  }

  function roadmapStorybtn() {
    return (
      <div
        id="roadmapStorybtn"
        className="flex flex-col items-center h-[360px] justify-evenly opacity-10">
        <img
          src={mint}
          className="w-20 cursor-pointer"
          onClick={() => toggleScreen(0)}
        />
        <img
          src={syndicate}
          className="w-28 cursor-pointer"
          // onClick={() => props.changeScreen("story")}
          onClick={() => toggleScreen(1)}
        />

        <img
          src={roadmapLogo}
          className="w-28  cursor-pointer"
          // onClick={() => props.changeScreen("roadmap")}
          onClick={() => toggleScreen(2)}
        />
      </div>
    );
  }

  function socialMedia() {
    return (
      <div
        id="social-media-animation"
        className="flex flex-col items-center h-[240px] justify-evenly opacity-10">
        <div className="relative">
          <img
            src={ship}
            className="w-12 m-4 cursor-pointer"
            // on hover
            onMouseOver={(e) => {
              e.currentTarget.src = shipHover;
            }}
            onMouseOut={(e) => {
              e.currentTarget.src = ship;
            }}
          />
        </div>

        <div className="relative">
          <img
            src={twitter}
            className="w-12 m-4 cursor-pointer"
            onClick={() =>
              window.open("https://twitter.com/iskullsyndicate", "_blank")
            }
            onMouseOver={(e) => {
              e.currentTarget.src = twitterHover;
            }}
            onMouseOut={(e) => {
              e.currentTarget.src = twitter;
            }}
          />
        </div>

        <div className="relative">
          <img
            src={discord}
            className="social-media-icon m-4 cursor-pointer"
            onClick={() =>
              window.open("https://discord.com/invite/2MBQPKkP", "_blank")
            }
            onMouseOver={(e) => {
              e.currentTarget.src = discordHover;
            }}
            onMouseOut={(e) => {
              e.currentTarget.src = discord;
              e.currentTarget.width = "3rem";
            }}
          />

          {/* <img
            src={discordHover}
            className="w-12 m-4 cursor-pointer absolute opacity-[0] hover:opacity-[1]"
            style={{ top: 0 }}
          /> */}
        </div>
      </div>
    );
  }
}

export default Landing;
