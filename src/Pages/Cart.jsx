import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartStyles from "../CSS/cart.module.css";

const Cart = () => {
  const store = useSelector((state) => state.CartReducer);
  const { cart } = store;

  console.log(cart);

  return (
    <div className={cartStyles.cart}>
      <div className={cartStyles.shopping}>Shopping Cart</div>

      <div className={cartStyles.cartStore}>
        {cart.map((item) => (
          <div className={cartStyles.cartItem} key={item.id}>
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
              <select id="quantity">
                {Array(10)
                  .fill(0)
                  .map((quantity, index) => (
                    <option value="">Qnt: {index + 1} </option>
                  ))}
              </select>
            </div>
            <div>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <b> Total amount </b> {`Rs. `}
      </div>
    </div>
  );
};

export default Cart;
