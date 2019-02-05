import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {NewsList} from '../../components/News';
export default class HomePage extends Component {
  render() {
    return (
        <div className="homepage">
        <Header/>
        <Container fluid>
          <Row>
            <Col>
              <NewsList/>
            </Col>
          </Row>
        </Container>
        <Footer/>
        </div>
    )
  }
}
