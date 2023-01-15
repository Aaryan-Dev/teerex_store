import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const store = useSelector((state) => state.CartReducer);
  // const dispatch = useDispatch();
  const { cart, isLoading, isError } = store;

  console.log(cart);

  return <div>Cart</div>;
};

export default Cart;
