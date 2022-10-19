// import man from "./assets/black-man.png";
// import "./App.css";
// import flake1 from "./assets/flake1.png";
// import flake2 from "./assets/flake2.png";
// import flake3 from "./assets/flake3.png";
// import { Animated } from "react-animated-css";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import img1 from "./assets/logo_images/1.png";
// import img2 from "./assets/logo_images/2.png";
// import img3 from "./assets/logo_images/3.png";
// import img4 from "./assets/logo_images/4.png";
// import img5 from "./assets/logo_images/4.png";
// import img6 from "./assets/logo_images/6.png";
// import img7 from "./assets/logo_images/7.png";
// import img8 from "./assets/logo_images/8.png";
// import img9 from "./assets/logo_images/9.png";
// import img10 from "./assets/logo_images/10.png";
// import img11 from "./assets/logo_images/11.png";
// import img12 from "./assets/logo_images/12.png";
// import img13 from "./assets/logo_images/13.png";
// import img14 from "./assets/logo_images/14.png";
// import img15 from "./assets/logo_images/16.png";
// import img16 from "./assets/logo_images/16.png";
// import img17 from "./assets/logo_images/18.png";
// import img18 from "./assets/logo_images/18.png";
// import img19 from "./assets/logo_images/19.png";
// import img20 from "./assets/logo_images/20.png";
// import arrow1 from "./assets/aroow1.png";
// import arrow2 from "./assets/arrow2.png";
// import syndicateVideo from "./assets/new_blast.mp4";
// import Snowfall from "react-snowfall";

// function Splash(props) {
//   const navigate = useNavigate();
//   const [visible, setVisible] = useState(false);
//   const [showArrow, setshowArrow] = useState(true);
//   const [isBottom, setIsBottom] = useState(false);
//   const snowflake1 = document.createElement("img");
//   snowflake1.src = flake1;
//   const snowflake2 = document.createElement("img");
//   snowflake2.src = flake2;
//   const snowflake3 = document.createElement("img");
//   snowflake3.src = flake3;

//   const getImageByIndex = (index) => {
//     switch (index) {
//       case 1:
//       case 0:
//         return [img1, "100%", "100%"];
//       case 2:
//         return [img2, "100%", "90%"];
//       case 3:
//         return [img3, "100%", "70%"];
//       case 4:
//         return [img4, "100%", "30%"];
//       case 5:
//         return [img5, "100%", "20%"];
//       case 6:
//         return [img6, "100%", "10%"];
//       case 7:
//         return [img7, "100%", "10%"];
//       case 8:
//         return [img8, "100%", "10%"];
//       case 9:
//         return [img9, "100%", "10%"];
//       case 10:
//         return [img10, "100%", "10%"];
//       case 11:
//         return [img11, "100%", "10%"];
//       case 12:
//         return [img12, "100%", "0%"];
//       case 13:
//         return [img13, "100%", "0%"];
//       case 14:
//         return [img14, "100%", "0%"];
//       case 15:
//         return [img15, "100%", "0%"];
//       case 16:
//         return [img16, "100%", "0%"];
//       case 17:
//         return [img17, "100%", "0%"];
//       case 18:
//         return [img18, "100%", "0%"];
//       case 19:
//         return [img19, "100%", "0%"];
//       case 20:
//         return [img20, "100%", "0%"];
//       default:
//         return [img1, "100%", "100%"];
//     }
//   };

//   useEffect(() => {
//     const video = document.getElementById("splash-bg");
//     if (props.isMobile) {
//       setVisible(true);
//       return;
//     }
//     if (isBottom) {
//       // video.classList.add("splash-bg");
//       video?.play();
//       video.volume = 1;
//     } else {
//       // video.classList.remove("splash-bg");
//       video?.pause();
//     }
//     video.onended = () => {
//       // alert("video ended");

//       props.changeScreen();
//     };
//   }, [isBottom]);

