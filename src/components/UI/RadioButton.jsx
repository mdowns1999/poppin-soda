import PropTypes from "prop-types" // Import PropTypes
import classes from "./RadioButton.module.css"

const RadioButton = ({ setSelectedValue, setSodaID, name, value, id, label }) => {
  const handleRadioChange = (event) => {
    // Check if the prop being passed is a function, if it is then access the function to set the value
    if (setSelectedValue instanceof Function) {
      setSelectedValue(+event.target.value)
    }

    if (setSodaID instanceof Function) {
      setSodaID(event.target.id)
    }
  }

  return (
    <div className={classes.radio}>
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={handleRadioChange}
        required
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

// Define the expected prop types
RadioButton.propTypes = {
  setSelectedValue: PropTypes.func, // setSelectedValue is an optional function
  setSodaID: PropTypes.func,         // setSodaID is an optional function
  name: PropTypes.string.isRequired, // name is required and must be a string
  value: PropTypes.string.isRequired, // value is required and must be a string
  id: PropTypes.string.isRequired,    // id is required and must be a string
  label: PropTypes.string.isRequired   // label is required and must be a string
}

export default RadioButton
