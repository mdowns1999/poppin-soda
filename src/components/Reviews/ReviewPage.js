import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./ReviewPage.module.css";
import ReviewList from "./ReviewList";
import fetchHttp from "../../helper/fetchHttp";

const ReviewPage = () => {
  //Variables
  const navigate = useNavigate();
  const REVIEWS = useLoaderData();

  const navigateToAddReviewHandler = () => {
    navigate("add");
  };

  return (
    <>
      <section className="pageBanner">
        <h1>Reviews</h1>
      </section>
      <div className={classes.reviewIntro}>
        <p>
          Check out these real opinions from our customers and see how they
          liked our sodas. If you want to leave a review yourself, click the
          button down below!
        </p>

        <Button onClick={navigateToAddReviewHandler}>Add a Review</Button>
      </div>

      <div className={classes.reviewListBox}>
        <ReviewList reviews={REVIEWS} />
      </div>
    </>
  );
};

export default ReviewPage;

export async function loader() {
  let error = {
    message:
      "Oh no! Looks like we have a mess on our end.  We are getting it cleaned up as fast as we can.  Please try again later!",
    status: 500,
  };
  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/reviews",
    error,
  });
}
