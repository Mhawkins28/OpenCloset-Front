import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Select from 'react-select';
import { 
  FormContainer,
  HeaderWrapper,
  FormHeader,
  InputWrapper,
  Label,
  Input,
  Message
} from '../../components/Forms';


const NewLook = ({ addLook }) => {
  const initialState = {
    name: '',
    items: '',
    category: '',
    notes: ''
}
const navigate = useNavigate()

const [formData, setFormData] = useState(initialState)

const handleChange = (e) => {
  console.log(e.target)
  setFormData({...formData, [e.target.id] : e.target.value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formData)
  axios.post('http://localhost:3001/looks', formData )
  .then(res =>  {
      setFormData(initialState)
      addLook(res.data)
      navigate('/looks', { replace: true })
  })
}

  return (
    <FormContainer onSubmit={handleSubmit}>
      <HeaderWrapper>
        <FormHeader>Create New Look</FormHeader>
      </HeaderWrapper>
      <InputWrapper>
        <Label htmlFor="category">Category<span> *Required</span></Label>
        <Input id="category" type="text" onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="lookName">Look Name:</Label>
        <Input id="lookName" type="text" onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="items">Add Items or Upload a Photo of your Look:</Label>
        <Input id="items" type="text" onChange={handleChange} />
        <Message>Grab a URL while you're shopping and add it here! </Message>
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="notes">Any Notes?</Label>
        <Input id="notes" type="text" onChange={handleChange} />
      </InputWrapper>
      <Input type='submit' value='Add New Look!' />
    </FormContainer>
  )
}

export default NewLook