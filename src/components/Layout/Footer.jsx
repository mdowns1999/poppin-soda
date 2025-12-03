import classes from "./Footer.module.css"
import instaImg from "../../images/socialIcons/instaGramLogoWhite.png"
import facebookImg from "../../images/socialIcons/f_logo_RGB-White_58.png"

const Footer = () => {
  //Get Year for Footer
  const year = new Date().getFullYear()

  return (
    <footer className={classes.footer}>
      <div>
        <h2>Contact Us:</h2>
        <p>poppinsoda@gmail.com</p> <p>(555)555-5555</p>
      </div>
      <div>&copy; Poppin {year}</div>
      <div>
        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
          <img
            className={classes.instagram}
            src={instaImg}
            alt="Instagram Logo"
          ></img>
        </a>
        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
          <img
            className={classes.facebook}
            src={facebookImg}
            alt="Facebook Logo"
          ></img>
        </a>
      </div>
    </footer>
  )
}

export default Footer
