import React, { Component } from 'react';
import { Affix, BackTop, Layout } from 'antd';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
const { Content } = Layout;
export default class PageLayout extends Component {
  render() {
    return (
      <Layout className="layout">
        <div>
          <BackTop />
        </div>
        <Affix offsetTop={0}>
          <HeaderComponent />
        </Affix>
        <Content style={{ padding: '16px 50px', height: 'calc(100vh - 100px)', 'box-sizing': 'border-box' }}>
          {this.props.children}
        </Content>
        <FooterComponent />
      </Layout>
    );
  }
}
