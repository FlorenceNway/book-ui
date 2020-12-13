import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { Modal, Form, Input } from 'antd';
import { createBook, getAllBooks } from '../../../service/book/bookAction';

const { TextArea } = Input;

const BookNewModal = ({ isModalVisible, handleCancel }) => {
  const [name, setName] = useState();
  const [pages, setPages] = useState();
  const [description, setDescription] = useState();

  const dispatch = useDispatch();

  const handleOk = () => {
    const data = {
      name,
      pages: _.parseInt(pages),
      description,
    };
    dispatch(
      createBook(data, () => {
        dispatch(getAllBooks());
      })
    );
    handleCancel();
  };

  return (
    <Modal
      title="New Book"
      visible={isModalVisible}
      onOk={handleOk} // when server received data
      onCancel={handleCancel}
    >
      <Form name="basic">
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
          name="page"
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
export default BookNewModal;
