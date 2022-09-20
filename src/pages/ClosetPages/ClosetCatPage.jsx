import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageNav from '../../components/Navbars/PageNav'
import { 
  PageContainer,
  HeaderWrap,
  PageHeader,
  GridContainer,
  CategoryWrapper,
  CategoryCard,
  CatName} 
  from '../../components/Catagories';

const CatImg = styled.img`
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 90%;  
`

const ClosetCatPage = () => {
  return (
  
  <PageContainer>
    <PageNav />
    <HeaderWrap>
      <PageHeader>My Closet<span>Categories</span></PageHeader>
    </HeaderWrap>
    <GridContainer>
      <CategoryWrapper>
        <CategoryCard>
        <Link to="/items">
          <CatImg src="images/Shirt3.png" alt="Tops" />
        </Link>
          <CatName>Tops</CatName>
          
        </CategoryCard>
        <CategoryCard>
          <Link to="/items">
            <CatImg src="images/Pants.png" alt="Pants" />
          </Link>
          <CatName>Bottoms</CatName>

        </CategoryCard>
        <CategoryCard>
        <Link to="/items">
          <CatImg src="images/jumpsuit.png" alt="Jumpsuit" />
        </Link>
          <CatName>Dresses/Jumpsuits</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/items">
            <CatImg src="images/Outerwear.png" alt="Jacket"/>
          </Link>
          <CatName>Outerwear</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/items">
            <CatImg src="images/Shoes.png" alt="Shoest"/>
          </Link>
          <CatName>Shoes</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/items">
            <CatImg src="images/Bag.png" alt="Bag"/>
          </Link>
          <CatName>Bags</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/items">
            <CatImg src="images/Hat.png" alt="Hat"/>
          </Link>
          <CatName>Accessories</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/items">
            <CatImg src="images/rings.png" alt="Earring"/>
          </Link>
          <CatName>Jewelery</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/items">
            <CatImg src="images/Bra.png" alt="Jupsuit"/>
          </Link>
          <CatName>Lingerie</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/items">
            <CatImg src="images/ShoppingBags.png" alt="Shopping"/>
          </Link>
          <CatName>Need It</CatName>
        </CategoryCard>
      </CategoryWrapper>
    </GridContainer>
  {/* <IconNav /> */}
  </PageContainer>

  
)
}

export default ClosetCatPage   

    // <Category>
    //   <CatLinks to="#">Tops</CatLinks>
    // </Category>
    // <Category>
    //   <CatLinks to="#">Bottoms</CatLinks>
    // </Category>
    // <Category>
    //   <CatLinks to="#">Dresses/Jumpsuits</CatLinks>
    // </Category>
    // <Category>
    //   <CatLinks to="#">Outerwear</CatLinks>
    // </Category>
    // <Category>
    //   <CatLinks to="#">Shoes</CatLinks>
    // </Category>
    // <Category>
    //   <CatLinks to="#">Bags</CatLinks>
    // </Category>
    // <Category>
    //   <CatLinks to="#">Accessories</CatLinks>
    // </Category>
    // <Category>
    //   <CatLinks to="#">Jewelery</CatLinks>
    // </Category>
    // <Category>
    //   <CatLinks to="#">Lingerie</CatLinks>
    // </Category>
    // <Category>
    //   <CatLinks to="#">Need It</CatLinks>
    // </Category>
    // <Button>
    //   this button will direct me to the right catagory page continaing the items 
    // </Button>

