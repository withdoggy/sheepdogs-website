import React, { Component } from 'react'
import { Row, Col, Layout } from 'antd';
import { Link } from "react-router-dom";
import './style.css';
const {Footer} = Layout;

export default class FooterComponent extends Component {
  render() {
    return (
        <Footer className="footer">
            <Row gutter={16}>
                <Col className="gutter-row" span={8} style={{textAlign: 'center'}}><div className="gutter-box"><a href="https://www.youtube.com/channel/UC8RDbmn1sqWSaLYY30syrGg" className="footer-link">Youtube</a></div></Col>
                <Col className="gutter-row" span={8} style={{textAlign: 'center'}}><div className="gutter-box"><Link to="/" className="footer-link">dd</Link></div></Col>
                <Col className="gutter-row" span={8} style={{textAlign: 'center'}}><div className="gutter-box"><Link to="/" className="footer-link">Kontakt</Link></div></Col>
            </Row>
            <Row>
                <Col style={{textAlign: 'center'}}>
                <p>sheepdogs.pl</p>
                </Col>
            </Row>
      </Footer>
    )
  }
}
