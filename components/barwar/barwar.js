

import React,{ useEffect, useState } from 'react'
import moment from 'moment';

import supabase from "../../utils/supabase";

import { useTheme, Grid, useMediaQuery, Hidden } from "@mui/material";

import * as Layout from "./Layout";
import * as Styled1 from "./styledate";






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

`



const Barwar = () => {

    const [fetchError, setFetchError] = useState(null)
    const [smoothies, setSmoothies] = useState(null)
  
    useEffect(() => {
      const fetchSmoothies = async () => {
        const { data, error } = await supabase
          .from('date')
          .select()
        
        if (error) {
          setFetchError('Could not fetch the smoothies')
          setSmoothies(null)
        }
        if (data) {
          setSmoothies(data)
          setFetchError(null)
        }
      }
  
      fetchSmoothies()
  
    }, [])

  
    console.log(smoothies)
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const mdUp = useMediaQuery(theme.breakpoints.up("md"));




  return (
    <div >
     
          

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
                    <Styled1.Data >{fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className="smoothies">
          {/* order-by buttons */}
          <div className="smoothie-grid">
            {smoothies.map((smoothie) => (
              <p key={smoothie.id}>{moment(smoothie.date).format('DD')}</p>
            ))}
          </div>
        </div>
      )}  </Styled1.Data>
                  </Styled1.Stat>

                  <Styled1.Stat>
                    <Styled1.Label>مانگ</Styled1.Label>
                    <Styled1.Data>  {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className="smoothies">
          {/* order-by buttons */}
          <div className="smoothie-grid">
            {smoothies.map((smoothie) => (
              <p key={smoothie.id}>{moment(smoothie.date).format('MM')}</p>
            ))}
          </div>
        </div>
      )} </Styled1.Data>
                  </Styled1.Stat>

                  
                  <Styled1.Stat>
                    <Styled1.Label>ساڵ</Styled1.Label>
                    <Styled1.Data>  {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className="smoothies">
          {/* order-by buttons */}
          <div className="smoothie-grid">
            {smoothies.map((smoothie) => (
              <p key={smoothie.id}>{moment(smoothie.date).format('YYYY')}</p>
            ))}
          </div>
        </div>
      )} </Styled1.Data>
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
  
        
  
      
   
      
    </div>
  )
}




export default Barwar;