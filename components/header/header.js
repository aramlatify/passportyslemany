import React from "react";
import Image from 'next/image'
import styled, { keyframes } from "styled-components";

import ReactLogo from "../header/33.svg";

import BackgroundMountain from "../header/verdecita.png";
import { useTheme, Grid, useMediaQuery, Hidden } from "@mui/material";


function App() {
  

  return (
    <>
      <div>
        
        <Header>
        
          <AppWrapper>
    
          </AppWrapper>
         
          <h1>
            بەخێربێن بۆ پەرەی فەرمی <br /> بەڕێوەبەرایەتی <span>پاسپۆرتی </span>{" "}
            سلێمانی
          </h1>
          <TextContainer>
       
       ناوی ئەو هاوڵاتیانەی پاسپۆرتەکانیان تەواو بووە لە هەر یەک لە فەرمانگەکانی  {" "}
      <br /> <span>پاسپۆرتی ( سلێمانی و هەڵەبجە و کەلار و ڕانیە و چەمچەماڵ )</span> <br />{" "}
      

  </TextContainer>
          <div className="img-container">
        <Image
          src={BackgroundMountain}
          height={620}
         
          placeholder="blur"
          blurDataURL
        alt="description of image"
          
        />
      </div>
          
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
  @media (max-width: 850px) {
    display: none;
  }
`;


const TextContainer = styled.div`
position: absolute;
margin-right: 480px;
margin-left: 0px;
  margin-top: 80px;
  color: white;
  font-weight: 900;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.5em;
  
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
    transform: translate(-10%, 20%);
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
      transform: translate(-50%, -10%);
    }
  }
  
`;



export default App;

// <= 600px celulares
// <= 900px tabletas
// <= 1280px laps
// <= 1920px laps o pc de escritorio con full HD
