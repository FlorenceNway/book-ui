/* eslint-disable no-console */
import axios from 'axios';
import { REGISTER, LOGIN } from './authActionTypes';

export const registerUser = (data, onSuccess) => async (dispatch) => {
  try {
    await axios.post('http://localhost:5001/api/users/register', data);

    dispatch({
      type: REGISTER,
    });
    if (typeof onSuccess === 'function') {
      onSuccess();
    }
  } catch (error) {
    console.log(error.response); // error.response.data
  }
};

export const loginUser = (data, onSuccess) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:5001/api/users/login',
      data
    );

    dispatch({
      type: LOGIN,
      payload: response.data,
    });
    if (typeof onSuccess === 'function') {
      onSuccess();
    }
  } catch (error) {
    console.log(error.response); // error.response.data
  }
};
