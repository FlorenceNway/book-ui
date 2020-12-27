import axios from 'axios';
import { REGISTER } from './authActionTypes';

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
    console.log(error.response); //error.response.data
  }
};
