import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { getUser } from "../../utils/userService";
import { setToken } from "../../utils/tokenService";
import { useNavigate } from "react-router-dom";
import {Button} from '../../components/Button'
import {  
  FormContainer,
  HeaderWrapper,
  FormHeader,
  InputWrapper,
  Label,
  Input,
  } 
  from '../../components/Forms'

const CreateUserPage = ({ setUser, user}) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState()

const handleChange = (e) => {
    console.log(e.target)
    setFormData({...formData, [e.target.id] : e.target.value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  axios.post('http://localhost:3001/signup', formData)
  .then(res =>{
      if(res.status === 200){
        setToken(res.data.access) 
        getUser()
        navigate('/login')
      }
  }).catch(err=>{
      console.log(err)
  })
}

// const isFormInvalid = () => {
//   return !(
//     user?.username && user?.password === user?.passwordConf
//   );
// };

  return (
    <FormContainer onSubmit={handleSubmit} >
    <HeaderWrapper>
      <FormHeader>Sign Up</FormHeader>
    </HeaderWrapper>
    <InputWrapper>
      <Label>Name</Label>
      <Input name="name" type="text" id="name" onChange={handleChange} required />
    </InputWrapper>
    <InputWrapper>
      <Label>Username</Label>
      <Input name="username" id="username" type="username" onChange={handleChange} required/>
    </InputWrapper>
    <InputWrapper>
      <Label>Password</Label>
      <Input name="password" id="password" type="password" onChange={handleChange} required/>
    </InputWrapper>
    <InputWrapper>
      <Label>Confirm Password</Label>
      <Input name="passwordConf" id="passwordConf" type="password" onChange={handleChange} required/>
    </InputWrapper>


    <Input type='submit' value='SIGN UP!' style={{ borderBottomColor: "transparent", fontSize: "1.5rem" }} />

    <Link style={{ textDecoration: "none" }} to="/" id="cancel" value="Cancel">
      <Button style={{ color: "black", border: "0px solid black", fontFamily: "Playfair Display" }} >BACK</Button>
    </Link>
  </FormContainer>
  )
}

export default CreateUserPage