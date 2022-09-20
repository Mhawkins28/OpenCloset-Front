import React from 'react';
import { FaBars, FaRedhat } from 'react-icons/fa'
import { logout, getUser } from '../../utils/userService'
import {NavbarContainer,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavLogo,
        Nav
} from './NavbarElements'

const TopNav = ({user}) => {

const handleLogout = () => {
  logout()
  getUser()
}

    return (
    <Nav>
      <NavbarContainer >
        <MobileIcon >
          <FaBars />
        </MobileIcon> 
      { user ? 
        ( <NavMenu>
          <NavItem>
            <NavLinks to="/closet">About</NavLinks>
          </NavItem>
        </NavMenu> 
        ) : ( 
      <NavMenu>
          <NavItem>
            <NavLinks to="/closet">Closet</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/lookbook">Lookbook</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/inspo">Style Inspiration</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" onClick={handleLogout}>Logout</NavLinks>
          </NavItem>
        </NavMenu> 
      )
      }
        <NavLogo to='/'><b>O<sup><FaRedhat/></sup></b>penCloset</NavLogo>
      </NavbarContainer>
    </Nav>
  )
}
export default TopNav

