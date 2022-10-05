import React, { useState, useEffect } from "react";

import { Animated } from "react-animated-css";
import Splash from "./Splash";

import SplashMob from "./splashMob";
import skullGif from "./assets/splash.gif";

import Parent from "./utils/getContract";
import { Buffer } from "buffer/";
import ReactGA from "react-ga";

window.Buffer = window.Buffer || Buffer;

// const TRACKING_ID = "UA-230631230-4"; // OUR_TRACKING_ID for www
const TRACKING_ID = "UA-230631230-5"; // OUR_TRACKING_ID for mint

ReactGA.initialize(TRACKING_ID);

export default function Main() {
  const [screen, setScreen] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    //console.log(screen);
    //console.log(window.innerWidth);
  }, [screen]);

  const backup1 = "https://mint.indieskullsyndicate.xyz";
  const backup2 = "https://indie-skull-2.web.app";
  const backup3 = "https://www.indieskullsyndicate.xyz";
  const backup4 = "https://genesis.indieskullsyndicate.xyz";

  useEffect(() => {
    // redirect to youtube.com

    // window.location.href = backup1;

    setTimeout(() => {
      // const mainWeb = document?.getElementById("main-web");
      // if (mainWeb !== null) {
      //   mainWeb.classList.remove("main-web-white");
      //   mainWeb.classList.add("main-web");
      // }
      setShowSplash(false);
      console.log("splash");
    }, 1500);

    setTimeout(() => {
      const mainWeb = document?.getElementById("main-web");
      if (mainWeb !== null) {
        mainWeb.classList.remove("main-web-white");
        mainWeb.classList.add("main-web");
      }
    }, 2000);
  }, []);

  return (
    <div>
      {showSplash ? (
        <div style={{ background: "black", height: "100vh", width: "100%" }}>
          <img src={skullGif} className="center-hor-ver" />
        </div>
      ) : (
        <div>
          {window.innerWidth > 500 ? (
            <div id="main-web" className="relative main-web-white">
              {/* <div className="absolute bottom-[4%] right-[2%]">{socialMedia()}</div> */}
              {screen === 0 && (
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  animationInDuration={300}
                  animationOutDuration={1000}
                  isVisible={screen === 0}
                >
                  <Splash
                    isMobile={false}
                    changeScreen={() => {
                      setScreen(2);
                    }}
                  />
                </Animated>
              )}

              {screen === 2 && (
                <Parent isMobile={false} />
                // <Landing loadImage={screen === 2 ? true : false} />
              )}
            </div>
          ) : (
            <div>
              {screen === 0 && (
                <SplashMob
                  isMobile={true}
                  changeScreen={() => {
                    setScreen(2);
                  }}
                />
              )}
              {screen === 2 && (
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible={true}
                >
                  <Parent isMobile={true} />
                  {/* <LandingMobile /> */}
                </Animated>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
