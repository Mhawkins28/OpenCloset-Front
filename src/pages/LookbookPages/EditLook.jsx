import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PageNav from '../../components/Navbars/PageNav' 
import axios from 'axios'
import {  
  FormContainer,
  HeaderWrapper,
  FormHeader,
  InputWrapper,
  Label,
  Input,
  Message} 
  from '../../components/Forms'

const EditLook = ({setLooks}) => {
  let { id } = useParams()
  let navigate = useNavigate()

  const initialState = {
    name: '',
    items: '',
    category: '',
    notes: ''
}

const [formData, setFormData] = useState(initialState)

const handleChange = (e) => {
  setFormData({...formData, [e.target.id] : e.target.value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  axios.put(`http://localhost:3001/looks/${id}`, formData )
  .then(res =>  {
      setFormData(initialState)
      setLooks(res.data)
      navigate(`/looks`, { replace: true })
  })
}

useEffect(()=> {
  axios.get(`http://localhost:3001/looks/${id}`)
  .then(res => {
      setFormData(res.data)
  })
}, [])

  return (
    <FormContainer onSubmit={handleSubmit}>
    <PageNav />
    <HeaderWrapper>
      <FormHeader>Edit Look</FormHeader>
    </HeaderWrapper>
    <InputWrapper>
      <Label htmlFor="category">Category<span> *Required</span></Label>
      <Input id="category" type="text" name="category" value={formData?.category}  onChange={handleChange} />
      <Message>EXAMPLE</Message>
    </InputWrapper>
    <InputWrapper>
      <Label htmlFor="name">Look Name</Label>
      <Input id="name" type="text" name="name" value={formData?.itemName}  onChange={handleChange} />
    </InputWrapper>
    <InputWrapper>
      <Label htmlFor="items">Add Items or Upload a Photo of your Look</Label>
      <Input id="items" type="text" name="items" value={formData?.items}  onChange={handleChange} />
      <Message>EXAMPLE</Message>
    </InputWrapper>
    <InputWrapper>
      <Label htmlFor="notes">Any Notes?</Label>
      <Input id="notes" type="text" name="notes" value={formData?.notes} onChange={handleChange} />
    </InputWrapper>
    <Input type='submit' value='Edit Look!' />
  </FormContainer>
  )
}

export default EditLook