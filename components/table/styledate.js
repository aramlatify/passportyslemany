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

export const TwitchIcon = styled.img.attrs({
  src: "/images/twitch.svg",
})`
  max-width: 20px;
  fill: #fff;
  transition: all 0.3s;

  opacity: ${(props) => (props.url ? 0.75 : 0.1)};
  cursor: ${(props) => (props.url ? "pointer" : "not-allowed")};

  &:hover {
    transform: ${(props) => (props.url ? "scale(1.15)" : 0)};
    opacity: ${(props) => (props.url ? 1 : 0.1)};
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  height: 24px;
  position: absolute;
  right: 24px;
  top: -6px;
`;

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
  
  color: ${colors.light0};
`;

export const League = styled.span`
margin-left: 0px;
  font-family: "ApexBold";
  padding-top: 4px;
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
  font-size: 1.4rem;
  margin-bottom: 4px;
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
    width: 300px;
    align-items: center;
  }
`;

export const BlockWrapper = styled.div`


padding: -2px 0 6px;
background: rgba(255,255,255,0.05);






border-radius: 38px;
@media (max-width: 1280px) {
  width: 300px;
  margin-right:15px;
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
