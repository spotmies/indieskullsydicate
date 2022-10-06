import iSSlogo from "../assets/logo.png";
import "./AppMobile.css";
import { useEffect, useState } from "react";
import roadmapLogo from "../assets/roadmap.png";
import syndicate from "../assets/thesyndicate.png";
import shipHover from "../assets/hower_opensea.png";
import discordHover from "../assets/hower_discord.png";
import twitterHover from "../assets/hower_twitter.png";
import mint from "../assets/mint.png";
import { Animated } from "react-animated-css";
import Snowfall from "react-snowfall";
import mint_hover from "../assets/hower_mint.png";
import double_skull from "../assets/double_skull.png";
import soundOff from "../assets/skull_music_off.png";
import baby_thug from "../assets/baby_thug_syndicate.png";
import collabs from "../assets/collabs.png";
import holder_benefits from "../assets/holder_benefits.png";
import roadmap_2 from "../assets/Road_map_2.0.png";
import wallet_Icon from "../assets/metamask_icon.png";
const getDateDiff = (date1, date2) => {
  const diff = new Date(date2.getTime() - date1.getTime());
  return {
    year: diff.getUTCFullYear() - 1970,
    month: diff.getUTCMonth(),
    day: diff.getUTCDate() - 1,
    hour: diff.getUTCHours(),
    minute: diff.getUTCMinutes(),
    second: diff.getUTCSeconds(),
  };
};
function LandingMobile(props) {
  const futureDate = new Date(1664978400000);

  const [visible, setVisible] = useState(false);
  const [showMint, setshowMint] = useState(true);
  const [showElements, setshowElements] = useState(false);
  const [showRoadMap, setShowRoadMap] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [screen, setScreen] = useState(0);
  const [mintCount, setMintCount] = useState(1);
  const [walletAddress, setWalletAddress] = useState("");
  const [timeStamp, setTimeStamp] = useState(futureDate);
  const [mintStarted, setMintStarted] = useState(false);
  const [diff, setDiff] = useState({
    day: 0,
    hour: 0,
    minute: 0.0,
    month: 0,
    second: 0.0,
    year: 0,
  });

  const animate = () => {
    setTimeout(() => {
      setshowMint(true);
      setshowElements(true);
    }, 10);
  };

  const animate2 = () => {
    setTimeout(() => {
      setShowRoadMap(true);
    }, 400);
  };
  const animate3 = () => {
    setTimeout(() => {
      setShowStory(true);
    }, 400);
  };

  useEffect(() => {
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
    setTimeout(() => {
      if (
        window?.ethereum &&
        window?.ethereum?.selectedAddress &&
        walletAddress === ""
      ) {
        setWalletAddress(window?.ethereum?.selectedAddress);
      }
    }, 1000);
  }, [showElements]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDiff(getDateDiff(new Date(), timeStamp));
      if (new Date() > timeStamp) {
        //console.log("time is up");
        setMintStarted(true);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeStamp]);

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

  const toggleScreen = (scr) => {
    if (scr === screen) return;

    if (scr === 0) {
      setShowRoadMap(false);
      setShowStory(false);
    } else if (scr === 1) {
      setshowMint(false);
      setShowStory(false);
    } else if (scr === 2) {
      setShowRoadMap(false);
      setshowMint(false);
    }

    //0 - mint
    //1 - roadmap
    //2 - story
    setTimeout(() => {
      setScreen(scr);
      setTimeout(() => {
        if (scr === 0) {
          // setShowRoadMap(false);
          // setShowStory(false);
          animate();
        } else if (scr === 1) {
          // setShowStory(false);
          animate2();
        } else if (scr === 2) {
          // setShowRoadMap(false);
          animate3();
        }
      }, 500);
    }, 100);
  };

  setTimeout(() => setVisible(true), 650);
  const onclickMint = () => {
    //console.log("mint");
    //console.log(mintCount);
  };

  return (
    <div className="App relative">
      <div className="fixed-postion-div">
        <Snowfall snowflakeCount={100} radius={[0.5, 1]} wind={[0.5, 2.5]} />
      </div>
      <div id="bg-container-mobile" className="flex flex-col h-screen">
        <div className="py-8 mx-4">
          {/* <Animated
            animationIn="slideInDown"
            animationOut="slideOutUp"
            isVisible={visible}
          > */}
          <div className="flex justify-between items-center w-full">
            <Animated
              animationIn="slideInDown"
              animationOut="slideOutUp"
              animationInDuration={1000}
              animationOutDuration={1000}
              isVisible={true}
            >
              <img src={iSSlogo} className="h-16" />
            </Animated>

            {socialMedia()}
          </div>
          {/* </Animated> */}
        </div>
        <div className="h-[60vh] absoulute bottom-[130px]">
          {screen === 0 && mintSoon()}
          {screen === 1 && theStory()}
          {screen === 2 && theRoadMap()}
        </div>

        <div className=" absolute bottom-[60px] w-full">
          {roadmapStorybtn()}
        </div>
      </div>
    </div>
  );

  function mintSoon() {
    const mintBuy = (
      <div className=" flex flex-col m-auto w-[100%] justify-evenly h-[40vh] items-center fade-in">
        <h1 className="text-white atlanta-headline-font  text-4xl">
          SELECT SKULLS<br></br> TO MINT
        </h1>
        <div className="flex m-auto w-[90%] justify-around items-center">
          <img
            src={soundOff}
            style={
              mintCount === 1
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0.4,
                  }
            }
            className="h-14 cursor-pointer"
            onClick={() => {
              setMintCount(1);
            }}
          />
          <img
            src={double_skull}
            style={
              mintCount === 2
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0.4,
                  }
            }
            className="h-10 cursor-pointer"
            onClick={() => {
              setMintCount(2);
            }}
          />
        </div>
        <img
          src={mint}
          onClick={() => {
            props.onClickMint && props.onClickMint(mintCount);
          }}
          className="w-20 cursor-pointer"
          onMouseOver={(e) => {
            e.currentTarget.src = mint_hover;
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = mint;
          }}
        />
      </div>
    );

    const soonContent = (
      <div className="flex flex-row flex-grow justify-center items-center">
        <h1 className="text-white atlanta-headline-font text-4xl">
          Mint Date<br></br>Will be <br /> announced soon
        </h1>
      </div>
    );
    const mintTimer = (
      <div className="flex flex-row flex-grow justify-center items-center">
        <h1 className="text-white atlanta-headline-font text-4xl">
          MINT STARTS <br /> IN <br /> {diff?.day}D:{diff?.hour}H:
          {diff?.minute}M:
          {diff?.second}S
        </h1>
      </div>
    );
    return (
      <div className="flex flex-col flex-grow items-center justify-center w-full h-full justify-center">
        {showMint && (
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInDuration={700}
            animationOutDuration={0}
            isVisible={true}
          >
            {soonContent}
            {/* {mintStarted ? mintBuy : mintTimer} */}
            {/* {mintBuy} */}
          </Animated>
        )}
      </div>
    );
  }

  function theRoadMap() {
    return (
      <>
        {/* <h1 className="text-white font-alphaEcho text-4xl">Roadmap</h1> */}
        <div className="flex flex-col flex-grow m-auto overflow-scroll w-full px-4 h-full">
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInDuration={700}
            animationOutDuration={400}
            isVisible={true}
          >
            {/* <p className="font-aveny text-white text-clip mt-8 text-justify">
      </p> */}

            <div className="relative ">
              {/* <p className="font-aveny text-center text-3xl px-4 py-3 flex text-white items-center justify-center font-bold  backdrop-blur-md ">
                COLLABS & PARTNERS
              </p> */}
              <img src={collabs} className="h-8 m-auto" />
              <p className="font-aveny text-white text-clip mt-8 text-justify pb-[60px]">
                Post-mint we will grow ISS as a brand through collabs in the
                tech and fashion world.
              </p>
            </div>
            <div className="relative">
              {/* <p className="font-aveny text-center text-3xl px-4 py-3 flex text-white items-center justify-center font-bold  backdrop-blur-md ">
                HOLDER BENEFITS
              </p> */}
              <img src={holder_benefits} className="h-8 m-auto" />
              <p className="font-aveny text-white text-clip mt-8 text-justify pb-[60px]">
                ISS holders will have access to enter raffles for whitelist
                spots for big & hyped projects in the space via Indie Alpha,
                which will contain some very big names in the space!
              </p>
            </div>
            <div className="relative">
              {/* <p className="font-aveny text-center text-3xl px-4 py-3 flex text-white items-center justify-center font-bold  backdrop-blur-md ">
                BABY THUG SYNDICATE
              </p> */}
              <img src={baby_thug} className="h-8 m-auto" />
              <p className="font-aveny text-white text-clip mt-8 text-justify pb-[60px]">
                Zoople will encounter a new challenge on his journey in the form
                of a mysterious package discovered in one of the dimensions.
                Each Zoople will stumble across a fleet of baby thugs. iSS
                holders will get auto-whitelist for these.
              </p>
            </div>
            <div className="relative pb-[60px]">
              {/* <p className="font-aveny text-center text-3xl px-4 py-3 flex text-white items-center justify-center font-bold  backdrop-blur-md ">
                ROADMAP 2.0
              </p> */}
              <img src={roadmap_2} className="h-8 m-auto" />
              <p className="font-aveny text-white text-clip mt-8 text-justify ">
                Where the graft starts, once the above phases have been hit and
                acheived with success.
              </p>
            </div>
          </Animated>
        </div>
      </>
    );
  }
  function theStory() {
    return (
      <>
        {/* <h1 className="text-white font-alphaEcho text-4xl">Story</h1> */}
        <img src={syndicate} className="w-24 m-auto" />
        <div className="flex flex-col flex-grow m-auto overflow-scroll w-full px-4 h-full">
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInDuration={700}
            animationOutDuration={400}
            isVisible={true}
          >
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
              <br></br>The question is which side has more control over the
              other and what are their goals?
              <br></br>
              <br></br>No-one is really sure how Zoople came to exist, as even
              his existence in and of himself is contradictory and nonsensical;
              the combination of the living and the unexplainable seems like
              nothing more than a myth.
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
              <br></br>Regardless of where this mysterious wanderer came from
              and where he is, it doesn't change the fact that his mere
              existence is a wonder on its own.
              <br></br>
              <br></br>Zoople will regularly encounter himself. Some of the
              meetings end in friendship, others in aggression. The sad thing
              is, they don't last forever and no matter what happens - each
              limbo will be returned to their own dimension at any time to wait
              for another time shift, wander their world and hope their bodies
              will continue to get along.
              <br></br>
              <br></br>Chances of the same Zoople's meeting again? How long is a
              piece of string? More importantly, how many dimensions are there?
              All we know is if a Zoople did ever manage to meet himself more
              than once, if they don't kill each other... they might just end up
              getting onto something.
              <br></br>
              <br></br>Is this what the Indie Skull Syndicate is meant to do?
              Why do they call themselves this and what will they discover?
              <br></br>
              <br></br>There's only one way to find out and that is by joining
              the syndicate yourself and embarking on your journey with your own
              Zoople.
            </p>
          </Animated>
        </div>
      </>
    );
  }

  function roadmapStorybtn() {
    return (
      <Animated
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <div className="flex items-center justify-evenly w-full">
          <img
            src={mint}
            className={`${
              screen === 1 || screen === 2 ? "w-10" : "size-animation"
            }`}
            onClick={() => toggleScreen(0)}
          />
          <img
            src={syndicate}
            className={`${
              screen === 0 || screen === 2 ? "w-14" : "size-animation1"
            }`}
            onClick={() => toggleScreen(1)}
          />

          <img
            src={roadmapLogo}
            className={`${
              screen === 0 || screen === 1 ? "w-14" : "size-animation1"
            }`}
            onClick={() => toggleScreen(2)}
          />
        </div>
      </Animated>
    );
  }

  function socialMedia() {
    return (
      <Animated
        animationIn="slideInDown"
        animationOut="slideOutUp"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <div className="flex items-center justify-evenly">
          <img
            src={shipHover}
            className="w-7 m-2"
            onClick={() => {
              window.open(
                "https://opensea.io/collection/indie-skull-syndicate-genesis"
              );
            }}
          />

          <img
            src={twitterHover}
            className="w-7 m-2"
            onClick={() =>
              window.open("https://twitter.com/iskullsyndicate", "_blank")
            }
          />

          <img
            src={discordHover}
            className="w-7 m-2"
            onClick={() =>
              window.open("https://discord.gg/UxfD7g8JYp", "_blank")
            }
          />
          <img src={wallet_Icon} className="w-8 m-2" onClick={requestAccount} />
        </div>
      </Animated>
    );
  }
}

export default LandingMobile;
