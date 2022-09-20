import styled from 'styled-components';


export const Button = styled.button`
  border-radius: .15rem;
  background: transparent;
  border: 1.81px solid white;
  white-space: nowrap;
  padding: 14px 48px;
  margin: 5px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.1s ease-in-out;
  }
`