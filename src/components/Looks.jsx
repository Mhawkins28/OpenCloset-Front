import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {Button} from '../components/Button'
import { 
  CategoryWrapper as LookWrap,
  CategoryCard as LookCard,} 
  from '../components/Catagories';

const LItems = styled.img`
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



const Looks = ({ looks, updateLookState, user }) => {
    
  const deleteLook = (id) => {
      axios.delete(`http://localhost:3001/looks/${id}`)
      .then(res => {
          console.log(res)
          updateLookState(id)
      })
  }

    return (
        <LookWrap>
        { 
          looks.length === 0 ? "Let's add some clothes!" :  (looks.map( look => {
                return <LookCard key={look._id}>
                          <Name>{look.name}</Name>
                          <LItems src={look.items} alt={look.name}/>
                          <Link to={`/looks/${look._id}`}><Button>Details</Button></Link>
                          <Button onClick={()=> deleteLook(look._id)}>Delete</Button>
                        </LookCard>  
            }))
        }
        </LookWrap>
  )
}

export default Looks