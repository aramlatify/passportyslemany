import React, { useEffect, useState, useRef, } from "react";
import { useTheme, Grid, useMediaQuery, Hidden } from "@mui/material";
import MyTextField from "./textfield";
import MultiSelect from "./autocomplete";
import ButtonTile from "./Button/ButtonTile";
import * as Layout from "./Layout";
import * as Styled1 from "./styledate";
import * as Border1 from "./border1";
import { createGlobalStyle } from "styled-components";
import Styled, { css } from "styled-components";





import styled from "styled-components";
const LinearGradientBackground = css`
  background: linear-gradient(225deg, "#ffbbff, #060c21, #00bcd4");
`;

const LinearGradientPosition = css`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
`;






const colors = {
  dark0: "#14142C",
  dark1: "#202037",
  accent0: "#00FFEA",
  accent1: "#029AAF",
  accent2: "#083A7C",
  accent3: "#F4084F",
  light0: "#ffffff",
};
export const Date = styled.p`
  font-weight: 1000;
  font-size: 1rem;
  text-align: center;
  margin-block-start: 0.5em;
margin-block-end: 0em;
  color: ${colors.light0};
  @media  only screen and (min-width:368px) and (max-width:990px) {
    font-weight: 500;
    margin-block-start: 0.1em;
  }
`;
export const ContainerDate = styled.div`
padding-right:20px;
  padding-left:20px;
  align-items: center;
  
  flex-direction: column;
  width: 100%;
  
  height: 65px;
  
 
  border-radius: 36px;
    
  border-left: 2px solid ${colors.accent0};
  border-right: 2px solid ${colors.accent0};
 
`;
const BlockWrapper1 = styled.div`


padding: -2px 0 6px;
background: rgba(255,255,255,0.05);


width: 345px;



border-radius: 38px;

`;
export const MainDate = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 36px;
  margin: 0 auto;
flex-grow:1;
  position: relative;
  max-width: 1400px;
  background-color: ${colors.dark1};
  ${BlockWrapper1}:nth-of-type() {
    background: rgba(255, 255, 255, 0.05);
  }
  
`;
const Wrapper = styled.section`

padding: 12px;

color: #fff;
position: relative;
background: #202037;
border-radius: 20px;

  
  justify-content: center;
  align-items: center;
  
  z-index: 1;
  @media  only screen and (min-width:1000px) and (max-width:2000px) {
    padding-right: 60px;
  }

