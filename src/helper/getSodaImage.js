const getSodaImage = (imageName) => {
  switch (imageName) {
    case "Tropical Sprite":
      return require("../images/tropical.jpg");
    case "Basic White Girl":
      return require("../images/whiteGirl.jpg");
    case "Mountain Smash":
      return require("../images/mountain.jpg");
    case "Dirty Diet Coke":
      return require("../images/dirty.jpg");
    case "Carmel Root Beer":
      return require("../images/root.jpg");
    default:
      return require("../images/blank.png");
  }
};

export default getSodaImage;
