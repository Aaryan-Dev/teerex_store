import * as types from "./actionTypes";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CART_SUCCSESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        cart: [...oldState.cart, payload],
      };
    case types.UPDATE_CART_SUCCSESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        cart: payload,
      };
    case types.DELETE_CART_SUCCSESS:
      return {
        ...oldState,
        isError: false,
        isLoading: false,
        cart: payload,
      };
    default:
      return oldState;
  }
};

export { reducer };
