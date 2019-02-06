import React, { Component } from 'react'
import { Layout, Row,Col } from "antd";
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import './style.css';
const {
  Content
} = Layout;
export default class PageLayout extends Component {
  render() {
    return (
        <Layout>
          <HeaderComponent/>
          <Layout>
            <Row type="flex" align="middle">
              <Col>
                <Content className="content">
                  {this.props.children}
               </Content>
              </Col>
            </Row>
          </Layout>
          <FooterComponent/>
        </Layout>
    )
  }
}
