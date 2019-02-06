import React, { Component } from 'react'
import { Layout } from "antd";
import Footer from '../../components/Footer';
import {NewsList} from '../../components/News';
import HeaderComponent from '../../components/Header';
export default class HomePage extends Component {
  render() {
    return (
        <div className="homepage">
        <HeaderComponent/>
          <Layout>
              <NewsList/>
          </Layout>
          <Footer/>
        </div>
    )
  }
}
