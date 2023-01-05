import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  background-color: transparent;
  height: 70px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 3;
  width: 100%;
  padding: 0 30px;
  max-width: 100%;
`

export const NavLogo = styled(Link)`
  color: #2E4756;
  justify-self: flex-end;
  display: block;
  font-size: 1.6rem;
  /* -webkit-text-stroke-width: 1.5px; */
  /* -webkit-text-stroke-color: #AD898D; */
  // text-transform:  uppercase;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing:-.5px;

@media screen and (max-width: 650px) {
  color: #AD898D;
}
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-95%, 60%);
    font-size: 1.5rem;
    color: #AD898D;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
@media screen and (max-width: 600px) {
  display: none
}
`
export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(Link)`
  color: #919191;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  text-transform: uppercase;
  font-weight: bold;

&:hover {
  color: #AD898D;
  font-weight: 650px;
}
`