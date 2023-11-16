import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useEffect } from "react";
import { useState } from "react";

const Star = (props) => {
  // An Excellent library from mui.com for creating rating stars: https://mui.com/material-ui/react-rating/
  const [value, setValue] = useState(props.value);
  const [stars, setStars] = useState(props.value);

  useEffect(() => {
    if (!props.readOnly) {
      setStars(
        <Rating
          name="hover-feedback"
          value={value}
          precision={1}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          size="large"
          emptyIcon={<StarIcon style={{ color: "grey" }} fontSize="inherit" />}
        />
      );

      props.setRating(value);
    } else {
      setStars(<Rating value={value} readOnly size="small" />);
    }
  }, [props, value]);

  return <>{stars}</>;
};

export default Star;
