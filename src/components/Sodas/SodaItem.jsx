import ProductItem from "../UI/ProductItem"
import { Link } from "react-router-dom"
import getSodaImage from "../../helper/getSodaImage"
import PropTypes from 'prop-types' // Import PropTypes

const SodaItem = ({ name, id, description }) => {
  let image = getSodaImage(name)

  // Scroll to the top of the screen when we navigate away
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <ProductItem>
      <Link to={id} onClick={scrollToTop}>
        <img src={image} alt={name + " Drink Picture"} />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </ProductItem>
  )
}

// Define the expected prop types
SodaItem.propTypes = {
  name: PropTypes.string.isRequired,        // name is a required string
  id: PropTypes.string.isRequired,          // id is a required string
  description: PropTypes.string.isRequired, // description is a required string
}

export default SodaItem
