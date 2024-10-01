import classes from "./Quantity.module.css";
import PropTypes from 'prop-types'; // Import PropTypes

const QuantitySelect = ({ quantityRef }) => {
  return (
    <div className={classes.quantityBox}>
      <label htmlFor="quantity" type="number">
        Quantity:
      </label>
      <input
        ref={quantityRef}
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="20"
        placeholder="0"
        required
      />
    </div>
  );
};

// Define the expected prop types
QuantitySelect.propTypes = {
  quantityRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element) // quantityRef should be a ref object
  }).isRequired, // quantityRef is required
};

export default QuantitySelect;
