import tropical from "../images/tropical.jpg"
import whiteGirl from "../images/whiteGirl.jpg"
import mountain from "../images/mountain.jpg"
import dirty from "../images/dirty.jpg"
import root from "../images/root.jpg"
import emptyCup from "../images/emptyCup.jpg"

const imageMap = {
  "Tropical Sprite": tropical,
  "Basic White Girl": whiteGirl,
  "Mountain Smash": mountain,
  "Dirty Diet Coke": dirty,
  "Carmel Root Beer": root,
  // Default case handled below
}

const getSodaImage = (imageName) => {
  return imageMap[imageName] || emptyCup // Return emptyCup if imageName is not found
}

export default getSodaImage