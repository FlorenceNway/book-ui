import React, { useState, useEffect, usePrevious } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { Modal, Form, Input, notification } from 'antd';
import { updateBook, getAllBooks } from '../../../service/book/bookAction';

const { TextArea } = Input;

const BookUpdateModal = ({ isModalVisible, handleCancel, initialValue }) => {
  const [name, setName] = useState();
  const [pages, setPages] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  const prevState = usePrevious(initialValue);

  useEffect(() => {
    setName(prevState?.name);
    setPages(prevState?.pages);
    setDescription(prevState?.description);
  }, [prevState]);

  const openNotification = () => {
    notification.open({
      message: 'Updated Success',
      description: 'Updated',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  const handleOk = () => {
    const id = initialValue.key;
    const data = {
      name,
      pages: _.parseInt(pages),
      description,
    };
    dispatch(
      updateBook(id, data, () => {
        dispatch(getAllBooks());
        openNotification();
      })
    );
    handleCancel();
  };

  return (
    <Modal
      title="Edit Book"
      visible={isModalVisible}
      onOk={handleOk} // when server received data
      onCancel={handleCancel}
    >
      <Form name="basic" initialValues={initialValue}>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your book name!',
            },
          ]}
        >
          <Input onChange={(event) => setName(event.target.value)} />
        </Form.Item>
        <Form.Item
          label="Pages"
          name="pages"
          rules={[
            {
              required: true,
              message: 'Please input your book pages!',
            },
          ]}
        >
          <Input onChange={(event) => setPages(event.target.value)} />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input your book Description!',
            },
          ]}
        >
          <TextArea onChange={(event) => setDescription(event.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default BookUpdateModal;
