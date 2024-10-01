import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Star = ({ readOnly, value, setRating }) => {
  // An excellent library from mui.com for creating rating stars: https://mui.com/material-ui/react-rating/
  const [currentValue, setValue] = useState(value);
  const [stars, setStars] = useState(value);

  useEffect(() => {
    if (!readOnly) {
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

      setRating(currentValue);
    } else {
      setStars(<Rating value={currentValue} readOnly size="small" />);
    }
  }, [currentValue, readOnly, setRating, value]);

  return <>{stars}</>;
};

// Define the expected prop types
Star.propTypes = {
  readOnly: PropTypes.bool, // readOnly is optional and must be a boolean
  value: PropTypes.number.isRequired, // value is required and must be a number
  setRating: PropTypes.func, // setRating must be a function
};

export default Star;
