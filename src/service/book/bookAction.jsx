import axios from 'axios';
import {
  CREATE_BOOK,
  GET_ALL_BOOKS,
  DELETE_BOOK,
  UPDATE_BOOK,
} from './bookActionTypes';

export const createBook = (data, onSussess) => async (dispatch) => {
  try {
    await axios.post('http://localhost:5001/api/books', data);

    dispatch({
      type: CREATE_BOOK,
    });
    if (typeof onSussess === 'function') {
      onSussess();
    }
  } catch (error) {
    console.log(error);
  }
};

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

export const deleteBook = (id, onSuccess) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5001/api/books/${id}`);
    if (typeof onSuccess === 'function') {
      onSuccess();
    }
    dispatch({
      type: DELETE_BOOK,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = (id, data, onSuccess) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:5001/api/books/${id}`, data);
    if (typeof onSuccess === 'function') {
      onSuccess();
    }
    dispatch({
      type: UPDATE_BOOK,
    });
  } catch (error) {
    console.log(error);
  }
};
