import React from 'react'
import {Link} from 'react-router-dom'
import PageNav from '../../components/Navbars/PageNav'
// import { Button } from '../../components/Button'
import { 
  PageContainer,
  HeaderWrap,
  PageHeader,
  GridContainer,
  CategoryWrapper,
  CategoryCard,
  CatName,
  CatImg}
  from '../../components/Catagories'

const LookbookCatPage = () => {
  return (
    <PageContainer>
      <PageNav />
      <HeaderWrap>
        <PageHeader>My Lookbook<span>Categories</span></PageHeader>
    </HeaderWrap>
    <GridContainer style={{ marginTop: "2rem" }}>
      <CategoryWrapper>
        <CategoryCard>
          <Link to="/looks">
            <CatImg src="images/Casual.png" alt="Bag"/>
          </Link>
          <CatName>Day</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/looks">
            <CatImg src="images/Work.png" alt="Bag"/>
          </Link>
          <CatName>Work</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/looks">
            <CatImg src="images/Night.png" alt="Bag"/>
          </Link>
          <CatName>Night</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/looks">
            <CatImg src="images/Formal.png" alt="Bag"/>
          </Link>
          <CatName>Formal</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/looks">
            <CatImg src="images/Swim.png" alt="Bag"/>
          </Link>
          <CatName>Vacation</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/looks">
            <CatImg src="images/Athletics.png" alt="Bag"/>
          </Link>
          <CatName>Athletic</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/looks">
            <CatImg src="images/festival.png" alt="Festival"/>
          </Link>
          <CatName>Festival</CatName>
        </CategoryCard>
        <CategoryCard>
          <Link to="/looks">
            <CatImg src="images/Go-to.png" alt="Bag"/>
          </Link>
          <CatName>My Go-to's</CatName>
        </CategoryCard>
      </CategoryWrapper>
    </GridContainer>
  {/* <IconNav /> */}
  </PageContainer>
)
}

export default LookbookCatPage   


