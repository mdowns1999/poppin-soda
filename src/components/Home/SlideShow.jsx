import React, { useState, useEffect } from "react";
import SmartSlider from "react-smart-slider";
import classes from "./SlideShow.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/sodaLogo.png";
import flavors from "../../images/sodaDrinkFlavors.jpg";
import PropTypes from "prop-types"; // Import PropTypes

// Make a list of captions for the gallery. This will be the content that will be displayed.
const captions = [
  {
    title: "Welcome to Poppin Sodas",
    description: "Popping off since 2023.",
    link: null,
    image: logo,
  },
  {
    title: "Feeling Creative?",
    description: "Customize your own soda today!",
    link: "/products/custom",
    image: flavors,
  },
];

// This caption is special because it does not have a link to the normal Caption function!
const WelcomeCaption = ({ caption }) => (
  <div className={classes.caption}>
    <img
      className={classes.welcomeLogo}
      src={caption.image}
      alt="Slide Show Logo"
    ></img>

    <div className={classes.content}>
      <h1>{caption.title}</h1>
      <p>{caption.description}</p>
    </div>
  </div>
);

// Define PropTypes for WelcomeCaption
WelcomeCaption.propTypes = {
  caption: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const Caption = ({ caption }) => (
  <div className={classes.caption}>
    <img src={caption.image} alt="Custom Soda Flavors"></img>

    <div className={`${classes.content} ${classes.link}`}>
      <Link to={caption.link}>
        <h1>{caption.title}</h1>
        <p>{caption.description}</p>
      </Link>
    </div>
  </div>
);

// Define PropTypes for Caption
Caption.propTypes = {
  caption: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const SlideShow = () => {
  // Variables
  const [isMobile, setIsMobile] = useState(false);
  const [windowHeight, setHeight] = useState(650);

  // Choose the screen size and let the component know if the screen changes. This will help the slideshow size a little better.
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (isMobile) {
      setHeight(500);
    } else {
      setHeight(650);
    }

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const slidesArray = [
    {
      url: "https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      autoSlide={true}
    />
  );
};

export default SlideShow;
