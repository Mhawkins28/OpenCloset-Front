import React from 'react'
import { MobileNavContainer, CloseIcon, Icon, MobileWrap, MobileMenu, MenuLink, BtnWrap, BtnRoute } from './MobileNavElements'


const MobileNav = ({isOpen, toggle}) => {
  return (
    <>
    <MobileNavContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <MobileWrap>
          <MobileMenu>
            <MenuLink to='' onClick={toggle}>
              Home
            </MenuLink>
            <MenuLink to='' onClick={toggle}>
              Closet
            </MenuLink>
            <MenuLink to='' onClick={toggle}>
              Lookbook
            </MenuLink>
            <MenuLink to='' onClick={toggle}>
              Inspiration
            </MenuLink>
            <MenuLink to='' onClick={toggle}>
              Logout
            </MenuLink>
          </MobileMenu>
          <BtnWrap>
            <BtnRoute to=''></BtnRoute>
          </BtnWrap>
        </MobileWrap>
        <CloseIcon />
      </Icon>
    </MobileNavContainer>
    
    
    </>
  )
}

export default MobileNav