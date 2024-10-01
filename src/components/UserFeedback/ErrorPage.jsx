import React from 'react';
import { useRouteError } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import classes from "./ErrorPage.module.css";
import errorImg from "../../images/emptyCup.jpg"

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error Occurred";
  let message = "Something went wrong!  Please try again later.";

  //This will help us determine what kind of error Page we show the user.
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  } else if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find page!";
  }

  return (
    <>
      <div className={classes.allButFooter}>
        <Header />
        <main>
          <div className={classes.ErrorBox}>
            <img
              src={errorImg}
              alt="Custom Soda"
            ></img>
            <h1 className="pageBanner">{title}</h1>
            {message}
          </div>
        </main>
      </div>
      <Footer className="padding" />
    </>
  );
};

export default ErrorPage;
