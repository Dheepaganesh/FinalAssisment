import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import userReducer from "./reducer";

export const store = createStore(userReducer, applyMiddleware(thunk));
