import _ from 'lodash';
import { CREATE_BOOK, GET_ALL_BOOKS } from './bookActionTypes';

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
        data: _.keyBy(action.payload.data, '_id'),
      };
    default:
      return state;
  }
}
