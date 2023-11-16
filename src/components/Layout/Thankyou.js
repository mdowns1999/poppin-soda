import classes from "./Thankyou.module.css";

const ThankYouPage = (props) => {
  return (
    <div>
      <h1 className="pageBanner">{props.title}</h1>
      <div className={classes.thankyou}>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
