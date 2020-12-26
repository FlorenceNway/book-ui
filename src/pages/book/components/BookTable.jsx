import React from 'react';
import { useHistory } from 'react-router';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space, notification } from 'antd';
import { deleteBook, getAllBooks } from '../../../service/book/bookAction';

const BookTable = () => {
  const { Column } = Table;
  const books = useSelector((state) => state.bookReducer.data);
  const history = useHistory();
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
                    history.push(`/edit/${record.key}`);
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
    </>
  );
};

export default BookTable;
