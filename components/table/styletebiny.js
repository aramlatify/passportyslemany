import styled from "styled-components";

const colors = {
  dark0: "#282A42",
  dark1: "#202037",
  accent0: "#00FFEA",
  accent1: "#029AAF",
  accent2: "#083A7C",
  accent3: "#F4084F",
  light0: "#ffffff",
};

const bgColor = "orange";

export const Message = styled.div`
  padding: 1rem 1.5rem;
  border-radius: 25px;
  color: ${colors.light0};
  position: relative;
  width: 50%;
  
  text-align: left;
  
  

  font-weight: 1000;
  font-size: 1rem;
  text-align: right;
  line-height: 1.5em;
  background-color: ${colors.dark1};

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 23px;
    height: 16px;
  }

  &::before {
    bottom: 3px;
    right: -22px;
    background-color: ${colors.dark0};
    width: 24px;
    height: 22px;
    z-index: 2;
    border-bottom-left-radius: 15px;
    transform: rotate(25deg);
  }

  &::after {
    right: -16px;
    bottom: 0;
    border-bottom-left-radius: 15px;
    background-color: ${bgColor};
    border: 2px solid ${bgColor};
    z-index: 1;
  }
  @media (max-width: 1450px) {
    
  }
  @media (max-width: 780px) {
    
    width: 80%;
    justify-content: center;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 500px;
  height: 50px;
`;

export const BlockWrapper = styled.div`
  max-width: 400px;
  padding: 18px 0 12px;
  margin-bottom: 24px;
  background: rgba(255, 255, 255, 0.05);
  @media (max-width: 1450px) {
    
  }
  @media (max-width: 780px) {
    
  }
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 48px;
  margin: 0 auto;

  position: relative;
  max-width: 1400px;
  background-color: ${colors.dark0};
  ${BlockWrapper}:nth-of-type() {
    background: rgba(255, 255, 255, 0.05);
  }
  @media (max-width: 1450px) {
    
  }
  @media (max-width: 780px) {
    
  }
`;