function priceBySize(ItemPrice, ItemSize) {
  switch (ItemSize) {
    case 16:
      return ItemPrice + 0.25;
    case 32:
      return ItemPrice + 0.5;
    default:
      return ItemPrice;
  }
}

export default priceBySize;
