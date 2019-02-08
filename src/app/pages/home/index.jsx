import React, { Component } from 'react';
import { ArticleList } from '../../components/Article';
export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <ArticleList />
      </div>
    );
  }
}
