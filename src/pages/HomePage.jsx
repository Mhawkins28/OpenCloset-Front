import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../components/Navbars/TopNavbar'
import Video from '../assets/Video1.mp4';
import { Button } from '../components/Button'
import {HomeContainer,
        HomeContent,
        HBkgd,
        BtnWrap,
        Wrap
} from '../components/HomeElements'

const HomePage = ({user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (

    <HomeContainer>
      <HBkgd>
      <TopNav toggle={toggle} />
        <video autoPlay loop muted src={Video} type='video/mp4'></video>
      </HBkgd>
  { user ? 
      ( <HomeContent>
      {/* {console.log("user", user)} */}
        <h1>Welcome {user.name}!</h1>
        <Wrap>
        &#10024;  &#10024;;
        </Wrap>
      </HomeContent> 
    ) : (
      <HomeContent>
        {/* {console.log("no user")} */}
        <h1>HELLO THERE</h1> 
        <BtnWrap>
        <Link to="/login">
            <Button onClick={()=>{
            setUser(null) 
            }} >Sign In</Button>
          </Link>
          <Link to="/signup" >
            <Button >Sign Up</Button>
          </Link>
        </BtnWrap>
      </HomeContent> 
      )}
    </HomeContainer>
  );
};

export default HomePage;