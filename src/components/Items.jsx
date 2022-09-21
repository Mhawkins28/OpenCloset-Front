import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import {Button} from './Button'
import { Link } from 'react-router-dom'
import { 
  CategoryWrapper as ItemWrap,
  CategoryCard as ItemCard,
} 
  from './Catagories';

  const Item = styled.img`
  height: 130px;
  object-fit: contain;
  margin-bottom: 20px;
  box-sizing: border-box;
  width: 100%;  
`

const Name = styled.h2`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
`



const Items = ({ items, updateItemState, user }) => {
    
  const deleteItem = (id) => {
      axios.delete(`http://localhost:3001/items/${id}`)
      .then(res => {
          console.log(res)
          updateItemState(id)
      })
  }

    return (
        <ItemWrap>
        { 
          items.length === 0 ? "Let's add some clothes!" :  (items.map( item => {
                return <ItemCard key={item._id}>
                          <Name>{item.name}</Name>
                          <Item src={item.photo} alt={item.name}/>
                          <Link to={`/items/${item._id}`}><Button> Details</Button></Link>
                          <Button onClick={()=> deleteItem(item._id)}>Delete</Button>
                        </ItemCard>
            }))
        }
        </ItemWrap>
  )
}

export default Items