import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Card } from 'antd';

const LoginPage = () => {
  return (
    <div style={{ marginTop: 200 }}>
      <Row>
        <Col span={12} offset={6}>
          <Card>
            <Form name="basic">
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
                <Input />
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
                <Input.Password />
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
