import PropTypes from "prop-types"; // Import PropTypes

const ProductItem = ({ children }) => {
  return <li>{children}</li>;
};

// Define the expected prop types
ProductItem.propTypes = {
  children: PropTypes.node.isRequired, // children is required and can be any renderable content
};

export default ProductItem;