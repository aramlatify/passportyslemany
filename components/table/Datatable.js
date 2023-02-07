import React, { useEffect, useState, useReducer } from "react";
import { useTheme, Grid, useMediaQuery, Hidden } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ButtonTile from "./Button/ButtonTile";
import * as Layout from "./Layout";
import * as Styled1 from "./styledate";
import * as Border1 from "./border1";
import { createGlobalStyle } from "styled-components";
import Styled, { css } from "styled-components";

import supabase from "../../utility/supabase";



import { useQuery } from "react-query";



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


import Search from "./autocomplete";

import AdvancedFilter from "./Textsearch";

const aram = [
  {
    Location: "سلێمانی "
  },
  {
    Location: "کەلار "
  },
  {
    Location: "ڕانییە "
  },
  {
    Location: "چەمچەماڵ"
  }
];


const Datatable = ({ posts }) => {
  const B = [
    {
      id: 1,
      Fullname: "ارام حسن مجيد",
      Shurename: "مجيد",
      Mothername: "اسكه محمد",
      Location: "کەلار "
    },

    {
      id: 2,
      Fullname: "ارام حسن مجيد",
      Shurename: "مجيد",
      Mothername: "اسكه محمد",
      Location: "سلێمانی "
    },
    {
      id: 3,
      Fullname: "خيابان حسين كريم",
      Shurename: "مجيد",
      Mothername: "اسكه محمد",
      Location: "ڕانییە "
    },
    {
      id: 4,
      Fullname: "له رين كوران احمد",
      Shurename: "احمد",
      Mothername: "حسيبه محمد",
      Location: "چەمچەماڵ"
    },
    {
      id: 5,
      Fullname: "خيابان حسين كريم",
      Shurename: "الجمور",
      Mothername: "اسكه محمد",
      Location: "کەلار "
    }
  ];
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


 
  const [search1, setSearch1] = React.useState(posts);
 console.log(search1);
  


  
  
  
  


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

  const [dataList, setDataList] = React.useState(B);
  
  const [termIdFilter, setTermIdFilter] = React.useState([]);

  const applyFilters = (newInputValue) => {
    const filters = {
      Location: termIdFilter,

      ...newInputValue
    };
    let filterList = [...B];

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
      
   

      <div style={{ height: "315px", width: "100%" }}>
        <DataGrid
          rows={countriesList}
          getRowId={(row) => row.id}
          columns={columns}
          checkboxSelection
          hideFooter
          disableColumnMenu
          sx={{
            "& .MuiDataGrid-row.disable": {
              backgroundColor: "#f2f1ed",
              opacity: "0.5"
            },
            "& .MuiDataGrid-row.disable:hover": {
              cursor: "default"
            },
            "& .MuiDataGrid-row.Mui-selected": {
              backgroundColor: "#ececf4"
            },
            "& .MuiDataGrid-row.Mui-selected:hover": {
              backgroundColor: "#ececf4"
            },
            "& .MuiDataGrid-row:hover": {
              cursor: "pointer"
            },
            ".MuiDataGrid-cell:focus": {
              outline: "none"
            }
          }}
        />
      </div>
    
    </>
  );
}


export const getStaticProps = async () => {
  const { data: posts } = await supabase.from("naw").select("id, Fullname,Shurename,Mothername,Location");
  console.log(posts)
  return {
    props: {
      posts,
    },
    revalidate: 86400,
  };
 
};

  export default Datatable;