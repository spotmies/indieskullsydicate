import man from "./assets/black_skull_image.png";
import "./App.css";
import { Animated } from "react-animated-css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import halfSkull from "./assets/right.png";
import halfMan from "./assets/left.png";
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
import flake1 from "./assets/flake1.png";
import flake2 from "./assets/flake2.png";
import flake3 from "./assets/flake3.png";
import img1 from "./assets/logo_images/1.png";
import img2 from "./assets/logo_images/2.png";
import img3 from "./assets/logo_images/3.png";
import img4 from "./assets/logo_images/4.png";
import img5 from "./assets/logo_images/4.png";
import img6 from "./assets/logo_images/6.png";
import img7 from "./assets/logo_images/7.png";
import img8 from "./assets/logo_images/8.png";
import img9 from "./assets/logo_images/9.png";
import img10 from "./assets/logo_images/10.png";
import img11 from "./assets/logo_images/11.png";
import img12 from "./assets/logo_images/12.png";
import img13 from "./assets/logo_images/13.png";
import img14 from "./assets/logo_images/14.png";
import img15 from "./assets/logo_images/16.png";
import img16 from "./assets/logo_images/16.png";
import img17 from "./assets/logo_images/18.png";
import img18 from "./assets/logo_images/18.png";
import img19 from "./assets/logo_images/19.png";
import img20 from "./assets/logo_images/20.png";
import arrow1 from "./assets/aroow1.png";
import arrow2 from "./assets/arrow2.png";
import Snowfall from "react-snowfall";

