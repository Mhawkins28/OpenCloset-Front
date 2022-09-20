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

const EditItem = ({setItems}) => {
  let { id } = useParams()
  let navigate = useNavigate()


  const initialState = {
  name: '',
  photo: '',
  category: '',
  notes: ''
}

const [formData, setFormData] = useState(initialState)

const handleChange = (e) => {
  setFormData({...formData, [e.target.id] : e.target.value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  axios.put(`http://localhost:3001/items/${id}`, formData )
  .then(res =>  {
      setFormData(initialState)
      setItems(res.data)
      navigate(`/items`, { replace: true })
  })
}

useEffect(()=> {
  axios.get(`http://localhost:3001/items/${id}`)
  .then(res => {
      setFormData(res.data)
  })
}, [])

  return (
    <FormContainer onSubmit={handleSubmit}>
      <PageNav />
      <HeaderWrapper>
        <FormHeader>Create New Item</FormHeader>
      </HeaderWrapper>
      <InputWrapper>
        <Label htmlFor="category">Category<span> *Required</span></Label>
        <Input id="category" name="category" type="text" value={formData?.category} onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="name">Item Name</Label>
        <Input id="name" type="text" name="name " value={formData?.name} onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="photo">Image</Label>
        <Input id="photo" type="text" name="photo " value={formData?.photo} onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="notes">Any Notes?</Label>
        <Input id="notes" type="text" name="notes " value={formData?.notes} onChange={handleChange} />
      </InputWrapper>
      <Input type='submit' value='Update Item!' />
    </FormContainer>
  )
}

export default EditItem