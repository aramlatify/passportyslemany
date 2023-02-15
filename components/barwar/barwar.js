

import React,{ useEffect, useState } from 'react'
import moment from 'moment';
import {

  Typography
} from "@mui/material";
import supabase from "../../utils/supabase";

import { Grid, Hidden } from "@mui/material";

import * as Layout from "./Layout";
import * as Styled1 from "./styledate";

import styled from "styled-components";
import ReactTimeAgo from "react-time-ago";
import Views from '../view';




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
  text-align: start;
   margin-top: 5px;
  padding-bottom: 10px;
  margin-block-start: 0em;
  span {
    color: orange;
  }
margin-block-end: 0em;
  color: ${colors.light0};
  @media  only screen and (min-width:368px) and (max-width:990px) {
    font-weight: 500;
    margin-block-start: 0.1em;
  }
`;
export const Zhmara = styled.p`
  font-weight: 1000;
  font-size: 1rem;
  text-align: end;
  
  color: ${colors.light0};
  
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



const Barwar = ({slug}) => {
  

    const [fetchError, setFetchError] = useState(null)
    const [smoothies, setSmoothies] = useState(null)
  
    useEffect(() => {
      const fetchSmoothies = async () => {
        const { data, error } = await supabase
          .from('date')
          .select()
        
        if (error) {
          setFetchError("کێشە هەیە لە پیشاندانی بەروارەکە")
          setSmoothies(null)
        }
        if (data) {
          setSmoothies(data)
          setFetchError(null)
        }
      }
  
      fetchSmoothies()
  
    }, [])

  


    
  



  return (
    <div >
     
     <Hidden only={['xs','sm']}> 

        
        
        
        <Styled1.BlockWrapper>
        <Styled1.Container>
              <Layout.Row>
                <Styled1.Name>بەرواری نوێ کردنەوەی خشتەکە</Styled1.Name>
              </Layout.Row>
              
              <Date> {fetchError && <p>{fetchError}</p>}
      {smoothies && (
     
          <div className="smoothie-grid">
          {
      smoothies.map((post) => (
        <div key={smoothies.id} className="mt-2 flex gap-2 items-center">
         
     
            
                <ReactTimeAgo
                  locale="ku"
                  date={(post.created_at)}
                />
             
         
        
        </div>
            ))}
         
        </div>
      )} </Date>
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
        <Grid style={{ paddingBottom:10}}>

        <Hidden mdUp>

       
        <MainDate>
        
        <ContainerDate>
       


            <Date>     <td
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Grid container >
          <Grid item align="Left">
            <Typography style={{ fontWeight: 600 }}>
              
            بەرواری نوێ کردنەوەی خشتەکە :
            </Typography>
          </Grid>
          <Grid item align="Right" style={{color: "#00e5ff", margin: "0px 25.56px 0px auto" }}>
            <Typography style={{ fontWeight: 600 }}>{fetchError && <p>{fetchError}</p>}
      {smoothies && (
     
          <div className="smoothie-grid">
          {
      smoothies.map((post) => (
        <div key={smoothies.id} className="mt-2 flex gap-2 items-center">
         
     
            
                <ReactTimeAgo
                  locale="ku"
                  date={(post.created_at)}
                />
             
         
        
        </div>
            ))}
         
        </div>
      )} </Typography>
          </Grid>
        </Grid>
      </td>   </Date>
           
        
  
            <Date>  <td
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Grid container >
          <Grid item align="Left">
            <Typography style={{ fontWeight: 600 }}>
              
          ژمارەی سەردانی کەرانی ماڵپەر :   
            </Typography>
          </Grid>
          <Grid item align="Right" style={{color: "#00e5ff", margin: "0px 25.56px 0px auto" }}>
            <Typography style={{ fontWeight: 600 }}><Views slug={slug} /> کەس </Typography>
          </Grid>
        </Grid>
      </td>  
              
              
                   </Date>
     
  
  
         
        </ContainerDate>
     
      
    </MainDate>
        </Hidden>
        </Grid>
  
        
  
      
   
      
    </div>
  )
}




export default Barwar;
