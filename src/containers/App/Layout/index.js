import React from 'react';
import { Layout } from 'antd';
import './index.less';
import Header from './Header';

const { Content } = Layout;

export default function AppLayout({ children }) {
  return (
    <Layout>
      <Header/>
      <Content className="content-wrapper">
        <div className="wrapper">
          {children}
        </div>
      </Content>
    </Layout>
  );
}
