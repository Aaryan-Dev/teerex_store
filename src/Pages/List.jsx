import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import { getShirts, goHandleSearch } from "../React-Redux/App/action";
import listStyles from "../CSS/list.module.css";
import { addInCart } from "../React-Redux/Cart/action";

const initialSearch = {
  search: "",
};

const List = () => {
  const store = useSelector((state) => state.AppReducer);
  const Cart = useSelector((state) => state.CartReducer);

  const [search, setSearch] = useState(initialSearch);

  const dispatch = useDispatch();

  const { shirts } = store;
  const { cart } = Cart;

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearch({ ...initialSearch, [name]: value });
  };

  const goSearch = () => {
    dispatch(goHandleSearch(search));
  };

  useEffect(() => {
    dispatch(getShirts);
  }, [dispatch]);

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

  return (
    <div className={listStyles.products}>
      <div className={listStyles.searchBar}>
        <input
          className={listStyles.searchInput}
          onChange={handleSearch}
          name="search"
          value={search.search}
          type="text"
          placeholder="Search for products..."
        />
        <button onClick={() => goSearch()} className={listStyles.searchButton}>
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
      <div id={listStyles.column}>
        <div id="filtered" className={listStyles.filter}>
          <Filter />
        </div>
        <div className={listStyles.list}>
          <div className={listStyles.displayList}>
            {shirts.length !== 0
              ? shirts?.map((item) => (
                  <div key={item.id}>
                    <div id="alert"></div>
                    <div className={listStyles.image}>
                      <div className={listStyles.name}>{item.name}</div>
                      <img src={item.imageURL} alt="shirt" />
                    </div>
                    <div className={listStyles.addToCart}>
                      <div
                        className={listStyles.price}
                      >{`Rs ${item.price}`}</div>
                      <div>
                        <button
                          disabled={item.quantity === 0}
                          onClick={() => addToCart(item.id)}
                          id={
                            item.quantity === 0
                              ? listStyles.fade
                              : listStyles.cartButton
                          }
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div className={listStyles.unavalilable}>
                      {item.quantity === 0 ? "Item quantity:- 0" : null}
                    </div>
                  </div>
                ))
              : "No match!"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
