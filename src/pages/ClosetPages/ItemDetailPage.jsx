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

const ItemDetailPage = ({items, deleteItem}) => {
  const { id } = useParams()
  const [ item, setItem ] = useState()

  useEffect(()=> {
    fetch(`http://localhost:3001/items/${id}`)
    .then(res => res.json())
    .then(data => setItem(data))
}, [])

  return (

    <DetailContainer>
      <HeaderWrap>
        <PageHeader>{item?.name}<span>{item?.category}</span></PageHeader>
      </HeaderWrap>
        <DetailWrap>
        <DetailCard>
          <DetailImg src={item?.photo} alt={item?.name}/>
          <p>{item?.notes}</p>
        </DetailCard>
          </DetailWrap>
        <Link to={`/items/edit/${item?._id}`}><Button>Edit Item</Button></Link>
      <Button onClick={()=> deleteItem(item._id)}>Delete</Button>
    </DetailContainer>
  )
}

export default ItemDetailPage
