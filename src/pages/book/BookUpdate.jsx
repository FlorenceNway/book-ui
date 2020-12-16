import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Row, Col } from 'antd';
import { useParams, useHistory } from 'react-router';
import { getAllBooks, updateBook } from '../../service/book/bookAction';
import CustomLayout from '../../components/customLayout/CustomLayout';
import Paper from '../../components/paper/Paper';

const { TextArea } = Input;

const BookUpdate = () => {
  const [name, setName] = useState();
  const [pages, setPages] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();

  const books = useSelector((state) => state.bookReducer.data);
  const initValue = books[id];

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  const onFormSubmit = () => {
    const editName = name || initValue.name;
    const editPages = pages || initValue.pages;
    const editDescription = description || initValue.description;
    dispatch(
      updateBook(
        id,
        {
          name: editName,
          pages: _.parseInt(editPages),
          description: editDescription,
        },
        () => history.goBack()
      )
    );
  };

  return (
    <CustomLayout>
      <Paper>
        <Row>
          <Col span={12}>
            {initValue && (
              <Form
                name="basic"
                initialValues={{
                  name: initValue?.name,
                  pages: initValue?.pages,
                  description: initValue?.description,
                }}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input name!',
                    },
                  ]}
                >
                  <Input
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    value={name}
                  />
                </Form.Item>
                <Form.Item
                  label="Pages"
                  name="pages"
                  rules={[
                    {
                      required: true,
                      message: 'Please input pages!',
                    },
                  ]}
                >
                  <Input
                    onChange={(event) => {
                      setPages(event.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Description"
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: 'Please input pages!',
                    },
                  ]}
                >
                  <TextArea
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </Form.Item>
                <div>
                  <Button type="primary" onClick={onFormSubmit}>
                    Save
                  </Button>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </Paper>
    </CustomLayout>
  );
};

export default BookUpdate;
