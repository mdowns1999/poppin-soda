import classes from "./RadioButton.module.css";

const RadioButton = (props) => {
  const handleRadioChange = (event) => {
    
    //Check if the prop being passed is a function, if it is then access the function to set the value
    if (props.setSelectedValue instanceof Function) {
      props.setSelectedValue(+event.target.value);
    }

    if (props.setSodaID instanceof Function) {
      props.setSodaID(event.target.id);
    }
  };

  return (
    <div className={classes.radio}>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        id={props.id}
        onChange={handleRadioChange}
        required
      ></input>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default RadioButton;
