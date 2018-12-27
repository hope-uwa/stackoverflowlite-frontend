import Axios from 'axios';
import { toast } from "react-toastify";
import { 
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOG_OUT,
} from '../types/login';

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});
const logout = () => ({ type: LOG_OUT });

export const loginUser = user => dispatch => Axios.post('http://localhost:5002/api/v1/auth/login', user)
  .then((response) => {
    toast.success("Login successfull");
    dispatch(loginSuccess(response.data));
    return LOGIN_SUCCESS;
  })
  .catch((error) => {
    const toastMsg = error.response.data.error
      ? error.response.data.error : error.response.data.message; 
    toast.warn(`${toastMsg}`);
    dispatch(loginFailure(error.response.data));
    return LOGIN_FAILURE;
  });
export const logoutUser = () => dispatch => dispatch(logout());