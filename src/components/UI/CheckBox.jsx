import PropTypes from "prop-types" // Import PropTypes

const CheckBox = ({ id, name, index, handleOnChange }) => {
  return (
    <>
      <input
        type="checkbox"
        id={`custom-check-box-${id}`}
        name={name}
        value={name}
        onChange={() => handleOnChange(index)}
      />
      <label htmlFor={`custom-check-box-${id}`}>{name}</label>
    </>
  )
}

// Define the expected prop types
CheckBox.propTypes = {
  id: PropTypes.string.isRequired,         // id is required and must be a string
  name: PropTypes.string.isRequired,       // name is required and must be a string
  index: PropTypes.number.isRequired,      // index is required and must be a number
  handleOnChange: PropTypes.func.isRequired // handleOnChange is required and must be a function
}

export default CheckBox