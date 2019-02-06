import React, { Component } from 'react';
import { Row, Col } from 'antd';
export class ArticleRow extends Component {
  render() {
    const article = this.props.article;

    return (
      <div className="article">
      <Row>
          <Col>
          <Row>
              <Col span="3">
                <img src={article.photo} className="img-thumbnail" alt= {article.title}/>
              </Col>
              <Col xs="auto">
              <Row>
                  <Col>

                    {article.title}

                  </Col>
              </Row>
              <Row>
                  <Col>

                    {article.description}

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