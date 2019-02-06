import React, { Component } from 'react'
import { ArticleList } from '../../components/Article';
import PageLayout from '../../layout';
import './style.css';
export default class HomePage extends Component {
  render() {
    return (
        <PageLayout>
          <div className="homepage">
              <ArticleList/>
          </div>
        </PageLayout>
    )
  }
}
