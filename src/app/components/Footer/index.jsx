import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { FaYoutube, FaGithubAlt } from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/io';
const { Footer } = Layout;

export default class FooterComponent extends Component {
  render() {
    return (
      <Footer>
        <Row gutter={16}>
          <Col span={8} style={{ textAlign: 'center' }}>
            <p>
              <a href="//www.youtube.com/channel/UC8RDbmn1sqWSaLYY30syrGg">
                <FaYoutube /> YouTube
              </a>
            </p>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <p>
              <a href="//github.com/withdoggy/">
                <FaGithubAlt /> Github
              </a>
            </p>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Link to="/">
              <IoIosContacts /> Kontakt
            </Link>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <p>sheepdogs.pl</p>
          </Col>
        </Row>
      </Footer>
    );
  }
}
