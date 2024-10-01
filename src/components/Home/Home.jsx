import React, { Fragment } from "react";
import classes from "./Home.module.css";
import SlideShow from "./SlideShow";
import pouringImg from "../../images/manPouringSodaDrink.jpg"
import ownersImg from "../../images/ownersPhoto.jpg"

const Home = () => {
  return (
    <Fragment>
      <SlideShow />
      <div className={classes.home}>
        <div className={classes.homeWrapper}>
          <section className={classes.homeSectionOne}>
            <div>
              <h1>About Us</h1>
              <p>
                Poppin Sodas is a soda company that is determined to provide the
                best possible beverages possible. Poppin Sodas popped off in
                2023 after creating and selling a small group of soda drinks to
                several people. Due to popular demand, Poppin Sodas was formally
                established in Rexburg Idaho, and is now slowly growing across
                the state. We are constantly striving to add new flavors and
                give you the opportunity to make your sodas as well! We strive
                to provide the best possible service and leave you having a
                poppin flavor in your mouth!
              </p>
            </div>
            <img
              src={pouringImg}
              alt="Guy Pouring Drink"
            ></img>
          </section>
        </div>

        <section className={classes.homeSectionTwo}>
          <img
            src={ownersImg}
            alt="Creators of Poppin Soda Shop"
          ></img>
          <div>
            <h1>Meet the Creators</h1>
            <p>
              Poppin Soda was founded by Mike and Jami Downs. The idea started
              after the couple had a group of friends try some of their soda
              creations. With some convincing, the first sodas of Poppin Sodas
              were released to the public and became a smashing success.
            </p>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
