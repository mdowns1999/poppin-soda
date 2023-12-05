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
    image: require("../../images/sodaLogo.png"),
  },
  {
    title: "Feeling Creative?",
    description: "Customize your own soda today!",
    link: "/products/custom",
    image: require("../../images/customSodas.jpg"),
  },
];

//This caption is special because it does not have a link the the normal Caption function!
const WelcomeCaption = ({ caption }) => (
  <div className={classes.caption}>
    <img
      className={classes.welcomeLogo}
      src={caption.image}
      alt="Slide SHow Logo"
    ></img>

    <div className={classes.content}>
      <h1>{caption.title}</h1>
      <p>{caption.description}</p>
    </div>
  </div>
);

const Caption = ({ caption }) => (
  <div className={classes.caption}>
    <img src={caption.image} alt="Custom Soda Flavors"></img>

    <div className={classes.content + " " + classes.link}>
      <Link to={caption.link}>
        <h1>{caption.title}</h1>
        <p>{caption.description}</p>
      </Link>
    </div>
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
      setHeight(500);
    } else {
      setHeight(650);
    }
  }, [windowHeight, isMobile]);

  const slidesArray = [
    {
      url: "https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      // (Optional) Set if you want to add any content on your slide
      childrenElem: <WelcomeCaption caption={captions[0]} />,
    },
    {
      url: "https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      childrenElem: <Caption caption={captions[1]} />,
    },
  ];

  return (
    <SmartSlider
      slides={slidesArray}
      buttonShape="square" // round or square
      height={windowHeight}
      autoSlideInterval={7000}
      autoSlide={false}
    />
  );
};

export default SlideShow;
