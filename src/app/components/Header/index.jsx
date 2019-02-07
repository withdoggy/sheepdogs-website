import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
//import AuthDropdown from './auth';
//import MainMenu from './menu';
const { Header } = Layout;
class HeaderComponent extends Component {
  state = {
    current: 'homePage',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };
  render() {
    let b;
    if (this.props.childProps.isLoggedIn) {
      b = <Link to="/logout">Logout</Link>;
    } else {
      b = <Link to="/auth">Login</Link>;
    }
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="homePage">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="events">
            <Link to="/events">Kalendarz</Link>
          </Menu.Item>
          <Menu.Item key="dupa">
            <Link to="/secret">Kalendarz</Link>
          </Menu.Item>
          <Menu.Item key="login">{b}</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderComponent;
