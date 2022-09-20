import React from 'react';
import { FaBars, FaRedhat } from 'react-icons/fa'
import { logout, getUser } from '../../utils/userService'
import styled from 'styled-components';
import {NavbarContainer,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
} from './NavbarElements'

const PNav = styled.div`
  background-color: transparent;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

const PageNav = ({user}) => {

const handleLogout = () => {
  logout()
  getUser()
}

    return (
    <PNav>
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
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
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
      </NavbarContainer>
    </PNav>
  )
}
export default PageNav

