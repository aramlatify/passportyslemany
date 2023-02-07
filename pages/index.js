import React, { useReducer } from "react";
import Barwar from "../components/barwar/barwar";
import dynamic from 'next/dynamic';

// add this
const DataTableDynamic = dynamic(
    async () => (await import('../components/table/muidatatable')),
    { ssr: false }
);
import Head from 'next/head'
import { useTheme, Grid, useMediaQuery, Hidden } from "@mui/material";

import ButtonTile from "../components/table/Button/ButtonTile";

import * as Border1 from "../components/table/border1";

import  { css } from "styled-components";


import Search from "../components/table/autocomplete";

import AdvancedFilter from "../components/table/Textsearch";

import supabase from "../utils/supabase";

import Footer from '../components/footer/footer'
import Header from '../components/header/header'

import View from '../components/weblayout'




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
 cons BlockWrapper1 = styled.div`


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
 cons Wrapper = styled.section`

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
const aram = [
  {
    Location: "پاسپۆرتی سلێمانی"
  },
  {
    Location: "پاسپۆرتی کەلار"
  },
  {
    Location: "پاسپۆرتی ڕانیە"
  },
  {
    Location: "پاسپۆرتی چەمچەماڵ"
  }
];




const Datatable = ({ tabledata }) => {


  const columns = [
    {
      field: "Fullname",
      headerName: "ناوی سیانی",
      width: 130,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "blue",
              fontSize: 18,
              width: "100%",
              textAlign: "right"
            }}
          >
            {cellValues.value}
          </div>
        );
      }
    },
    { field: "Shurename", headerName: "لەقەب", width: 130 },
    {
      field: "Mothername",
      headerName: "ناوی دایک",
      headerAlign: "left"
    },
    {
      field: "Location",
      headerName: "شوێن ",
      headerAlign: "left"
    }
  ];


 
  const [pageSize, setPageSize] = React.useState(5);



  
  
  
  


  const [filterInput, setFilterInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Fullname: "",
      Shurename: "",
      Mothername: ""
    }
  );
  const handleFilterCountries = (event) => {
    const { name, value } = event.target;
    setFilterInput({ [name]: value });
  };

  const [dataList, setDataList] = React.useState(tabledata);
  
  const [termIdFilter, setTermIdFilter] = React.useState([]);

  const applyFilters = (newInputValue) => {
    const filters = {
      Location: termIdFilter,

      ...newInputValue
    };
    let filterList = [...tabledata];

    if (filters.Location.length > 0) {
      filterList = addFilter(filterList, filters, "Location");
    }

    setDataList(filterList);
  };

  const addFilter = (filterList, filters, option) => {
    return filterList.reduce((acc, therm) => {
      if (filters[option].find((item) => item === String(therm[option]))) {
        return [...acc, therm];
      } else {
        return acc;
      }
    }, []);
  };
  
 
  const handleClick = () => {
    setFilterInput({ Fullname: "", Shurename: "", Mothername: "" })
  };
  const filterCountries = (dataList) => {
    return dataList.filter((item) => {
      return (
        item.Fullname.toLowerCase().includes(
          filterInput.Fullname.toLowerCase()
        ) &&
        item.Shurename.toLowerCase().includes(
          filterInput.Shurename.toLowerCase()
        ) &&
        item.Mothername.toLowerCase().includes(
          filterInput.Mothername.toLowerCase()
        )
      );
    });
  };

  const countriesList = filterCountries(dataList);
  
 
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const mdUp = useMediaQuery(theme.breakpoints.up("md"));




  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Header/>
      <main >
        
   
      <View/>
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
        <AdvancedFilter
          searchValue={filterInput}
          handleChangeValue={handleFilterCountries}
         
        />
        
      <Search
        multiple
        id="tags-outlined"
        onChange={(event, newValue) => {
          setTermIdFilter(newValue);
          applyFilters({ Location: newValue });
        }}
        //getOptionLabel={option}
        items={aram.map((therm) => String(therm.Location))}
        selectedOptions={termIdFilter}
        filterSelectedOptions
      />
      <Grid item style={{ paddingTop: 10,paddingBottom:0,paddingRight:20 }}>
            <ButtonTile handleClick={handleClick} >
           
            </ButtonTile>
            </Grid>
          </Grid>
          </Wrapper>
  </Border1.Borderli>
      </Border1.Borderul>
        </Grid>
        </Grid>
       <Barwar/>
      
   
      <DataTableDynamic  data={countriesList} />
      
          
      </main>
     
      <footer >
       <Footer/>
      </footer>
    </div>
  )
}


export const getStaticProps = async () => {
  const { data: tabledata } = await supabase.from("nawakan").select("*");
  
  return {
    props: {
      tabledata,
    },
    revalidate: 86400,
  };
 
};


export default Datatable;
