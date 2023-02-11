import styled from "styled-components";

const colors = {
    dark0: "#14142C",
    dark1: "#202037",
    accent0: "#00FFEA",
    accent1: "#029AAF",
    accent2: "#083A7C",
    accent3: "#F4084F",
    light0: "#ffffff",
  };



export const Name = styled.h3`
position: relative;
    
    
    display: flex;
    
    flex-direction: row;
    
  justify-content: center;
 
  flex-grow: 1;
  align-items: center;
    
    
    

  
  
  
  font-weight: 1000;
  font-size: 1.5rem;
  text-align: center;
  margin: 0px;
  color: ${colors.light0};
`;

export const League = styled.span`
margin-left: 0px;
  font-family: "ApexBold";
  padding-top: 0px;
  color: ${colors.accent2};
`;

export const Stat = styled.span`
  display: flex;
  flex-direction: column;
  width: 100px;
  
  justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;

  
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
 
  transition: all 0.3s;
  
  background: rgba(255, 255, 255, 0);

  ${Stat}:not(:last-of-type) {
    
    border-left: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

export const Label = styled.span`
  font-size: 1rem;
  margin-bottom: 0px;
  color: ${colors.accent1};
  align-items: center;
`;

export const Data = styled.span`
align-items: center;
  
  color: ${colors.light0};
  
`;

export const Container = styled.div`

border-radius: 36px;
    
align-items: center; 
    
   
    border-left: 2px solid #00FFEA;
    border-right: 2px solid #00FFEA;
    
    font-family: "Dank Mono";
   
    


height: 160px;


  display: flex;
  flex-direction: column;
 
  border-left: 2px solid ${colors.accent0};
  border-right: 2px solid ${colors.accent0};
  
  @media (max-width: 1280px) {
   
    align-items: center;
  }
`;

export const BlockWrapper = styled.div`


padding: 0px 0 0px;
background: rgba(255,255,255,0.05);
border-radius: 38px;
@media (max-width: 1280px) {
  
  
}
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 48px;
  margin: 0 auto;
  
  position: relative;
  
  background-color: ${colors.dark0};
  ${BlockWrapper}:nth-of-type() {
    background: rgba(255, 255, 255, 0.05);
  }
  
`;


export const Img = styled.img`
  width: 500px;
  height: 50px;
`;
