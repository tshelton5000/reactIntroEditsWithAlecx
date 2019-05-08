import React, { Component } from 'react';
    import {
      Navbar,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
    } from 'reactstrap';

    class Header extends Component {
      render() {
        return (
          <header>
            <Navbar className="header">
              <NavbarBrand href="/">React Library</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="https://github.com/yourhandle/yourrepoforthisapp">Github</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </header>
        );
      }
    }

    export default Header;