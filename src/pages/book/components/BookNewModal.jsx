import React from 'react';
import { Modal } from 'antd';

const BookNewModal = ({ isModalVisible, handleOk, handleCancel }) => {
  return (
    <Modal
      title="New Book"
      visible={isModalVisible}
      onOk={handleOk} // when server received data
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
export default BookNewModal;
