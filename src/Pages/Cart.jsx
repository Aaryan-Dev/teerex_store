import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartStyles from "../CSS/cart.module.css";
import {
  updateQuantityCart,
  deletedCartItem,
} from "../React-Redux/Cart/action";

const Cart = () => {
  const [cartPrice, setCartPrice] = useState(0);

  const Cart = useSelector((state) => state.CartReducer);
  const { cart } = Cart;

  const dispatch = useDispatch();

  useEffect(() => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      let cartItem = cart[i];
      totalPrice =
        totalPrice + Number(cartItem.price) * Number(cartItem.cartItemQyantity);
    }
    setCartPrice(totalPrice);
  }, [cart]);

  const updateQuantity = (e) => {
    const { value } = e.target;

    let cartItemQyantity_maxQuantity_itemId = value.split(" ");
    console.log(cartItemQyantity_maxQuantity_itemId);

    let quantity = cartItemQyantity_maxQuantity_itemId[0];
    let maxQuantity = cartItemQyantity_maxQuantity_itemId[1];
    let itemId = cartItemQyantity_maxQuantity_itemId[2];

    console.log(quantity, maxQuantity, itemId);

    if (Number(quantity) > Number(maxQuantity)) {
      alert("Maximimum quantity is " + maxQuantity);
      let cartUpdate = cart.map((item) =>
        item.id === Number(itemId)
          ? { ...item, cartItemQyantity: maxQuantity }
          : item
      );
      e.target.value = 0;
      console.log(cartUpdate);
      dispatch(updateQuantityCart(cartUpdate));
    } else {
      let cartUpdate = cart.map((item) =>
        item.id === Number(itemId)
          ? { ...item, cartItemQyantity: quantity }
          : item
      );
      console.log(cartUpdate);
      dispatch(updateQuantityCart(cartUpdate));
    }
  };

  const deleteCartItem = (id) => {
    let updatedCart = cart.filter((item) => item.id !== id);
    dispatch(deletedCartItem(updatedCart));
  };

  return (
    <div className={cartStyles.cart}>
      <div className={cartStyles.shopping}>Shopping Cart</div>

      <div className={cartStyles.cartStore}>
        {cart.length === 0 ? <p>Cart is empty!</p> : null}
        {cart.map((item) => (
          <div key={item.id} className={cartStyles.cartItem}>
            <div className={cartStyles.cartItemImage}>
              <img src={item.imageURL} alt="image" />
            </div>
            <div>
              <div>
                <b>{item.name}</b>
              </div>
              <div>
                <b> Rs {item.price}</b>
              </div>
            </div>
            <div>
              <select id="quantity" onChange={updateQuantity}>
                {Array(10)
                  .fill(0)
                  .map((quantity, index) => (
                    <option value={`${index + 1} ${item.quantity} ${item.id}`}>
                      Qnt: {index + 1}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <button
                onClick={() => deleteCartItem(item.id)}
                id={cartStyles.deleteCartButton}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={cartStyles.cartPrice}>
        <b> Total amount </b> {`Rs. ${cartPrice}`}
      </div>
    </div>
  );
};

export default Cart;
