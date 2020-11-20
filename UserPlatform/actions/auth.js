import axios from "axios";
import { LOGIN_SUCCESS, LOGOUT } from "./types";

// login user
export const login = (numberPhone, password) => async (dispatch) => {
  axios
    .post("http://192.168.137.53:5000/users/signin", { numberPhone, password })
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};