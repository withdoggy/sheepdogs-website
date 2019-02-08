import React, { Component } from 'react';
import { Col, Row } from 'antd';
import { Timeline } from 'antd';
import { Link } from 'react-router-dom';
export class ArticleRow extends Component {
  render() {
    const article = this.props.article;
    return (
      <Timeline.Item>
        <Title content={article.title} />
        <Abstract content={article.description} />
        <ReadMore id={article.id} />
      </Timeline.Item>
    );
  }
}

export class Title extends Component {
  render() {
    const content = this.props.content;
    return (
      <Row>
        <Col>
          <h3>{content}</h3>
        </Col>
      </Row>
    );
  }
}

export class Abstract extends Component {
  render() {
    const content = this.props.content;
    return (
      <Row>
        <Col>{content}</Col>
      </Row>
    );
  }
}

export class ReadMore extends Component {
  render() {
    const content = this.props.id;
    return (
      <Row>
        <Col style={{ textAlign: 'right' }}>
          <Link to={'/article/' + content}>Czytaj więcej</Link>
        </Col>
      </Row>
    );
  }
}
