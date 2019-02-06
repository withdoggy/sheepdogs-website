import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <Row gutter={12}>
                <Col span={6}><a href="https://www.youtube.com/channel/UC8RDbmn1sqWSaLYY30syrGg">Youtube</a></Col>
                <Col span={6}><Link to="/">Kontakt</Link></Col>
            </Row>
            <Row>
                <Col>
                <p className="text-muted">sheepdogs.pl</p>
                </Col>
            </Row>
      </footer>
    )
  }
}
