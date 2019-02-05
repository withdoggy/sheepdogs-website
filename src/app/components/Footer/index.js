import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        <Container>
            <Row>
                <Col><a href="https://www.youtube.com/channel/UC8RDbmn1sqWSaLYY30syrGg">Youtube</a></Col>
                <Col><Link to="/">Kontakt</Link></Col>
            </Row>
            <Row>
                <Col>
                <p className="text-muted">sheepdogs.pl</p>
                </Col>
            </Row>

        </Container>
      </footer>
    )
  }
}
