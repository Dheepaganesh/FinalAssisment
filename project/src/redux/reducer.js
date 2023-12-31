import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./type";

const initialstate = {
  loading: false,
  user: [],
  error: "",
};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        user: action?.payload,
        error: "",
      };

    case FETCH_USER_FAILURE:
      return {
        loading: false,
        user: [],
        error: action?.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
