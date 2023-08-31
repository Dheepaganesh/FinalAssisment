import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));