function SplashMob(props) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [showArrow, setshowArrow] = useState(true);
  const [isBottom, setIsBottom] = useState(false);
  const snowflake1 = document.createElement("img");
  snowflake1.src = flake1;
  const snowflake2 = document.createElement("img");
  snowflake2.src = flake2;
  const snowflake3 = document.createElement("img");
  snowflake3.src = flake3;

  const getImageByIndex = (index) => {
    switch (index) {
      case 1:
      case 0:
        return [img1, "100%"];
      case 2:
        return [img2, "100%"];
      case 3:
        return [img3, "100%"];
      case 4:
        return [img4, "100%"];
      case 5:
        return [img5, "100%"];
      case 6:
        return [img6, "100%"];
      case 7:
        return [img7, "100%"];
      case 8:
        return [img8, "100%"];
      case 9:
        return [img9, "100%"];
      case 10:
        return [img10, "100%"];
      case 11:
        return [img11, "100%"];
      case 12:
        return [img12, "100%"];
      case 13:
        return [img13, "100%"];
      case 14:
        return [img14, "100%"];
      case 15:
        return [img15, "100%"];
      case 16:
        return [img16, "100%"];
      case 17:
        return [img17, "100%"];
      case 18:
        return [img18, "90%"];
      case 19:
        return [img19, "70%"];
      case 20:
        return [img20, "20%"];
      default:
        return [img1, "100%"];
    }
  };

  const listImage = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

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

  useEffect(() => {
    if (props.isMobile) {
      if (isBottom) {
        setVisible(true);
        //console.log("mobile");
      }
      return;
    }
    const video = document.getElementById("splash-bg");
    if (isBottom) {
      // video.classList.add("splash-bg");
      video.play();
    } else {
      // video.classList.remove("splash-bg");
      video.pause();
    }
    video.onended = () => {
      // alert("video ended");
      props.changeScreen();
    };
  }, [isBottom]);

  const splitImage = () => {
    let character = window?.document?.getElementById("splash-logo");
    listImage.forEach((element, index) => {
      setTimeout(() => {
        character.src = element;
        if (index === listImage.length - 1) {
          // skullFlow.style.display = "none";
          // hideShowHalfSkull("block");
          // hideSkullFlow("none");
          // setVisible(true);
        }
      }, index * 60);
    });
  };

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        toggleImages();
      }, 1000);
    }
  }, [visible]);
  const scrollTitleEffect = () => {
    let character = window?.document?.getElementById("splash-logo");
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        // //console.log(i);
        if (character === null || character === undefined) return;
        character.src = getImageByIndex(i)[0];
        character.style.opacity = getImageByIndex(i)[1];
        character.style.zIndex = 999;
        if (i >= 19) {
          setIsBottom(true);
        }
      }, i * 30);
    }
  };
  let scrollEffect = false;
  useEffect(() => {
    window.onscroll = (e) => {
      // return;
      // check user scroll to bottom of the page
      // //console.log(
      //   e?.target?.scrollingElement?.scrollHeight -
      //     e?.target?.scrollingElement?.scrollTop,
      //   window.innerHeight
      // );
      // //console.log(e?.target?.scrollingElement?.scrollTop);
      if (e?.target?.scrollingElement?.scrollTop > 30 && !scrollEffect) {
        scrollTitleEffect();
        setshowArrow(false);
        //console.log("scrolling effect");
        scrollEffect = true;
      }
      return;

      if (
        e?.target?.scrollingElement?.scrollHeight -
          e?.target?.scrollingElement?.scrollTop <=
        window.innerHeight + 1
      ) {
        //console.log("bottom");
        // document.body.style.overflow = "hidden";
        setIsBottom(true);
      }
      // else setIsBottom(false);

      let y = e?.target?.scrollingElement?.scrollTop;

      const label = Math.min(Math.floor(y / 30) + 1, 20);
      //console.log(label);

      if (label > 1) {
        setshowArrow(false);
      } else if (label === 1) {
        setshowArrow(true);
      }
      let character = window?.document?.getElementById("splash-logo");
      let background_container = window?.document?.getElementById(
        "bg-container-splash"
      );
      // background_container.style.opacity = 1 - label / 30;
      character.src = getImageByIndex(label)[0];
      // character.style.opacity = getImageByIndex(label)[1];
    };
    let state = true;
    setInterval(() => {
      let character = window?.document?.getElementById("arrow");
      // //console.log(character?.src);
      if (character === null || character === undefined) return;
      if (state) {
        character.src = arrow1;
      } else {
        character.src = arrow2;
      }
      state = !state;
    }, 300);
  }, []);

  const hideShowHalfSkull = (display) => {
    var character = window?.document?.getElementById("character");
    var character2 = window?.document?.getElementById("character2");
    character.style.display = display;
    character2.style.display = display;
  };

  const toggleImages = () => {
    const skullFlow = window?.document?.getElementById("skullflow");
    skullImage.forEach((element, index) => {
      setTimeout(() => {
        skullFlow.src = element;
        if (index === skullImage.length - 1) {
          skullFlow.style.display = "none";
          hideShowHalfSkull("block");
          // hideShowHalfSkull("block");
          // hideSkullFlow("none");
          // setVisible(true);
        }
      }, index * 180);
    });
  };

  const animate = () => {
    //  playAudio();
    var character = window?.document?.getElementById("character");
    var character2 = window?.document?.getElementById("character2");
    character?.classList?.remove("trans-left-mob");
    character2?.classList?.remove("trans-right-mob");
    character.classList.add("left-animation-mob");
    character2.classList.add("right-animation-mob");
    setTimeout(() => {
      props.changeScreen();
    }, 600);

    //  setTimeout(() => {
    //    setshowMint(true);
    //    setshowElements(true);
    //  }, 100);
  };

  return (
    <div
      id="bg-container-splash"
      className={isBottom ? "App relative h-[100vh]" : "App relative h-[150vh]"}
    >
      <div
        className="fixed-postion-div"
        style={{ transform: "rotate(180deg)" }}
      >
        <Snowfall
          snowflakeCount={10}
          color="#ffc107"
          images={[snowflake1, snowflake2, snowflake3]}
          radius={[7.5, 10]}
          speed={[1.5, 2]}
          wind={[1.5, 2]}
        />
      </div>
      <div
        // id="bg-container-splash"
        className={`flex flex-col h-screen z-40 ${
          isBottom ? "h-[100vh]" : "h-[150vh]"
        } `}
      >
        {showArrow && (
          <img
            src={arrow1}
            id="arrow"
            className="h-[30px] w-[22px] sticky top-[95%] right-[50%] left-[45%]"
          />
        )}
        <div
          className={`flex justify-center flex-grow w-full overflow-y-auto ${
            !visible ? "items-center" : "items-end"
          }`}
        >
          <div
            id="defaultModal"
            tabIndex="-1"
            className={`overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex ${
              props.isMobile ? "top-[40%]" : "top-0"
            } `}
            aria-modal="true"
            role="dialog"
          >
            {!isBottom && (
              <>
                <img
                  src={img1}
                  alt="Man"
                  id="splash-logo"
                  className="max-h-[90vh] m-auto w-[65vw]"
                  // onClick={props.changeScreen}
                />
              </>
            )}
          </div>
          <Animated
            animationIn="slideInUp"
            animationOut="slideOutDown"
            isVisible={visible}
            style={visible ? null : { display: "none" }}
          >
            <img
              src={man}
              alt="Man"
              id="skullflow"
              className="h-[400px] z-50 opacity-100"
            />
          </Animated>
          <div className="flex">
            <img
              src={halfMan}
              alt="Man"
              id="character"
              className="h-[400px] trans-left-mob"
              style={{ display: "none" }}
              onClick={animate}
            />

            <img
              src={halfSkull}
              onClick={animate}
              id="character2"
              className="h-[400px] trans-right-mob z-10"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
      {/* {!props.isMobile && (
        <video
          src={syndicateVideo}
          id="splash-bg"
          muted
          className="m-auto z-10"
        />
      )} */}
    </div>
  );
}

export default SplashMob;
