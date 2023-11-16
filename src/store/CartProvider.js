import priceBySize from "../helper/priceBySize";
import CartContext from "./cart-context";
import React, { useReducer } from "react";

// function updateBrowserStorage(cart){
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

let defaultCartState = {
  items: [],
  totalAmount: 0,
};

// if(localStorage.getItem("cart") === null){
//   defaultCartState = {
//     items: [],
//     totalAmount: 0,
//   };
// }else{
//   let cart = JSON.parse(localStorage.getItem("cart"));

//   if(cart.items.length === 0){
//     defaultCartState = {
//       items: [],
//       totalAmount: 0,
//     };
//   }else{
//     defaultCartState = cart;
//   }
// }

//State is last snapshot, return new state
const cartReducer = (state, action) => {
  if (action.type === "ADD" && action.item.amount < 21) {
    let itemPrice = priceBySize(action.item.price, action.item.size);
    const updatedTotalAmount =
      state.totalAmount + itemPrice * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const exsitingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (exsitingCartItem) {
      const updatedItem = {
        ...exsitingCartItem,
        amount: exsitingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    //Set the values to an object to return
    let cart = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };

    //Update cart in case user leaves
    //updateBrowserStorage(cart);

    return cart;
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    let existingPrice = priceBySize(existingItem.price, existingItem.size);
    const updatedTotalAmount = state.totalAmount - existingPrice;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    //Set the values to an object to return
    let cart = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    //Update cart in case user leaves
    //updateBrowserStorage(cart);

    return cart;
  }

  if (action.type === "DELETE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    let itemPrice = priceBySize(existingItem.price, existingItem.size);
    const updatedTotalAmount =
      state.totalAmount - itemPrice * existingItem.amount;

    let updatedItems = state.items.filter((item) => item.id !== action.id);

    //Set the values to an object to return
    let cart = {};
    if (state.items.length !== 0) {
      cart = {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    } else {
      cart = {
        items: [],
        totalAmount: 0,
      };
    }

    //Update cart in case user leaves
    //updateBrowserStorage(cart);

    return cart;
  }

  if (action.type === "CLEAR") {
    //Set the values to an object to return
    let cart = {
      items: [],
      totalAmount: 0,
    };

    //Update cart in case user leaves
    //updateBrowserStorage(cart);

    return cart;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const deleteEntireItemFromCart = (id) => {
    dispatchCartAction({
      type: "DELETE",
      id: id,
    });
  };

  const clearEntireCart = () => {
    dispatchCartAction({
      type: "CLEAR",
    });
  };

  //This object will actually update with the values we need
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: deleteEntireItemFromCart,
    clearCart: clearEntireCart,
  };
  //This provider will allow us to wrap anything that will need the cart.
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
