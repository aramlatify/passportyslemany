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
  margin-bottom: 2rem;
  margin-left: 48px;
  white-space: nowrap;
  font-weight: 1000;
  font-size: 2.5rem;
  text-align: right;
  line-height: 1.5em;
  color: ${colors.light0};
`;

export const League = styled.span`
  margin-left: 12px;
  font-family: "ApexBold";
  padding-top: 4px;
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
  padding: 8px 12px;
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
 
  
  border-left: 2px solid ${colors.accent0};
  padding: 0px 12px 0px 14px;
  font-family: "Dank Mono";
`;
export const BlockWrapper = styled.div`
  
  padding: 18px 0 12px;
  margin-bottom: 24px;
  background: rgba(255, 255, 255, 0.05);
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 48px;
  margin: 0 auto;

  position: relative;
 
  
  ${BlockWrapper}:nth-of-type() {
    background: rgba(255, 255, 255, 0.05);
  }
`;
const bgColor = "orange";

export const Message = styled.div`
  padding: 1rem 1.5rem;
  border-radius: 25px;
  color: ${colors.light0};
  position: relative;
  width: 50%;
  margin: 0 auto;
  text-align: left;
  display: flex;
  align-items: center;

  font-weight: 1000;
  font-size: 1.5rem;
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
`;

export const Img = styled.img`
  width: 500px;
  height: 50px;
`;
