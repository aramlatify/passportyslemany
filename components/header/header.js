import React, { useState } from "react";
import Image from 'next/image'
import styled, { keyframes } from "styled-components";

import ReactLogo from "../header/logo.svg";
import BackgroundMountain from "../header/verdecita.png";


function App() {
  const [value, setValue] = useState();

  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  console.log(value);

  return (
    <>
      <div>
        
        <Header>
        
          <AppWrapper>
          
    

          <Image
          src={ReactLogo}
          height={"60"}
          width={"60"}
          placeholder="blur"
          layout="fill"
        

        
          
        />
          
          
            
          </AppWrapper>
         
          <h1>
            بەخێربێن بۆ پەرەی فەرمی <br /> ىەڕێوەبەرایەتی <span>پاسپۆرتی </span>{" "}
            سلێمانی
          </h1>

          <div className="img-container">
        <Image
          src={BackgroundMountain}
          height={620}
         
          placeholder="blur"
          blurDataURL
        
          
        />
      </div>
          <TextContainer>
            <div>
               ناوی ئەو هاوڵاتیانەی پاسپۆرتەکانیان تەواو بووە لە هەر یەلە لە فەرمانگەکانی پاسپۆرتی {" "}
              <br /> <span>( سلێمانی و کەلار و ڕانیەو چەمچەماڵ)</span> <br />{" "}
              
            </div>
          </TextContainer>
        </Header>
        </div>
      
        </>
   
  

   
  );
}



const float = keyframes`
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 10px); }
    to   { transform: translate(0, -0px); } 
`;


/* For 1920 Desktop */ 
const AppWrapper = styled(ReactLogo)`
  margin-top: 2px;
  margin-left: 15px;
  position: absolute;
                
              }

  
  left: 0;
  
  flex: 0.8;
  animation: ${float} 3s ease-in-out infinite;
  
  
  @media (max-width: 980px) {
    margin-top: 5px;
    
  margin-left: 15px;
  left: 0;
  }
  @media (max-width: 780px) {
    
    
    margin-top: 3px;
    
 
  margin-left: 14px;
  left: 0;
  }
`;

const TextContainer = styled.div`

margin-right: 0px;
margin-left: 0px;
  margin-top: 10px;
  color: white;
  font-weight: 900;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.5em;
  transform: translate(0%, -260%);
  span {
    color: orange;
  }
  @media (max-width: 1280px) {
    margin-top: 10px;
  color: white;
  font-weight: 900;
  font-size: 1.0rem;
  text-align: center;
  line-height: 1.5em;
  transform: translate(0%, -220%);
  }
  @media (max-width: 780px) {
    display: none;
  }
`;



const Header = styled.header`

  padding-top: 1rem;
  position: relative;
  
  @media (max-width: 1450px) {
    
  }
  @media (max-width: 780px) {
    
    padding-top: 0.5rem;
  }
 

  
  h1 {
    position: absolute;
    color: white;
    font-weight: 1000;
    font-size: 2rem;
    text-align: right;
    line-height: 1.5em;
    transform: translate(-5%, 20%);
    span {
      color: orange;
    }
    @media (max-width: 1450px) {
    
    }
    @media (max-width: 980px) {
      font-size: 1.2rem;
    
    line-height: 1.7em;
    transform: translate(-10%, 10%);
    }
    @media (max-width: 480px) {
      font-size: 1.0rem;
    
    line-height: 1.7em;
    transform: translate(-10%, 0%);
    }
  }
  
`;
const ImageContainer2 = styled.div`
position: absolute;
width: 90rem;
height: 7rem;
top: 5%;
left: 0;
z-index: -2;
display: block;
margin-block-start: 0em;
margin-block-end: 0em;
margin-inline-start: 10px;
margin-inline-end: 0px;
`
const StyledImage = styled(Image)`

object-fit: fill;
}
@media (max-width: 1450px) {

}
@media (max-width: 980px) {
  width: 98%;
  height: 100%;
  top: 5%;
  left: 0;
  z-index: -2;
  display: block;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 5px;
  margin-inline-end: 0px;
  img {
    
    width: 101%;
  height: 100%;
  object-fit: fill;
  }
}
}
`;

export default App;

// <= 600px celulares
// <= 900px tabletas
// <= 1280px laps
// <= 1920px laps o pc de escritorio con full HD
