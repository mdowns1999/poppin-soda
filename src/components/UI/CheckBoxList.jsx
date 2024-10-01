import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import classes from "./CheckBoxList.module.css";
import CheckBox from "./CheckBox";

const CheckBoxList = ({list, setTotalValue, setSelectedList}) => {
  let selectedList = [];
  
  // Fill the check boxes to false since none will need to be checked right away
  const [checkedState, setCheckedState] = useState(
    new Array(list.length).fill(false)
  );

  // This function will have the list of ingredients needed
  function updateChosenList(pos, updatedCheckedState) {
    selectedList = []; // Reset selectedList on every update
    updatedCheckedState.forEach((item, index) => {
      if (item) {
        selectedList.push(list[index].name);
      }
    });
  }

  const handleOnChange = (pos) => {
    // Update the array with our new checked box
    const updatedCheckedState = checkedState.map((item, index) =>
      index === pos ? !item : item
    );

    updateChosenList(pos, updatedCheckedState);
    setCheckedState(updatedCheckedState);

    // Calculate total price for toppings
    const totalPrice = updatedCheckedState.reduce(
      (total, currentState, index) => {
        if (currentState === true) {
          // return the total
          return total + list[index].price;
        }
        return total;
      },
      0
    );

    // Update parent component's state
    setTotalValue(totalPrice);
    setSelectedList(selectedList);
  };

  return (
    <ul>
      {list.map(({ id, name }, index) => (
        <li key={id}>
          <div className={classes.checkedBoxBtn}>
            <CheckBox
              id={id}
              name={name}
              index={index}
              handleOnChange={handleOnChange}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

// Define the expected prop types
CheckBoxList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Ensure id is a required string
      name: PropTypes.string.isRequired, // Ensure name is a required string
      price: PropTypes.string.isRequired // Ensure price is a required number
    })
  ).isRequired, // list is required and must be an array of objects
  setTotalValue: PropTypes.func.isRequired, // setTotalValue is a required function
  setSelectedList: PropTypes.func.isRequired // setSelectedList is a required function
};

export default CheckBoxList;
