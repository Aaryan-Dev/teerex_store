import * as types from "./actionTypes";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CART_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        cart: [],
      };
    case types.GET_CART_SUCCSESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        cart: [...oldState.cart, payload],
      };
    case types.GET_CART_FAILURE:
      return {
        ...oldState,
        isError: true,
        isLoading: false,
        cart: [],
      };
    default:
      return oldState;
  }
};

export { reducer };
