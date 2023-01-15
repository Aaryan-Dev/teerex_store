import * as types from "./actionTypes";

const initialState = {
  shirts: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_SHIRTS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        shirts: [],
      };
    case types.GET_SHIRTS_SUCCSESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        shirts: payload,
      };
    case types.GET_SHIRTS_FAILURE:
      return {
        ...oldState,
        isError: true,
        isLoading: false,
        shirts: [],
      };
    default:
      return oldState;
  }
};

export { reducer };
