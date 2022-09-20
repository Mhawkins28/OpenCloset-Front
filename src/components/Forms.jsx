import styled from 'styled-components';

export const FormContainer = styled.form`
  background: #f6f6f6;
  width: 100%;
  height: 800px;
  font-size:16px; color:#2E4756;; letter-spacing:1px;
  font-family:"Playfair Display", serif; font-weight:400;
  `

export const Signup = styled.h2`
  position: absolute;
  right: 8%;
  top: 5%;
  font-family: "Raleway";
  text-transform:uppercase;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 125%;
  letter-spacing: 0.5px;
  color: #2E4756;
  mix-blend-mode: normal;
  opacity: 0.8;
  text-shadow: -4.08px -4.08px 4.08px rgba(255, 255, 255, 0.007),
    6.215px 6.22px 4.08px rgba(174, 174, 192, 0.002);
`;

// export const Forgotpw = styled.h4`
//   display: flex;
//   justify-content: center;
//   font-family: "Raleway";
//   font-weight: 600;
//   font-size: 12px;
//   line-height: 14px;
//   letter-spacing: 0.01em;
//   color: #6accdc;
//   mix-blend-mode: normal;
//   opacity: 0.8;
//   text-shadow: -4.08px -4.08px 4.08px rgba(255, 255, 255, 0.007),
//     6.215px 6.22px 4.08px rgba(174, 174, 192, 0.002);
// `;

export const SignUp = styled.h1`
  position: absolute;
  right: 8%;
  top: 5%;
  font-family: "Raleway";
  text-transform:uppercase;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 125%;
  letter-spacing: 0.5px;
  color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: normal;
  opacity: 0.8;
  text-shadow: -4.08px -4.08px 4.08px rgba(255, 255, 255, 0.007),
    6.215px 6.22px 4.08px rgba(174, 174, 192, 0.002);
`;

export const Img = styled.div`
  margin: 50px auto;
  margin-bottom: 0px;
  display: block;
  height: 143.85px;
  width: 25%;
  background-size: 100%; 
`;

export const HeaderWrapper = styled.section`
display: flex;
flex-direction: column;
width: 90%;

margin-top: 4rem;
top: 5%;
`;

export const FormHeader = styled.h1`
  text-align:center; 
  font-size:50px; 
  text-transform:uppercase; 
  color:#AD898D; 
  letter-spacing:1px;
  font-family:"Playfair Display", serif; 
  font-weight:400;

  span {
    margin-top: 5px;
    font-size:15px; 
    color:#AE9886; 
    word-spacing:1px; 
    font-weight:normal; 
    letter-spacing:2px;
    text-transform: 
    uppercase; font-family:"Raleway", sans-serif; 
    font-weight:500;
    
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-rows: 27px 0;
    grid-gap: 20px;
    align-items: center;

    :before, :after {
      content: " ";
      display: block;
      border-bottom: .5px solid #919191;
      border-top: .5px solid #919191;
      height: 5px;
    }
  }
`;

export const InputWrapper = styled.div`
  color: #2E4756;
  display: block;
  width: 80%;
  margin: 50px auto;

`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #2E4756;
  display: block;
  font-family: "Syne";

  span {
    font-size: 10px;
    color: #AD898D
  }
`;

export const Input = styled.input`
  padding: 0.5em;
  background: #f6f6f6;
  border: none;
  border-radius: 3px;
  width: 100%;
  font-family: "Raleway";
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 0.5em;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: #2E4756;
  display: block;
  font-family: "Raleway";
`;

// export const ForgotPw = styled.section`
//   padding: 5em;
//   background: #f6f6f6;
// `;
