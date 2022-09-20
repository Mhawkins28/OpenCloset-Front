import React, { useState } from 'react'
import axios from 'axios'
// import { getToken, setToken, getUserFromToken } from "../../utils/tokenService";
import { useNavigate } from "react-router-dom";
import {  
  FormContainer,
  HeaderWrapper,
  FormHeader,
  InputWrapper,
  Label,
  Input,} 
  from '../../components/Forms'
// import { getUser } from '../../utils/userService';

const LoginPage = ({user, setUser}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState()

  const handleChange =(e) => {
      setFormData({...formData, [e.target.id] :e.target.value})
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', formData)
      .then((res) =>{
          if(res.status === 200){
              console.log(res.data.name)
              setUser(res.data)
              navigate('/')
          }
        }) 
        .catch(err=>{
          console.log(err)
          //add modal or page for error message here
      })
}

return (
  <FormContainer onSubmit={handleSubmit}>
    <HeaderWrapper>
      <FormHeader>Login</FormHeader>
    </HeaderWrapper>
    <InputWrapper>
      <Label htmlFor="username">Username</Label>
      <Input id="username" name="username" type="text" onChange={handleChange} />
    </InputWrapper>
    <InputWrapper>
      <Label htmlFor="name">Password</Label>
      <Input id="password" name="password" type="password" onChange={handleChange} />
    </InputWrapper>
    <Input type='submit' value='Log in' />
  </FormContainer>
)
}

export default LoginPage