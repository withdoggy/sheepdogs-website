import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
   } from 'reactstrap';
import AuthDropdown from './auth';
import MainMenu from './menu';
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }

      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
  render() {
    return (
      <div className="header">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/" className="mr-auto">Sheepdogs in Poland</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <MainMenu/>
              <AuthDropdown/>
            </Nav>
          </Collapse>
         </Navbar>
      </div>
    );
  }
}

export default Header;
