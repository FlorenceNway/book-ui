import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CustomLayout from '../../components/customLayout/CustomLayout';
import Paper from '../../components/paper/Paper';
import { getAllBooks } from '../../service/book/bookAction';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  });

  return (
    <CustomLayout>
      <Paper>Hello</Paper>
    </CustomLayout>
  );
};

export default Books;
