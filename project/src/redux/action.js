import axios from "axios";

import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "../redux/type";

const auth_token =
  "eyJhbGciOiJFUzI1NiJ9.eyJzZXNzaW9uX2tleSI6IlVyZVFLeVZoLzlLWUNVeU4vbXAwWWowNnlYekd2VFRQS25acEM2OWhZbzcybm4raXRBN0ViWVI2OVRiMFBlWDM5MlF6emh3d0swaEFFV0dzIiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMDkgMDY6MzY6NDQgVVRDIn0.ErUKC1niufNddkfTh5Xh34v2FdtIGMfRn5fc4UmOYMU3qhS3JliHUWUShTQkIkoQ0ODHkmhI2Cw7zwfJBqilaQ";

const page_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kb21WYWx1ZSI6Mzc2MDI5MDIwM30.6cN6NjXlMqyO3j8MfmGPhVLUPhUyvuQ6eAeRJLYR8B0";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const FetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);

    axios
      .get("https://api.devtest.experience.com/v2/core/accounts", {
        headers: {
          Authorization: auth_token,
          "Page-Token": page_token,
        },
      })
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
        console.log(users);
      })
      .catch((error) => {
        const errormsg = error.message;
        dispatch(fetchUserFailure(errormsg));
      });
  };
};
