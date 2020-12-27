import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../service/auth/authAction';

const RegisterPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const onFormSubmit = () => {
    const data = {
      name,
      email,
      password,
    };
    dispatch(registerUser(data));
  };
  return (
    <div style={{ marginTop: 200 }}>
      <Row>
        <Col span={12} offset={6}>
          <Card>
            <Form name="basic" onFinish={onFormSubmit}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name',
                  },
                ]}
              >
                <Input onChange={(e) => setName(e.target.value)} />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password onChange={(e) => setPassword(e.target.value)} />
              </Form.Item>

              <Form.Item>
                <div
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Link to="/">Already have an account.</Link>
                </div>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default RegisterPage;
