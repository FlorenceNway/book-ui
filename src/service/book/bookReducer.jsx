import { CREATE_BOOK } from './bookActionTypes';
import { GET_ALL_BOOKS } from './bookActionTypes';

const initialValues = {
  data: {},
};

export default function (state = initialValues, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return state;
    case GET_ALL_BOOKS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
