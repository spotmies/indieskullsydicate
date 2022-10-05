import React, { useState, useEffect } from "react";
import skull from "./assets/right_new_1.png";
import man from "./assets/left_new.png";
import constants from "./utils/constants";
import iSSlogo from "./assets/logo.png";
import wallet_Icon from "./assets/metamask_icon.png";
import soundOn from "./assets/skull_with_earphone.png";
import soundOff from "./assets/skull_music_off.png";
import homeAudio from "./assets/dark_forest_copy.mp3";
import Snowfall from "react-snowfall";

export default function CheckWhiteList() {
  const [isMobile, setIsMobile] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const [wlState, setWlState] = useState("");

  useEffect(() => {
    if (window.innerWidth > 500) {
      setIsMobile(false);
    } else setIsMobile(true);
  }, []);
  const playAudio = (state) => {
    const audioTag = document.getElementById("audio");

    try {
      if (state) {
        audioTag.play();

        audioTag.volume = 0.7;
        audioTag.loop = true;
        //console.log("playing");
      } else {
        //console.log("pausing");
        audioTag.pause();
        audioTag.loop = false;
        audioTag.volume = 0;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const soundControl = (onOnly) => {
    const soundIcon = window?.document?.getElementById("sound-icon");
    //console.log(soundIcon.name);
    if (onOnly === true) {
      soundIcon.name = "true";
      soundIcon.src = soundOn;
      playAudio(true);
      return;
    }
    if (soundIcon.name == "true") {
      //console.log("sound off");
      soundIcon.name = "false";
      soundIcon.src = soundOff;
      playAudio(false);
    } else {
      //console.log("sound on");
      soundIcon.name = "true";
      soundIcon.src = soundOn;
      playAudio(true);
    }
    // //console.log(audio.state);
  };

  async function requestAccount(showError) {
    const alertMessage = showError ?? false;
    if (window.ethereum) {
      if (walletAddress !== "") {
        // checkWl(walltetAddressSmall);
        if (alertMessage) alert("Wallet already connected");
        return walletAddress;
      }

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        //console.log(accounts[0]);
        setWalletAddress(accounts[0]);
        return accounts[0];
      } catch (error) {
        alert(error);
        return "";
      }
    } else {
      alert("Metamask not detected");
      return "";
    }
  }

  const animate = () => {
    const character = window?.document?.getElementById("character");
    const character2 = window?.document?.getElementById("character2");
    character?.classList?.remove("trans-left");
    character2?.classList?.remove("trans-right");
    character.classList.add("left-right-animation");
    character2.classList.add("right-left-animation");
  };

  //   const removeAnimation = () => {
  //     const character = window?.document?.getElementById("character");
  //     const character2 = window?.document?.getElementById("character2");
  //     character?.classList?.remove("trans-left");
  //     character2?.classList?.remove("trans-right");
  //     character?.classList?.remove("left-animation");
  //     character2?.classList?.remove("right-animation");
  //     character?.classList?.add("right-animation1");
  //     character2?.classList?.add("left-animation1");
  //   };

  const checkWl = async () => {
    let isWhiteList = false;
    let isSkullList = false;
    soundControl(true);

    const walleteAddress = await requestAccount();
    animate();
    setTimeout(() => {
      constants.whiteList.forEach((item) => {
        if (item.toLowerCase() === walleteAddress.toLowerCase()) {
          isWhiteList = true;
        }
      });
      constants.SkullLists.forEach((item) => {
        if (item.toLowerCase() === walleteAddress.toLowerCase()) {
          isSkullList = true;
        }
      });
      //console.log("is whitelist", isWhiteList);
      //console.log("is skullListed", isSkullList);
      if (isWhiteList && isSkullList) {
        alert(
          "You are in both whitelist and skulllist, please contact the team"
        );
      } else if (isWhiteList) {
        setWlState("wl");
      } else if (isSkullList) {
        setWlState("sl");
      } else {
        setWlState("none");
      }
    }, 1700);
  };

  const navbar = (isMobile) => {
    return (
      <div className="flex justify-between items-center nav-bar-animation w-[100vw] absolute top-0 pl-[2%] pr-[2%]">
        <img
          src={iSSlogo}
          className={isMobile ? "h-20" : "h-24 cursor-pointer"}
          onClick={() => {
            window.location.href = "/";
          }}
        />

        <div className="flex">
          <img
            src={soundOff}
            id="sound-icon"
            name="false"
            className={
              isMobile ? "h-10 mr-[30px]" : "h-14 mr-[60px] cursor-pointer"
            }
            onClick={soundControl}
          />
          <img
            src={wallet_Icon}
            className={isMobile ? "h-10" : "h-14 cursor-pointer"}
            onClick={requestAccount}
          />
        </div>
      </div>
    );
  };
  return (
    <div>
      <audio id="audio" src={homeAudio} loop />
      {window.innerWidth > 500 ? (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center main-web relative">
          <div className="fixed-postion-div">
            <Snowfall snowflakeCount={300} radius={[0.5, 1]} wind={[1.5, 4]} />
          </div>
          {navbar(false)}

          <div className="m-auto flex absolute bottom-0">
            <img
              src={man}
              alt="Man"
              id="character"
              className="h-[73vh] trans-left cursor-pointer"
              onClick={checkWl}
            />

            <img
              src={skull}
              onClick={checkWl}
              id="character2"
              className="h-[73vh] trans-right z-10 cursor-pointer"
            />
          </div>
          {wlState !== "" && (
            <div className="m-auto h-[73vh] justify-center items-center flex flex-col absolute bottom-0 fade-in">
              {wlState === "wl" && (
                <p className="atlanta-headline-font text-white text-4xl">
                  You are in <br /> OG list
                </p>
              )}
              {wlState === "sl" && (
                <p className="atlanta-headline-font text-white text-4xl">
                  You are in <br /> Skull list
                </p>
              )}
              {wlState === "none" && (
                <p className="atlanta-headline-font text-white text-4xl">
                  You aren't in <br /> OG/skull list
                </p>
              )}
            </div>
          )}
        </div>
      ) : (
        <div
          className="w-[100vw] h-[100vh] flex flex-col justify-center items-center relative"
          id="bg-container-mobile"
          style={{
            backgroundAttachment: "unset",
          }}
        >
          <div className="fixed-postion-div">
            <Snowfall snowflakeCount={100} radius={[0.5, 1]} wind={[1.5, 4]} />
          </div>
          {navbar(true)}
          <div className="m-auto flex absolute bottom-0 ">
            <img
              src={man}
              alt="Man"
              id="character"
              className="w-[40vw] trans-left"
              onClick={checkWl}
            />

            <img
              src={skull}
              onClick={checkWl}
              id="character2"
              className="w-[40vw] trans-right z-10"
            />
          </div>
          {wlState !== "" && (
            <div className="m-auto absolute bottom-[10%] z-[10] fade-in">
              {wlState === "wl" && (
                <p className="font-alphaEcho text-white text-2xl">
                  You are in <br /> OG list
                </p>
              )}
              {wlState === "sl" && (
                <p className="font-alphaEcho text-white text-2xl">
                  You are in <br /> Skull list
                </p>
              )}
              {wlState === "none" && (
                <p className="font-alphaEcho text-white text-2xl">
                  You aren't in <br /> OG/skull list
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
