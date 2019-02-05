import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
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
              <NavItem>
                <NavLink href="/events/">Terminy</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Psy</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Konto
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Zaloguj
                  </DropdownItem>
                  <DropdownItem>
                    Zarejestruj
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
       </Navbar>
      </div>
    );
  }
}

export default Header;
