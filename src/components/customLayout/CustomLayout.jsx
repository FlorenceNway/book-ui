import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useHistory } from 'react-router';
import { logout } from '../../service/auth/authAction';

const CustomLayout = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item
            key="4"
            style={{ float: 'right' }}
            onClick={() => {
              dispatch(logout());
              history.push('/');
            }}
          >
            LOGOUT
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
