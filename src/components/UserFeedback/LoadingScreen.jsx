import classes from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <section className={classes.loadingSection}>
      <div className={classes.sodaLoader}></div>
      <p>Filling a soda.  Hold on!</p>
    </section>
  );
};

export default LoadingScreen;
