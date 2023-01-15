import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import { getShirts } from "../React-Redux/App/action";
import listStyles from "../CSS/list.module.css";
import { addInCart } from "../React-Redux/Cart/action";

const List = () => {
  const store = useSelector((state) => state.AppReducer);
  const Cart = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  const { shirts, isLoading, isError } = store;
  const { cart } = Cart;

  useEffect(() => {
    dispatch(getShirts);
  }, []);

  console.log(shirts, isLoading, isError);

  // ******************************************

  const addToCart = (id) => {
    let alreadyInCart = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        alreadyInCart = true;
        break;
      }
    }

    if (alreadyInCart) {
      let alert = document.querySelectorAll("#alert");

      let cartAlert = alert[id - 1];
      cartAlert.innerText = "Item already in cart!";
      cartAlert.style.backgroundColor = "black";
      cartAlert.style.color = "white";
    } else {
      let itemToAdd = shirts[id - 1];
      itemToAdd = { ...shirts[id - 1], cartItemQyantity: 1 };
      dispatch(addInCart(itemToAdd));
    }
  };

  // ******************************************

  return (
    <div className={listStyles.products}>
      <div className={listStyles.searchBar}>
        <input
          className={listStyles.searchInput}
          type="text"
          placeholder="Search for products..."
        />
        <button className={listStyles.searchButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      <div>
        <div className={listStyles.filter}>
          <Filter />
        </div>
        <div className={listStyles.list}>
          <div className={listStyles.displayList}>
            {shirts.map((item) => (
              <div key={item.id}>
                <div id="alert"></div>
                <div className={listStyles.image}>
                  <div className={listStyles.name}>{item.name}</div>
                  <img src={item.imageURL} alt="shirt" />
                </div>
                <div className={listStyles.addToCart}>
                  <div className={listStyles.price}>{`Rs ${item.price}`}</div>
                  <div>
                    <button
                      onClick={() => addToCart(item.id)}
                      id={listStyles.cartButton}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
