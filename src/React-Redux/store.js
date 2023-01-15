import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer as AppReducer } from "../React-Redux/App/reducer";
import { reducer as CartReducer } from "../React-Redux/Cart/reducer";

const rootReducer = combineReducers({ AppReducer, CartReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
