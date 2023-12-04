import React, { useState, useEffect } from "react";
import SmartSlider from "react-smart-slider";
import classes from "./SlideShow.module.css";
import { Link } from "react-router-dom";

//Make a list of captions for the gallery. This will be the content that will be displayed.
const captions = [
  {
    title: "Welcome to Poppin Sodas",
    description: "Popping off since 2023.",
    link: null,
  },
  {
    title: "Want something New?",
    description: "Try our drink of the month today!",
    link: "/products/pm1",
  },
  {
    title: "Feeling Creative?",
    description: "Customize your own soda today!",
    link: "/products/custom",
  },
];

//This caption is special because it does not have a link the the normal Caption function!
const WelcomeCaption = ({ caption }) => (
  <div className={classes.welcomeCaption}>
    <h1>{caption.title}</h1>
    <p>{caption.description}</p>
  </div>
);

const Caption = ({ caption }) => (
  <div className={classes.caption}>
    <Link to={caption.link}>
      <h1>{caption.title}</h1>
      <p>{caption.description}</p>
    </Link>
  </div>
);

const SlideShow = () => {
  //Variables
  const [isMobile, setIsMobile] = useState(false);
  const [windowHeight, setHeight] = useState(650);

  //Choose the screen size and let the component know if th escreen changes.  This will help the slideshow size a little better.
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (isMobile) {
      setHeight(550);
    } else {
      setHeight(650);
    }
  }, [windowHeight, isMobile]);

  const slidesArray = [
    {
      url: "../images/customSodas.jpg",

      // (Optional) Set if you want to add any content on your slide
      childrenElem: <WelcomeCaption caption={captions[0]} />,
    },
    {
      url: "https://i.imgur.com/E8gkF2f.jpg",
      childrenElem: <Caption caption={captions[1]} />,
    },
    {
      url: "https://i.imgur.com/t2a1zLi.jpg",
      childrenElem: <Caption caption={captions[2]} />,
    },
  ];

  return (
    <SmartSlider
      slides={slidesArray}
      buttonShape="square" // round or square
      height={windowHeight}
      autoSlideInterval={7000}
      autoSlide={true}
    />
  );
};

export default SlideShow;
// import React, { useState, useEffect } from "react";
// import SmartSlider from "react-smart-slider";
// import classes from "./SlideShow.module.css";
// import { Link } from "react-router-dom";

// //Make a list of captions for the gallery. This will be the content that will be displayed.
// const captions = [
//   {
//     title: "Welcome to Poppin Sodas",
//     description: "Popping off since 2023.",
//     link: null,
//     image: require("../../images/IMG_2244.jpg")
//   },
//   {
//     title: "Want something New?",
//     description: "Try our drink of the month today!",
//     link: "/products/pm1",
//     image: require("../../images/IMG_2238.jpg")
//   },
//   {
//     title: "Feeling Creative?",
//     description: "Customize your own soda today!",
//     link: "/products/custom",
//   },
// ];

// //This caption is special because it does not have a link the the normal Caption function!
// const WelcomeCaption = ({ caption }) => (
//   <div className={classes.caption}>
//     <img
//               src={caption.image}
//               alt="TEST SODA"
//             ></img>

//             <div className={classes.content}>
//             <h1>{caption.title}</h1>
//             <p>{caption.description}</p>
//             </div>
//   </div>
// );

// const Caption = ({ caption }) => (

//   <div className={classes.caption}>
//     <img
//               src={caption.image}
//               alt="TEST SODA"
//             ></img>
            
//       <div className={classes.content + " " + classes.link}>
//     <Link to={caption.link}>
//       <h1>{caption.title}</h1>
//       <p>{caption.description}</p>
//     </Link>
//   </div>
//   </div>

// );

// const SlideShow = () => {
//   //Variables
//   const [isMobile, setIsMobile] = useState(false);
//   const [windowHeight, setHeight] = useState(650);

//   //Choose the screen size and let the component know if th escreen changes.  This will help the slideshow size a little better.
//   const handleResize = () => {
//     if (window.innerWidth < 768) {
//       setIsMobile(true);
//     } else {
//       setIsMobile(false);
//     }
//   };

//   // create an event listener
//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     if (isMobile) {
//       setHeight(500);
//     } else {
//       setHeight(650);
//     }
//   }, [windowHeight, isMobile]);

//   const slidesArray = [
//     {
//       url: "",

//       // (Optional) Set if you want to add any content on your slide
//       childrenElem: <WelcomeCaption caption={captions[0]} />,
//     },
//     {
//       url: "",
//       childrenElem: <Caption caption={captions[1]} />,
//     },
//     {
//       url: "https://i.imgur.com/t2a1zLi.jpg",
//       childrenElem: <Caption caption={captions[2]} />,
//     },
//   ];

//   return (
//     <SmartSlider
//       slides={slidesArray}
//       buttonShape="square" // round or square
//       height={windowHeight}
//       // autoSlideInterval={7000}
//       autoSlide={false}
//     />
//   );
// };

// export default SlideShow;
