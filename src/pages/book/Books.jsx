import { Button, Divider } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CustomLayout from '../../components/customLayout/CustomLayout';
import Paper from '../../components/paper/Paper';
import { getAllBooks } from '../../service/book/bookAction';
import BookTable from './components/BookTable';
import styles from './books.module.scss';
import BookNewModal from './components/BookNewModal';

const Books = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  });

  return (
    <CustomLayout>
      <Paper>
        <div className={styles.btnNew}>
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            New
          </Button>
        </div>
        <Divider />
        <BookTable />
      </Paper>
      <BookNewModal
        isModalVisible={isModalVisible}
        handleCancel={() => setIsModalVisible(false)}
      />
    </CustomLayout>
  );
};

export default Books;