`;





const AdvancedFilter = ({
  searchValue,
  onChangeLocation,
  handleChangeValue,
  onClick,
  ...other
}) => {
  


  const [op, setOp] = useState([]);

  
const dimensions = [
  { id: 1, name:  "سلێمانی" },
  { id: 2, name: "کەلار" },
  { id: 3, name: "ڕانییە" },
  { id: 4, name: "چەمچەماڵ" }
];
  

  const [name, setName] = useState("");

  const [error, setError] = useState("");

  const onChange = (e) => {
    const newValue = e.target.value;

    if (!newValue.match(/[٠-٩\\0-9\\a-z%<>\\A-Z%<>\\$'"\[\]]/)) {
      setError("");
      handleChangeValue(e);
      console.log("slaw");
    } else {
      setError("تکایە ناوەکە بە پیتی عەرەبی بنووسە");
      console.log("ssssssssssslaw");
    }
    setName(newValue);
    
  };
  const [name1, setName1] = useState("");
  const [error1, setError1] = useState("");
  const onChange1 = (e) => {
    const newValue1 = e.target.value;

    if (!newValue1.match(/[٠-٩\\0-9\\a-z%<>\\$'"\[\]]/)) {
      setError1("");
      handleChangeValue(e);
    } else {
      setError1("تکایە ناوەکە بە پیتی عەرەبی بنووسە");
    }
    setName1(newValue1);
  };
  const [name2, setName2] = useState("");
  const [error2, setError2] = useState("");
  const onChange2 = (e) => {
    const newValue2 = e.target.value;

    if (!newValue2.match(/[٠-٩\\0-9\\a-z%<>\\$'"\[\]]/)) {
      setError2("");
      handleChangeValue(e);
    } else {
      setError2("تکایە ناوەکە بە پیتی عەرەبی بنووسە");
    }
    setName2(newValue2);
  };

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  
  return (
    <>
     <Grid  container   style={{ display: "flex", flexDirection: mdUp ? "" : "column" }}>
      
      <Grid item xs={12} sm={12} md={9} lg={9} style={{ paddingTop: 15 ,paddingLeft: 10 , padding: 20}}>
      <Border1.Borderul >
        <Border1.Borderli >
      <Wrapper>
          <Grid
           sx={ {flexGrow:1,
            marginTop: theme.spacing(0),
            justifyContent: "center",
            display: "flex",
            margin: theme.spacing(1),
            marginLeft: theme.spacing(2),
           
         
            marginRight: theme.spacing(1),
            "& .MuiFormLabel-root": {
              color: "white" ,
              
            }}}
            style={{ display: "flex", flexDirection: smUp ? "" : "column" }}
          >
            <MyTextField
              type="text"
              name="Fullname"
              value={searchValue.Fullname}
              onChange={onChange}
              helperText={error}
              error={!!error}
              label=" ناوی سیانیت لێرە بنووسە"
              multiline
              maxRows={2}
              sx={{width: "45%",    margin: theme.spacing(1.2),marginLeft: theme.spacing(1),
              marginRight: theme.spacing(1),
      
              "@media (max-width: 780px)": {
                width:"100%",
                
              }}}
             
              {...other}
            />
            <MyTextField
              type="text"
              name="Shurename"
              value={searchValue.Shurename}
              onChange={onChange1}
              helperText={error1}
              error={!!error1}
              label="نازناو ( لقب )"
              sx={{width: "25%" ,marginLeft: theme.spacing(1),
              marginRight: theme.spacing(1),
      
              "@media (max-width: 780px)": {
                width:"100%",
                
              }}}
             
              {...other}
            />
            <MyTextField
              type="text"
              name="Mothername"
              value={searchValue.Mothername}
              onChange={onChange2}
              helperText={error2}
              error={!!error2}
              label="ناوی دایک "
              sx={{width: "30%" ,
              marginLeft: theme.spacing(1),
              marginRight: theme.spacing(1),
              "@media (max-width: 780px)": {
                width:"100%",
                
              }}}
            
              {...other}
            />
             <MultiSelect
                  items={dimensions}
                  label="شوێن"
                  selectAllLabel="هەموو شارەکان"
                  
                 
                  
                />
            <Grid item style={{ paddingTop: 10,paddingBottom:0,paddingRight: 50  }}>
            <ButtonTile type="default"  onClick={onClick}>
              
            </ButtonTile>
            </Grid>
          </Grid>
          </Wrapper>
  </Border1.Borderli>
      </Border1.Borderul>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} style={{ paddingTop: 10 ,}}>
        <Hidden only={['xs','sm','md']}>
        
        
        
        <Styled1.BlockWrapper>
        <Styled1.Container>
              <Layout.Row>
                <Styled1.Name>بەرواری نوێ کردنەوەی خشتەکە</Styled1.Name>
              </Layout.Row>
              <Layout.Column>
                <Styled1.Stats>
                <Styled1.Stat>
                    <Styled1.Label>ڕۆژ</Styled1.Label>
                    <Styled1.Data > </Styled1.Data>
                  </Styled1.Stat>

                  <Styled1.Stat>
                    <Styled1.Label>مانگ</Styled1.Label>
                    <Styled1.Data></Styled1.Data>
                  </Styled1.Stat>

                  
                  <Styled1.Stat>
                    <Styled1.Label>ساڵ</Styled1.Label>
                    <Styled1.Data> </Styled1.Data>
                  </Styled1.Stat>
                </Styled1.Stats>
              </Layout.Column>
            </Styled1.Container>
          </Styled1.BlockWrapper>
          </Hidden>
        </Grid>
        
        <Grid >

        <Hidden mdUp>
        <MainDate>
        
            <ContainerDate>
             
                <Date>بەرواری نوێ کردنەوەی خشتەکە</Date>
              
             
         
      
      
             
            </ContainerDate>
         
          
        </MainDate>
        </Hidden>
        </Grid>
  
        
      </Grid>
      
    </>
  );
};

export default AdvancedFilter;
