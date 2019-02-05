import React, { Component } from 'react';
import { Row, Col, Media } from 'reactstrap';
export class ArticleRow extends Component {
  render() {
    const article = this.props.article;

    return (
      <div className="article">
      <Row>
          <Col>
          <Row>
              <Col xs="3">
                <img src={article.photo} className="img-thumbnail" alt= {article.title}/>
              </Col>
              <Col xs="auto">
              <Row>
                  <Col>
                  <Media heading style={{textAlign: "left"}}>
                    {article.title}
                    </Media>
                  </Col>
              </Row>
              <Row>
                  <Col>
                  <Media body style={{textAlign: "left"}}>
                    {article.description}
                </Media>
                  </Col>
              </Row>
              </Col>
          </Row>
          </Col>
      </Row>
      </div>
    );
  }
}