import React from 'react'
import Looks from '../../components/Looks'
import PageNav from '../../components/Navbars/PageNav';
import { 
  PageContainer,
  HeaderWrap,
  PageHeader,
  GridContainer,
  } 
  from '../../components/Catagories';


const LooksPage = ({looks, updateState}) => {

  return (
  <PageContainer>
    <PageNav />
    <HeaderWrap>
      <PageHeader>My Looks<span>Category here</span></PageHeader>
    </HeaderWrap>
    <GridContainer>
        <Looks looks={looks} updateLookState={updateState} />
    </GridContainer>
  </PageContainer>
  )
}

export default LooksPage