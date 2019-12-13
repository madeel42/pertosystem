import React, { useState } from 'react';
import icon from './../../../assets/icon.jpg'
import './navbar.css'
import { Link } from 'react-router-dom'
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
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand><Link to="/"><img className="heading" src={icon} /></Link></NavbarBrand>


        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <strong>Services</strong>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/webDevelopment_service'> Web development</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to='/SoftWare_development_Service'> Software development</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                 <Link to='/Database_service'> Database development</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <Link to='/networkService'>Network Engineering</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
               <Link to='/Consultancy_Service'>Consultancy</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
               <Link to='/analysis_Service'>Development/Analysis</Link>
                </DropdownItem>
              </DropdownMenu>
              
            </UncontrolledDropdown>
            <NavItem>
              <Link to='/about_us'><NavLink><strong>About</strong></NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/contactus"><NavLink><strong>Contact</strong></NavLink></Link>
            </NavItem>
           
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComp;




