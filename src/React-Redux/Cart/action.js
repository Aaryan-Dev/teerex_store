import * as types from "./actionTypes";

const addInCart = (itemToAdd) => (dispatch) => {
  dispatch({ type: types.GET_CART_SUCCSESS, payload: itemToAdd });
};

const updateQuantityCart = (cart) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_SUCCSESS, payload: cart });
};

const deletedCartItem = (updatedCart) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_SUCCSESS, payload: updatedCart });
};

export { addInCart, updateQuantityCart, deletedCartItem };
