import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  state = {
    handleItemClick: this.handleItemClick,
    activeItem: '',
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  accountMenu = () => {
    if (this.props.currentUser === null) {
      return (
        <Dropdown.Item name="login" active={this.state.activeItem === 'login'} onClick={this.handleItemClick}>
          Zaloguj
        </Dropdown.Item>
      );
    } else {
      return (
        <>
          <Dropdown.Item name="login" active={this.state.activeItem === 'login'} onClick={this.handleItemClick}>
            Profil
          </Dropdown.Item>
          <Dropdown.Item name="logout" active={this.state.activeItem === 'logout'} onClick={this.handleItemClick}>
            Wyloguj
          </Dropdown.Item>
        </>
      );
    }
  };
  render() {
    return (
      <Menu fixed="top" inverted>
        <Menu.Item name="home" active={this.state.activeItem === 'home'} onClick={this.handleItemClick}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item name="events" active={this.state.activeItem === 'events'} onClick={this.handleItemClick}>
          <Link to="/events">Events</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Dropdown item text="Konto">
            <Dropdown.Menu>{this.accountMenu()}</Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}
