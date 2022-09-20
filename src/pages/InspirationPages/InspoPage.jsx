import React from 'react'
import PageNav from '../../components/Navbars/PageNav'
import Video from '../../assets/soon.mp4'
import styled from 'styled-components'
import { 
  PageContainer,
  HeaderWrap,
  PageHeader,
  GridContainer,
//   CategoryCard as ICard,
//   CatName as IName,
//   CatImg as Img,
} from '../../components/Catagories';

const VidWrap = styled.div`
margin-top: 6rem;
  position: relative;
  width: 25%;
  height: 25%;
  overflow: hidden;

  video {
  width: 100%;
  height: 100%;
  /* clip-path: polygon(64.00% 0.00%,100% 0%,100.00% 100.00%,33.00% 100.00%); */
  -o-object-fit: cover;
  object-fit: cover;
  
}
`

const InspoPage = () => {
  return (
    <PageContainer>
      <PageNav />
      <HeaderWrap>
      <PageHeader>My Style Inspiration<span>coming soon</span></PageHeader>
    </HeaderWrap>
      <GridContainer>
        <VidWrap>
          <video autoPlay loop muted src={Video} type='video/mp4'></video>
        </VidWrap>
    </GridContainer>
{/* //       <DetailLink to='#'>BOARD PHOTOS HERE</DetailLink> */}
             {/* the link will be the mapped through photos that user inputs */}
    </PageContainer>
  )
}

export default InspoPage