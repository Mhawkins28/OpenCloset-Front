import styled from 'styled-components';


export const PageContainer = styled.main`
background: #2E4756;
background: radial-gradient(circle, rgba(68,160,141,1) 3%, rgba(33,97,90,1) 57%, rgba(9,54,55,1) 96%);
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative; 
	box-sizing: border-box;
  margin-top: 0px;

  :before {
  content: '';
  position: absolute;
  background: linear-gradient(312deg, rgba(55,67,120,0.7203256302521008) 19%, rgba(47,59,106,0.4066001400560224) 94%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  }

`

export const HeaderWrap = styled.section`
display: flex;
flex-direction: column;
width: 90%;
margin-bottom: 6rem;
/* margin-top: .25rem; */
position:absolute;
top: 7%
`

export const PageHeader = styled.h1`
  text-align:center; 
  font-size:50px; 
  text-transform:uppercase; 
  color:#AD898D; 
  letter-spacing:1px;
  font-family:"Playfair Display", serif; 
  font-weight:400;

  span {
    margin-top: 5px;
    font-size:15px; 
    color:#AE9886; 
    word-spacing:1px; 
    font-weight:normal; 
    letter-spacing:2px;
    text-transform: 
    uppercase; font-family:"Raleway", sans-serif; 
    font-weight:500;
    
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-rows: 27px 0;
    grid-gap: 20px;
    align-items: center;

    :before, :after {
      content: " ";
      display: block;
      border-bottom: .5px solid #919191;
      border-top: .5px solid #919191;
      height: 5px;
    }
  }
`

export const GridContainer = styled.section`
  min-height: 100vh;
  display: flex;
  box-sizing: border-box;
  /* margin-top: 5rem; */
  position: relative;
  justify-content: center;
  align-items: center;
`
export const CategoryWrapper = styled.div`
  display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 2rem;
	margin: 5rem 5vw;
	padding: 0;
  max-width: 87%;
  justify-content: center;
  /* align-items: center; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr
  }
  /* play with media more with final sized cards */
`

export const CategoryCard = styled.div`
  transition: all 0.2s ease-in-out;
  position: relative;
	display: block;
	height: 85%;  
  box-sizing: border-box;
  padding:  10px;


  &:hover{
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: .15rem;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  } 
`
export const CatName = styled.h2`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #AD898D;

  @media screen and (max-width: 768px) {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`
export const CatImg = styled.img`
  height: 115px;
  object-fit: contain;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 105%;  
`