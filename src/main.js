import React, { useState, useEffect } from "react";
import App from "./App";
import Landing from "./Landing";
import Roadmap from "./Roadmap";
import Splash from "./Splash";
import Story from "./Story";
import ship from "./assets/ship-icon.png";
import discord from "./assets/discord.png";
import twitter from "./assets/twitter.png";
import SplashMobile from "./mobile/Splash-Mobile";
import AppMobile from "./mobile/App";
import LandingMobile from "./mobile/Landing";
import StoryMobile from "./mobile/Story";
import RoadmapMobile from "./mobile/RoadmapMobile";

export default function Main() {
  const [screen, setScreen] = useState(0);
  useEffect(() => {
    console.log(screen);
    console.log(window.innerWidth);
  }, [screen]);
  function socialMedia() {
    return (
      <div className="my-32 z-[9]">
        <img src={ship} className="w-16 m-4 cursor-pointer"></img>

        <img src={twitter} className="w-16 m-4 cursor-pointer"></img>

        <img src={discord} className="w-16 m-4 cursor-pointer"></img>
      </div>
    );
  }
  return (
    <div>
      {window.innerWidth > 500 ? (
        <div className="relative">
          {/* <div className="absolute bottom-[4%] right-[2%]">{socialMedia()}</div> */}
          {screen === 0 && (
            <Splash
              isMobile={false}
              changeScreen={() => {
                setScreen(2);
              }}
            />
          )}
          {screen === 2 && (
            <Landing
              changeScreen={(scr) => {
                if (scr === "story") {
                  setScreen(3);
                } else if (scr === "roadmap") {
                  setScreen(4);
                } else if (scr === "mint") {
                  setScreen(2);
                }
              }}
            />
          )}
        </div>
      ) : (
        <div>
          {screen === 0 && (
            <Splash
              isMobile={true}
              changeScreen={() => {
                setScreen(2);
              }}
            />
          )}
          {screen === 1 && (
            <AppMobile
              changeScreen={() => {
                setScreen(2);
              }}
            />
          )}
          {screen === 2 && (
            <LandingMobile
              changeScreen={(scr) => {
                if (scr === "story") {
                  setScreen(3);
                } else if (scr === "roadmap") {
                  setScreen(4);
                } else if (scr === "mint") {
                  setScreen(2);
                }
              }}
            />
          )}

        </div>
      )}
    </div>
  );
}