import { CREATE_BOOK } from './bookActionTypes';
import { GET_ALL_BOOKS } from './bookActionTypes';
import axios from 'axios';

export const getAllBooks = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5001/books');

    dispatch({
      type: GET_ALL_BOOKS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
