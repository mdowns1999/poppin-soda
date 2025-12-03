import CartItem from "./CartItem"
import PropTypes from 'prop-types' // Import PropTypes

const CartList = ({ cartCtx }) => {
  const { removeItem, addItem, deleteItem, items } = cartCtx

  // Remove items from the cart by passing in the id
  const removeItemHandler = (id, event) => {
    event.preventDefault()
    removeItem(id)
  }

  // Add items from the cart by passing in the item and the amount of the item.
  // We will also make sure they do not have over 20 items in the cart
  const addItemHandler = (item, event) => {
    event.preventDefault()
    if (item.amount <= 19) {
      addItem({ ...item, amount: 1 })
    }
  }

  // Delete items from the cart by passing in the id
  const deleteItemHandler = (id, event) => {
    event.preventDefault()
    deleteItem(id)
  }

  // If the cart is empty, let the user know! If not display the cart Item.
  if (items.length === 0) {
    return <h2>You have no items in the cart</h2>
  } else {
    return (
      <ul>
        {items.map((item) => (
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
    )
  }
}

// Define PropTypes for CartList
CartList.propTypes = {
  cartCtx: PropTypes.shape({
    removeItem: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired, // Assuming id is a string
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        size: PropTypes.oneOf([8, 16, 32]).isRequired, // Assuming size can only be these values
      })
    ).isRequired,
  }).isRequired,
}

export default CartList
