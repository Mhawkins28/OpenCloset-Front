import styled from 'styled-components';

export const HomeContainer = styled.div`
  background: #2E4756;
  background: radial-gradient(circle, rgba(68,160,141,1) 3%, rgba(33,97,90,1) 57%, rgba(9,54,55,1) 96%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  :before {
  content: '';
  position: absolute;
  background: linear-gradient(312deg, rgba(55,67,120,0.7203256302521008) 19%, rgba(47,59,106,0.4066001400560224) 94%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  }
`

export const HBkgd = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left:0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  video {
  width: 100%;
  height: 102%;
  clip-path: polygon(64.00% 0.00%,100% 0%,100.00% 100.00%,33.00% 100.00%);
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  filter: grayscale(60%);
  
}
`
export const HomeContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  mix-blend-mode: difference;

  
h1 {
  color: #cfd2f1;
  letter-spacing: .75rem;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width: 768px) {
  font-size: 2.5rem;
  letter-spacing: .15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
}
`
export const BtnWrap = styled.div`
margin-top: 32px;
display: flex;
align-items: center;

`

export const Wrap = styled.h1`
  margin-top: 32px;
  display: flex;
  align-items: center;
  /* color: black; */
  font-size: 2rem;
  z-index: 3

`