import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import {
  PageContainer as DetailContainer,
  HeaderWrap,
  PageHeader,
  CategoryCard as DetailCard,} 
  from '../../components/Catagories'
  
const DetailImg = styled.img`
  height: 300px;
  object-fit: contain;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;  
`

const DetailWrap = styled.div`
  display: flex;
	margin: 5rem 5vw;
	padding: 0;
  max-width: 87%;
  margin-top: 10rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr
  }
`
const LookDetailPage = ({looks }) => {
  const { id } = useParams()
  const [ look, setLook ] = useState()

  useEffect(()=> {
    fetch(`http://localhost:3001/looks/${id}`)
    .then(res => res.json())
    .then(data => setLook(data))
}, [])

  return (

    <DetailContainer>
      <HeaderWrap>
        <PageHeader>{look?.name}<span>{look?.category}</span></PageHeader>
      </HeaderWrap>
        <DetailWrap>
        <DetailCard>
          <DetailImg src={look?.items} alt={look?.name}/>
          <p>{look?.notes}</p>
        </DetailCard>
          </DetailWrap>
          <Link to={`/looks/edit/${look?._id}`}><Button>Edit Look</Button></Link>
    </DetailContainer>
  )
}

export default LookDetailPage
