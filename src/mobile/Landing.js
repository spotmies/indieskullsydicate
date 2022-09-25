import iSSlogo from "../assets/logo.png";
import "./AppMobile.css";
import {useEffect, useState} from "react";
import roadmapLogo from "../assets/roadmap.png";
import syndicate from "../assets/thesyndicate.png";
import shipHover from "../assets/Group 26.png";
import discordHover from "../assets/Group 18.png";
import twitterHover from "../assets/Group 21.png";
import mint from "../assets/mint.png";

function LandingMobile(props) {
    const [visible, setVisible] = useState(false);
    const [showMint, setshowMint] = useState(true);
    const [showElements, setshowElements] = useState(false);
    const [showRoadMap, setShowRoadMap] = useState(false);
    const [showStory, setShowStory] = useState(false);
    const [screen, setScreen] = useState(0);


    const animate = () => {

        setTimeout(() => {
            setshowMint(true);
            setshowElements(true);
        }, 100);
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
    }, [showElements]);


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
        }, 1000);
    };

    setTimeout(() => setVisible(true), 650);
    return (
        <div className="App relative">
            <div id="bg-container-mobile" className="flex flex-col h-screen">
                <div className="py-8 mx-4">
                    {/* <Animated
            animationIn="slideInDown"
            animationOut="slideOutUp"
            isVisible={visible}
          > */}
                    <div className="flex justify-between items-center">
                        <img src={iSSlogo} className="h-20"></img>


                        {socialMedia()}
                    </div>
                    {/* </Animated> */}
                </div>

                {screen === 0 && mintSoon()}
                    {screen === 1 && theStory()}
                    {screen === 2 && theRoadMap()}

                <div className="flex justify-center items-end w-full">


                    {roadmapStorybtn()}
                </div>
            </div>
        </div>
    );

    function mintSoon() {
        return (
            <div className="flex flex-col flex-grow items-center justify-center w-full justify-center">
                {showMint && (
                    <div className="flex flex-row flex-grow justify-center items-center">
                        <h1 className="text-white font-alphaEcho text-4xl">
                            Mint Date<br></br>Will be <br /> announced soon
                        </h1>
                    </div>
                )}
            </div>
        );
    }

    function theRoadMap() {
        return (
            <div className="flex flex-col flex-grow m-auto overflow-scroll w-full px-4">
                <h1 className="text-white font-alphaEcho text-4xl">Roadmap</h1>

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
        );
    }
    function theStory() {
        return (
            <div className="flex flex-col flex-grow m-auto overflow-scroll w-full px-4">
                <h1 className="text-white font-alphaEcho text-4xl">Story</h1>

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
        );
    }

    function roadmapStorybtn() {
        return (
            <div className="flex items-center justify-evenly w-full my-16">
                <img src={mint} className={`${screen === 1 || screen === 2 ? "w-20": "w-28"} w-20 cursor-pointer`}
                     onClick={()=>toggleScreen(0)}/>
                <img
                    src={syndicate}
                    className={`${screen === 0 || screen === 2 ? "w-20": "w-28"} w-20 cursor-pointer`}
                    onClick={()=>toggleScreen(1)}
                >

                </img>

                <img
                    src={roadmapLogo}
                    className={`${screen === 0 || screen === 1 ? "w-20": "w-28"} w-20 cursor-pointer`}
                    onClick={()=>toggleScreen(2)}
                ></img>
            </div>
        );
    }

    function socialMedia() {
        return (
            <div className="flex items-center justify-evenly">

                    <img src={shipHover} className="w-10 m-4 cursor-pointer"></img>


                <img src={twitterHover} className="w-10 m-4 cursor-pointer"></img>

                <img src={discordHover} className="w-10 m-4 cursor-pointer"></img>
            </div>
        );
    }
}

export default LandingMobile;