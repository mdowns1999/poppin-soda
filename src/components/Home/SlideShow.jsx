import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import classes from "./SlideShow.module.css"
import { Link } from "react-router-dom"
import logo from "../../images/sodaLogo.png"
import flavors from "../../images/sodaDrinkFlavors.jpg"


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
]

const backgroundImage = "https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

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
)

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
)

const SlideShow = () => {
  // Variables
  const [isMobile, setIsMobile] = useState(false)
  const [windowHeight, setHeight] = useState(650)

  // Choose the screen size and let the component know if the screen changes
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768)
  }

  // Handle window resize
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    
    if (isMobile) {
      setHeight(500)
    } else {
      setHeight(650)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }

  return (
    <div 
      className={classes.slideshow} 
      style={{ 
        height: `${windowHeight}px`,
      }}
    >
      <Slider {...settings}>
        <div>
          <div 
            className={classes.slideContainer}
            style={{ 
              height: `${windowHeight}px`,
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <WelcomeCaption caption={captions[0]} />
          </div>
        </div>
        <div>
          <div 
            className={classes.slideContainer}
            style={{ 
              height: `${windowHeight}px`,
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Caption caption={captions[1]} />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default SlideShow
