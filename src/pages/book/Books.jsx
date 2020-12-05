import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBooks } from '../../service/book/bookAction';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  });

  return <div>Books</div>;
};

export default Books;
