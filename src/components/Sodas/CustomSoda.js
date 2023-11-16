import { useLoaderData } from "react-router-dom";
import classes from "./CustomSoda.module.css";
import CustomSodaForm from "./CustomSodaForm";
import fetchHttp from "../../helper/fetchHttp";

const CustomSodas = () => {
  //Variables
  const customSodaLists = useLoaderData();

  return (
    <>
      <section className={classes.customDetailBox}>
        <img src={require("../../images/blank.png")} alt="Custom Soda"></img>
        <div>
          <h1>Build a Custom Drink</h1>
          <p>
            Want to experiment with your own drink ideas? Well, Poppin Soda has
            you covered! Mix and match any flavors with a any base soda of your
            choosing. Just make sure not to go too crazy with all these options
            though. Some might say you poppin off!
          </p>
        </div>
      </section>
      <section className={classes.customFormBox}>
        <CustomSodaForm
          syrupList={customSodaLists[0].sodaSyrups}
          sodaList={customSodaLists[0].sodaFlavors}
        />
      </section>
    </>
  );
};

export default CustomSodas;

export async function loader() {
  let error = {
    message:
      "Oh no! Looks like we have a mess on our end.  We are getting it cleaned up as fast as we can.  Please try again later!",
    status: 500,
  };
  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/custom",
    error,
  });
}
