import React, { Component } from 'react'
import {
    NavItem,
    NavLink
   } from 'reactstrap';
export default class MainMenu extends Component {
  render() {
    return (
        <>
            <NavItem>
                <NavLink href="/events">Terminy</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/">Psy</NavLink>
            </NavItem>
        </>
    )
  }
}
