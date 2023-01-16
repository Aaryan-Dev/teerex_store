import * as types from "./actionTypes";

const getShirts = (filterObject) => (dispatch) => {
  const { filterColour, filterGender, filterPrice, filterType } = filterObject;

  dispatch({ type: types.GET_SHIRTS_REQUEST });

  return fetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  )
    .then((response) => response.json())
    .then((response) => {
      let updatedPayload = response;
      if (filterColour.length !== 0) {
        updatedPayload = updatedPayload?.filter((item) =>
          filterColour.includes(item.color)
        );
      }

      if (filterGender.length !== 0) {
        updatedPayload = updatedPayload?.filter(
          (item) => item.gender === filterGender
        );
      }

      if (filterPrice.length !== 0) {
        if (filterPrice === "Rs0-Rs250") {
          updatedPayload = updatedPayload?.filter(
            (item) => (0 <= Number(item.price)) & (Number(item.price) <= 250)
          );
        } else if (filterPrice === "Rs251-Rs450") {
          updatedPayload = updatedPayload?.filter(
            (item) => (251 <= Number(item.price)) & (Number(item.price) <= 450)
          );
        } else {
          updatedPayload = updatedPayload?.filter(
            (item) => 451 <= Number(item.price)
          );
        }
      }

      if (filterType.length !== 0) {
        updatedPayload = updatedPayload?.filter((item) =>
          filterType.includes(item.type)
        );
      }

      dispatch({ type: types.GET_SHIRTS_SUCCSESS, payload: updatedPayload });
    })
    .catch((error) => {
      dispatch({ type: types.GET_SHIRTS_FAILURE, payload: error });
    });
};

const goHandleSearch = (search) => (dispatch) => {
  dispatch({ type: types.GET_SHIRTS_REQUEST });

  return fetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  )
    .then((response) => response.json())
    .then((response) => {
      let searchLetter = search.search.split("");

      for (let i = 0; i < searchLetter.length; i++) {
        response = response.filter((item) =>
          item.name.toLowerCase().trim().split("").includes(searchLetter[i])
        );
      }

      dispatch({ type: types.GET_SHIRTS_SUCCSESS, payload: response });
    })
    .catch((error) => {
      dispatch({ type: types.GET_SHIRTS_FAILURE, payload: error });
    });
};

export { getShirts, goHandleSearch };
