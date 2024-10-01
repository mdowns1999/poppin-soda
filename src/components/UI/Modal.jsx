import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"; // Import PropTypes
import classes from "./Modal.module.css";

// Set the backdrop behind the Modal
const BackDrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

// Define the expected prop types for BackDrop
BackDrop.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose is required and must be a function
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

// Define the expected prop types for ModalOverlay
ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired, // children is required and can be any renderable content
};

const portalElement = document.getElementById("overlays");

const Modal = ({ onClose, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

// Define the expected prop types for Modal
Modal.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose is required and must be a function
  children: PropTypes.node.isRequired, // children is required and can be any renderable content
};

export default Modal;
