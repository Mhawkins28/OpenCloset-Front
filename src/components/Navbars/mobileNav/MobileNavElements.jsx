import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export const MobileNavContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  /* opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100')}; */
  top: 0;
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;  top: 1.2rem;
  right: 1.5rem; 
  background: transparent;
  font-size: 2rem;
  outline: none;
`

export const MobileWrap = styled.ul`
  color: #fff;
`

export const MobileMenu = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6,80px);
  text-align: center;

  @media screen and (max-width:480px) {
    grid-template-rows: repeat(6, 60px);
}
`

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;

  &:hover {
    color: #656867;
    transition: all 0.2s ease-in-out;
  }

`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
export const BtnRoute = styled(Link)`
  border-radius: 50px;
  background: #747474;
  white-space: nowrap;
  padding: 16px 16px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }



`

