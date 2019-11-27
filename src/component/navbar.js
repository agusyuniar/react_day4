import React, { useState } from 'react';
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
  DropdownItem
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand><img src="logo.png" alt='logogo' width='50'></img><strong>HOME</strong>tapi<strong>BUKAN</strong></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/bukan">Bukan Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                  Mantap-Mantap
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="https://agusyuniar.github.io/clone-net/">
                    Netflix Ori
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://netflix.com">
                    Netflix Bajakan
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink href="https://google.com">
                    Pakde
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;