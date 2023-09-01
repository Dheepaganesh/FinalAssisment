import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import userReducer from "./reducer";

export const store = createStore(userReducer, applyMiddleware(thunk));
