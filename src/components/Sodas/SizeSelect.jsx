import React from 'react';
import RadioButton from "../UI/RadioButton";
import PropTypes from 'prop-types'; // Import PropTypes

const SizeSelect = ({ setSize }) => {
  return (
    <fieldset>
      <legend>Size Selection:</legend>
      <RadioButton
        id={"custom_radio_8"}
        name={"size-select"}
        value={"8"}
        setSelectedValue={setSize}
        label={"8 oz"}
        setSodaID={null}
      />
      <RadioButton
        id={"custom_radio_16"}
        name={"size-select"}
        value={"16"}
        setSelectedValue={setSize}
        label={"16 oz"}
        setSodaID={null}
      />
      <RadioButton
        id={"custom_radio_32"}
        name={"size-select"}
        value={"32"}
        setSelectedValue={setSize}
        label={"32 oz"}
        setSodaID={null}
      />
    </fieldset>
  );
};

// Define the expected prop types
SizeSelect.propTypes = {
  setSize: PropTypes.func.isRequired, // setSize is a required function
};

export default SizeSelect;
