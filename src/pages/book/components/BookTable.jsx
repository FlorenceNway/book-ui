import React, { useState } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space, Button, notification } from 'antd';
import { deleteBook, getAllBooks } from '../../../service/book/bookAction';
import BookUpdateModal from './BookUpdateModal';

const BookTable = () => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [initialValue, setInitialValue] = useState(null);
  const { Column } = Table;
  const books = useSelector((state) => state.bookReducer.data);
  const dispatch = useDispatch();
  const data = _.map(books, (book) => {
    return {
      key: book._id,
      name: book.name,
      pages: book.pages,
      description: book.description,
    };
  });

  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Deleted',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <>
      <Table dataSource={data}>
        <Column title="Name" dataIndex="name" />
        <Column title="pages" dataIndex="pages" />
        <Column title="description" dataIndex="description" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => {
            // console.log(record);
            return (
              <Space size="middle">
                <button
                  type="button"
                  onClick={() => {
                    setOpenUpdateModal(true);
                    setInitialValue(record);
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(
                      deleteBook(record.key, () => {
                        dispatch(getAllBooks()); // return onSuccess as a function
                        openNotification();
                      })
                    )
                  }
                >
                  Delete
                </button>
              </Space>
            );
          }}
        />
      </Table>
      <BookUpdateModal
        isModalVisible={openUpdateModal}
        handleCancel={() => setOpenUpdateModal(false)}
        initialValue={initialValue}
      />
    </>
  );
};

export default BookTable;
