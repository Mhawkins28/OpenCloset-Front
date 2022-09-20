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


const NewItem = ({ addItem }) => {
  const initialState = {
    name: '',
    photo: '',
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
  axios.post('http://localhost:3001/items', formData )
  .then(res =>  {
      setFormData(initialState)
      addItem(res.data)
      navigate('/items', { replace: true })
  })
}

  return (
    <FormContainer onSubmit={handleSubmit}>
      <HeaderWrapper>
        <FormHeader>Create New Item</FormHeader>
      </HeaderWrapper>
      <InputWrapper>
        <Label htmlFor="category">Category<span> *Required</span></Label>
        <Input id="category" type="text" onChange={handleChange} />
        <Message>EXAMPLE</Message>
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="name">Item Name</Label>
        <Input id="name" type="text" onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="photo">Image</Label>
        <Input id="photo" type="text" onChange={handleChange} />
        <Message>EXAMPLE</Message>
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="notes">Any Notes?</Label>
        <Input id="notes" type="text" onChange={handleChange} />
      </InputWrapper>
      <Input type='submit' value='Add New Item!' />
    </FormContainer>
  )
}

export default NewItem

