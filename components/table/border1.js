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



export const Borderul = styled.ul`
position: relative;
  
flex-wrap: wrap;
margin-block-start: 1em;
margin-block-end: 0em;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 0px;
padding-inline-start: 0px;
@media screen and (max-width: 780px) {
    ul {
      position: relative;
      
      flex-wrap: wrap;
      justify-content: center;
      padding-right: 5px;
    }

`;

export const Borderli = styled.li`
position: relative;
    
    justify-content: space-between;
    align-items: center;
    list-style: none;
    transition: 0.9s;
    margin: 15px 0px;
    
    
    border-radius: 20px;
    background: linear-gradient(0deg, #000, #2b2b2b);
    
  }
  
  /* All borders individually */
  
  /* Facebook-border */
  
  
  
  &:nth-child(1):before,
  &:nth-child(1):after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    background: linear-gradient(
      85deg,
      #00fcfc,
      #b7f8f4,
      #83fff8,
      #00a6ff,
      #00fcfc,
      #b7f8f4,
      #83fff8,
      #4ebffc,
      #00fcfc,
      #83fff8
    );
    background-size: 200%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    
    border-radius: 20px;
    animation: animate1 15s linear infinite;
  }
  
  
  
  /* Pseudo Border Glow */
  &:nth-child(1):after,
  &:nth-child(2):after,
  &:nth-child(3):after,
  &:nth-child(4):after {
    filter: blur(5.2px);
  }
  
  @keyframes animate1 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 350% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  
  /* icons/text */
  
  /* Facebook */
  
  
  
  @keyframes animate2 {
    0% {
      background-position: 0 100%;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 100%;
    }
  }
  
  @media screen and (max-width: 780px) {
    li {
        position: relative;
       
        justify-content: space-between;
        align-items: center;
        list-style: none;
        transition: 0.9s;
        margin: 15px 0px;
        height: 100%;
        
        border-radius: 20px;
        background: linear-gradient(0deg, #000, #2b2b2b);
        
      }
      
      /* All borders individually */
      
      /* Facebook-border */
      
      
      
      li:nth-child(1):before,
      li:nth-child(1):after {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        background: linear-gradient(
          85deg,
          #00fcfc,
          #b7f8f4,
          #83fff8,
          #00a6ff,
          #00fcfc,
          #b7f8f4,
          #83fff8,
          #4ebffc,
          #00fcfc,
          #83fff8
        );
        background-size: 200%;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        
        border-radius: 20px;
        animation: animate1 15s linear infinite;
      }
      
      
      
      /* Pseudo Border Glow */
      li:nth-child(1):after,
      li:nth-child(2):after,
      li:nth-child(3):after,
      li:nth-child(4):after {
        filter: blur(5.2px);
      }
      
      @keyframes animate1 {
        0% {
          background-position: 0 0;
        }
        50% {
          background-position: 350% 0;
        }
        100% {
          background-position: 0 0;
        }
      }
        }
    }
`;





  
 

 