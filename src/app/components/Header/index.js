import React, { Component } from 'react';
import { Layout, Menu} from "antd";
import { Link } from "react-router-dom";
//import AuthDropdown from './auth';
//import MainMenu from './menu';
const { Header } = Layout;
class HeaderComponent extends Component {
    menu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="exit">exit</Menu.Item>
        </Menu>
      );
    handleMenuClick(e) {
        if (e.key === "exit") {
          sessionStorage.removeItem("access_token");
          window.location.hash = "login";
        }
    };

  render() {
    return (
      <Header className="header">
       <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["homePage"]}
        style={{ lineHeight: "64px" }}
      >
      <Menu.Item key="homePage">
          <Link to="/">HomePage</Link>
        </Menu.Item>
      </Menu>
      </Header>
    );
  }
}

export default HeaderComponent;
