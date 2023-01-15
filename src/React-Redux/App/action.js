import * as types from "./actionTypes";

const getShirts = (dispatch) => {
  dispatch({ type: types.GET_SHIRTS_REQUEST });

  return fetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  )
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: types.GET_SHIRTS_SUCCSESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: types.GET_SHIRTS_FAILURE, payload: err });
    });

  // axios
  // .get("http://localhost:8080/books", getBookParams)
  // .then((res) => {
  //   dispatch({ type: types.GET_BOOKS_SUCCSESS, payload: res.data });
  // })
  // .catch((err) => {
  //   dispatch({ type: types.GET_BOOKS_FAILURE, payload: err });
  // });
};

export { getShirts };
