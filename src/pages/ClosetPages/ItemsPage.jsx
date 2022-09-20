import React from 'react'
import Items from '../../components/Items'
import { 
  PageContainer,
  HeaderWrap,
  PageHeader,
  GridContainer,
  } 
  from '../../components/Catagories';

const ItemsPage = ({items, updateItemState}) => {

  return (
  <PageContainer>
    <HeaderWrap>
      <PageHeader>My Clothes<span>Category here</span></PageHeader>
    </HeaderWrap>
    <GridContainer>
        <Items items={items} updateItemState={updateItemState} />
    </GridContainer>
  </PageContainer>
  )
}

export default ItemsPage