import { useState } from "react";
import classes from "./CheckBoxList.module.css";
import CheckBox from "./CheckBox";

const CheckBoxList = (props) => {
  let selectedList = [];
  //Fill the check boxes to false since none will need to be checked right away
  const [checkedState, setCheckedState] = useState(
    new Array(props.list.length).fill(false)
  );

  //This function will have the lsit of ingredients needed
  function updateChosenList(pos, updatedCheckedState) {
    updatedCheckedState.forEach((item, index) => {
      if (item) {
        selectedList.push(props.list[index].name);
      }
    });
  }

  const handleOnChange = (pos) => {
    //Update the array with our new checked box
    const updatedCheckedState = checkedState.map((item, index) =>
      index === pos ? !item : item
    );

    updateChosenList(pos, updatedCheckedState);
    setCheckedState(updatedCheckedState);

    //Calculate total price for toppings
    let totalPrice = updatedCheckedState.reduce(
      (total, currentState, index) => {
        if (currentState === true) {
          //return the total
          return total + props.list[index].price;
        }
        return total;
      },
      0
    );
    props.setTotalValue(totalPrice);
    props.setSelectedList(selectedList);
  };

  return (
    <ul>
      {props.list.map(({ id, name}, index) => (
        <li key={id}>
          <div className={classes.checkedBoxBtn}>
            <CheckBox
            id={id}
            name={name}
            index={index}
            handleOnChange ={handleOnChange}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CheckBoxList;
