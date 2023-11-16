import { useLoaderData } from "react-router";
import fetchHttp from "../../helper/fetchHttp";
import AddReviewForm from "./AddReviewForm";
import classes from "./AddReviewPage.module.css";

const AddReviewPage = () => {
  let ORDERS = useLoaderData();

  return (
    <>
      <section className="pageBanner">
        <h1>Add Review</h1>
      </section>
      <div className={classes.addReviewText}>
        <p>
          We love to hear what you thought of our business! Please leave a
          review down below. Make sure to have your order conformaiton number
          ready in order to leave a review!
        </p>
      </div>

      <AddReviewForm orders={ORDERS} />
    </>
  );
};

export default AddReviewPage;

export async function loader() {
  let error = {
    message:
      "Oh no! Looks like we have a mess on our end.  We are getting it cleaned up as fast as we can.  Please try again later!",
    status: 500,
  };
  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/orders",
    error,
  });
}