//   const scrollTitleEffect = () => {
//     let character = window?.document?.getElementById("splash-logo");
//     for (let i = 0; i < 20; i++) {
//       setTimeout(() => {
//         // console.log(i);
//         if (character === null || character === undefined) return;
//         character.src = getImageByIndex(i)[0];
//         character.style.opacity = getImageByIndex(i)[1];
//         character.style.zIndex = 999;
//         if (i >= 19) {
//           setIsBottom(true);
//         }
//       }, i * 30);
//     }
//   };
//   let scrollEffect = false;
//   useEffect(() => {
//     window.onscroll = (e) => {
//       // check user scroll to bottom of the page
//       // console.log(e?.target?.scrollingElement?.scrollTop);
//       if (e?.target?.scrollingElement?.scrollTop > 50 && !scrollEffect) {
//         scrollTitleEffect();
//         setshowArrow(false);
//         console.log("scrolling effect");
//         scrollEffect = true;
//       }
//       return;
//       // console.log(
//       //   e?.target?.scrollingElement?.scrollHeight -
//       //     e?.target?.scrollingElement?.scrollTop,
//       //   window.innerHeight
//       // );
//       if (
//         e?.target?.scrollingElement?.scrollHeight -
//           e?.target?.scrollingElement?.scrollTop <=
//         window.innerHeight + 1
//       ) {
//         console.log("bottom");
//         setIsBottom(true);
//       }
//       // scroll down logic

//       let y = e?.target?.scrollingElement?.scrollTop;

//       const label = Math.min(Math.floor(y / 30) + 1, 20);
//       // console.log(label);
//       if (label > 1) {
//         setshowArrow(false);
//       } else if (label === 1) {
//         setshowArrow(true);
//       }
//       let character = window?.document?.getElementById("splash-logo");
//       // background_container.style.opacity = 1 - label / 30;
//       if (character === null || character === undefined) return;
//       character.src = getImageByIndex(label)[0];
//       character.style.opacity = getImageByIndex(label)[1];
//       character.style.zIndex = 999;
//       if (label >= 20) {
//         setIsBottom(true);
//       }
//       // background_container.style.opacity = getImageByIndex(label)[2];
//     };
//     let state = true;
//     setInterval(() => {
//       let character = window?.document?.getElementById("arrow");
//       // console.log(character?.src);
//       if (character === null || character === undefined) return;
//       if (state) {
//         character.src = arrow1;
//       } else {
//         character.src = arrow2;
//       }
//       state = !state;
//     }, 300);
//   }, []);

//   return (
//     <div className="App h-[200vh] relative">
//       {!isBottom && (
//         <div
//           className="fixed-postion-div"
//           style={{ transform: "rotate(180deg)" }}
//         >
//           <Snowfall
//             snowflakeCount={30}
//             color="#ffc107"
//             images={[snowflake1, snowflake2, snowflake3]}
//             radius={[7.5, 10]}
//             speed={[1.5, 2]}
//             wind={[1.5, 2]}
//           />
//         </div>
//       )}
//       <div id="bg-container-splash-web" className="flex flex-col h-screen z-40">
//         {showArrow && (
//           <img
//             src={arrow1}
//             id="arrow"
//             className="h-[30px] w-[26px] sticky top-[95%] right-[50%] left-[50%]"
//           />
//         )}
//         <div
//           className={`flex justify-center flex-grow w-full overflow-y-auto ${
//             !visible ? "items-center" : "items-end"
//           }`}
//         >
//           <div
//             id="defaultModal"
//             tabIndex="-1"
//             className={`overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex ${
//               props.isMobile ? "top-[40%]" : "top-0"
//             } `}
//             aria-modal="true"
//             role="dialog"
//           >
//             {!isBottom && (
//               <img
//                 src={img1}
//                 alt="Man"
//                 id="splash-logo"
//                 className="max-h-[90vh] m-auto "
//                 // onClick={props.changeScreen}
//                 // onClick={() => {
//                 //   setVisible(true);
//                 // }}
//               />
//             )}
//           </div>
//           <Animated
//             animationIn="slideInUp"
//             animationOut="slideOutDown"
//             isVisible={visible}
//             style={visible ? null : { display: "none" }}
//           >
//             <img
//               src={man}
//               alt="Man"
//               className="h-172"
//               onClick={props.changeScreen}
//             />
//           </Animated>
//         </div>
//       </div>
//       {!props.isMobile && (
//         <video
//           src={syndicateVideo}
//           muted
//           id="splash-bg"
//           className="m-auto splash-bg"
//         />
//       )}
//     </div>
//   );
// }

// export default Splash;
