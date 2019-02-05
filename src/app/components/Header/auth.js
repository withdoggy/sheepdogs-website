import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
export default class AuthDropdown extends Component {
  render() {
    return (
      <>
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
    </>
    )
  }
}
