import axios from 'axios';
import { CREATE_BOOK, GET_ALL_BOOKS } from './bookActionTypes';

export const getAllBooks = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5001/api/books');

    dispatch({
      type: GET_ALL_BOOKS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
