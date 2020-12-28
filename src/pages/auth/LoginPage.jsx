import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Card } from 'antd';
import { loginUser } from '../../service/auth/authAction';

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const history = useHistory();

  const onFormSubmit = () => {
    const data = { email, password };
    dispatch(
      loginUser(data, () => {
        history.push('/books');
      })
    );
  };
  return (
    <div style={{ marginTop: 200 }}>
      <Row>
        <Col span={12} offset={6}>
          <Card>
            <Form name="basic" onFinish={onFormSubmit}>
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
                  <Link to="/register">Register</Link>
                </div>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default LoginPage;
