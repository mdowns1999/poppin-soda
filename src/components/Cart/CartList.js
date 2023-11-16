import CartItem from "./CartItem";

const CartList = (props) => {
  //Remove items from the cart by passing in the id
  const removeItemHandler = (id, event) => {
    event.preventDefault();
    props.cartCtx.removeItem(id);
  };

  //Add items from the cart by passing in the item and the amount of the item.  We wilo also make sure they do not have over 20 items in the cart
  const addItemHandler = (item, event) => {
    event.preventDefault();
    if (item.amount <= 19) {
      props.cartCtx.addItem({ ...item, amount: 1 });
    }
  };

  //Delete items from the cart by passing in the id
  const deleteItemHandler = (id, event) => {
    event.preventDefault();
    props.cartCtx.deleteItem(id);
  };

  //If the carty is empty, let the user know! If not display the cart Item.
  if (props.cartCtx.items.length === 0) {
    return <h2>You have no Items in the Cart</h2>;
  } else {
    return (
      <ul>
        {props.cartCtx.items.map((item) => (
          <CartItem
            key={"O" + item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            size={item.size}
            onRemove={removeItemHandler.bind(null, item.id)}
            onAdd={addItemHandler.bind(null, item)}
            onDelete={deleteItemHandler.bind(null, item.id)}
          />
        ))}
      </ul>
    );
  }
};

export default CartList;
