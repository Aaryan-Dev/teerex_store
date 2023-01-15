import * as types from "./actionTypes";

const addInCart = (itemToAdd) => (dispatch) => {
  dispatch({ type: types.GET_CART_SUCCSESS, payload: itemToAdd });
  // console.log(itemToAdd);
  // dispatch({ type: types.GET_CART_REQUEST });
  // return fetch(
  //   "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  // )
  //   .then((res) => res.json())
  //   .then((res) => {
  //     dispatch({ type: types.GET_CART_SUCCSESS, payload: res });
  //   })
  //   .catch((err) => {
  //     dispatch({ type: types.GET_CART_FAILURE, payload: err });
  //   });
  // axios
  // .get("http://localhost:8080/books", getBookParams)
  // .then((res) => {
  //   dispatch({ type: types.GET_BOOKS_SUCCSESS, payload: res.data });
  // })
  // .catch((err) => {
  //   dispatch({ type: types.GET_BOOKS_FAILURE, payload: err });
  // });
};

const updateQuantityCart = (cart) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_SUCCSESS, payload: cart });
};

export { addInCart, updateQuantityCart };
