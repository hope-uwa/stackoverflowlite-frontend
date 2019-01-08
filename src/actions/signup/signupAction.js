/* eslint-disable max-len */
import Axios from 'axios';
import { toast } from 'react-toastify';
import {
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../types/signup';

export const signupSuccess = user => ({
  type: SIGN_UP_SUCCESS,
  user,
});

export const signupFailure = error => ({
  type: SIGN_UP_FAILURE,
  error,
});
export const signupRequest = () => ({
  type: SIGN_UP_REQUEST,
});

export const signupUser = user => dispatch => Axios.post('https://uwaelpis.herokuapp.com/api/v1/auth/signup', user)
  .then((response) => {
    toast.success('Signup successfull');
    dispatch(signupSuccess(response));
  })
  .catch((error) => {
    const toastMsg = error.response.data.error
      ? error.response.data.error[0] : error.response.data.message;
    toast.warn(`${toastMsg}`);
    dispatch(signupFailure(error.response.data));
  });
