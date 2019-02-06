import React, { Component } from 'react'
import { Row, Col, Layout } from 'antd';
import { Link } from "react-router-dom";
import { FaYoutube, FaGithubAlt } from 'react-icons/fa';
import { IoIosContacts } from "react-icons/io";
import './style.css';
const {Footer} = Layout;

export default class FooterComponent extends Component {
  render() {
    return (
        <Footer className="footer">
            <Row gutter={16}>
                <Col className="gutter-row" span={8} style={{textAlign: 'center'}}>
                    <p><div className="gutter-box"><a href="https://www.youtube.com/channel/UC8RDbmn1sqWSaLYY30syrGg" className="footer-link"><FaYoutube/> YouTube</a></div></p>
                </Col>
                <Col className="gutter-row" span={8} style={{textAlign: 'center'}}>
                <p><div className="gutter-box"><a href="https://github.com/withdoggy/" className="footer-link"><FaGithubAlt/> Github</a></div></p>
                </Col>
                <Col className="gutter-row" span={8} style={{textAlign: 'center'}}><div className="gutter-box"><Link to="/" className="footer-link"><IoIosContacts/> Kontakt</Link></div></Col>
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
