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
  margin-bottom: 2rem;
  flex-grow: 1;
  text-align: center;
  white-space: nowrap;
  font-weight: 1000;
  font-size: 1.5rem;
  
  line-height: 1.5em;
  color: ${colors.light0};
`;

export const League = styled.span`
  margin-left: 0px;
  font-family: "ApexBold";
  
  color: ${colors.accent2};
`;

export const Stat = styled.span`
  display: flex;
  flex-direction: column;
  width: 100px;
  text-align: center;
`;

export const Stats = styled.div`
  display: flex;
  max-width: 625px;
 
  transition: all 0.3s;

  background: rgba(255, 255, 255, 0);

  ${Stat}:not(:last-of-type) {
    border-right: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

export const Label = styled.span`
  font-size: 1.4rem;
  margin-bottom: 4px;
  color: ${colors.accent1};
`;

export const Data = styled.span`
  font-size: 1.6rem;
  color: "#ffffff";
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
 
  border-radius: 38px;
  border-left: 2px solid ${colors.accent0};
  border-right: 2px solid ${colors.accent0};
  font-family: "Dank Mono";
`;
export const BlockWrapper = styled.div`

border-radius: 38px;
  
  background: rgba(255, 255, 255, 0.05);
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
 
  margin: 0 auto;

  position: relative;
 
  
  ${BlockWrapper}:nth-of-type() {
    background: rgba(255, 255, 255, 0.05);
  }
`;
