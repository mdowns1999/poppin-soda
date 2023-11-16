import classes from "./Quantity.module.css";

const QuantitySelect = (props) => {
  return (
    <div className={classes.quantityBox}>
      <label htmlFor="quantity" type="number">
        Quantity:
      </label>
      <input
        ref={props.quantityRef}
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="20"
        placeholder="0"
        required
      ></input>
    </div>
  );
};

export default QuantitySelect;
