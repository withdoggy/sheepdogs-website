import React, { Component } from 'react';
import { Col, Row } from 'antd';
import { Timeline } from 'antd';
import { Link } from "react-router-dom";
export class ArticleRow extends Component {
  render() {
    const article = this.props.article;

    return (
      <Row>
        <Col>
        <Timeline.Item>
            <Row>
              <Col>
              <h3>{article.title}</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                {article.description}
              </Col>
            </Row>
            <Row>
              <Col style={{textAlign: "right"}}>
                <Link to={'/article/'+article.id}>Czytaj więcej</Link>
              </Col>
            </Row>
        </Timeline.Item>
        </Col>
      </Row>
    );
  }
}