import React, { useEffect, useState, useRef, useReducer } from "react";
import { styled } from "@mui/material/styles";
import supabase from "../../utility/supabase";


import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { useQuery } from "react-query";

import AdvancedFilter from "./AdvancedFilter";
import { useTheme, Grid, useMediaQuery, Hidden } from "@mui/material";


import * as Styled from "./styletebiny";


const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  

  [`& .${gridClasses.row}.even`]: {
    
    backgroundColor: "#B3E5FC",
    borderLeft: `12px solid #0277BD`,
    borderRight: `12px solid #0277BD`,
    "&:hover, &.Mui-hovered": {
    
      paddingRight: "7px",
      background: "#81D4FA",
      borderRight: `14px solid 
          #01579B`,
      borderLeft: `14px solid 
              #01579B`
    },
    "&.Mui-selected": {
      
      backgroundColor: "red",

      "&:hover, &.Mui-hovered": {
      
        backgroundColor: "blue"
      }
    }
  },
  [`& .${gridClasses.row}.odd`]: {
    
    backgroundColor: "white",
    borderLeft: `12px solid orange`,
    borderRight: `12px solid orange`,
    "&:hover, &.Mui-hovered": {
      
      paddingLeft: "7px",
      backgroundColor: "#FFE0B2",
      borderLeft: `14px solid orange`,
      borderRight: `14px solid orange`
    },
    "&.Mui-selected": {
      
      backgroundColor: "red",

      "&:hover, &.Mui-hovered": {
   
        backgroundColor: "blue"
      }
    }
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#154460",
    color: "#FFF",
    fontSize: "24px",
    textAlign: "right",
    fontWeight: "bold",
    padding: "2.5px 0 5px 0",
    "@media (max-width:500px)": {
      fontSize: "15px"
    }
  },
  "@media (max-width: 780px)": {
    width: 425,

    [`& .${gridClasses.row}.even`]: {
      width: 400,
      backgroundColor: "#B3E5FC",
      borderLeft: `12px solid #0277BD`,
      borderRight: `12px solid #0277BD`,
      "&:hover, &.Mui-hovered": {
        paddingRight: "7px",
        background: "#81D4FA",
        borderRight: `14px solid 
            #01579B`,
        borderLeft: `14px solid 
                #01579B`
      },
      "&.Mui-selected": {
        backgroundColor: "red",

        "&:hover, &.Mui-hovered": {
          backgroundColor: "blue"
        }
      }
    },
    [`& .${gridClasses.row}.odd`]: {
      width: 400,
      backgroundColor: "white",
      borderLeft: `12px solid orange`,
      borderRight: `12px solid orange`,
      "&:hover, &.Mui-hovered": {
        paddingLeft: "7px",
        backgroundColor: "#FFE0B2",
        borderLeft: `14px solid orange`,
        borderRight: `14px solid orange`
      },
      "&.Mui-selected": {
        backgroundColor: "red",

        "&:hover, &.Mui-hovered": {
          backgroundColor: "blue"
        }
      }
    },
    "& .MuiDataGrid-columnHeaders": {
      width: 400,
      backgroundColor: "#154460",
      color: "#FFF",
      fontSize: "24px",
      textAlign: "right",
      fontWeight: "bold",
      padding: "2.5px 0 5px 0",
      "@media (max-width:500px)": {
        fontSize: "5px"
      }
    }
  }
}));




export default function StripedGrid() {
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
      Location: "ڕانیە "
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
      Fullname:"خيابان حسين كريم",
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
      field: "Mothername",
      headerName: "شوێن ",
      headerAlign: "left"
    }
  ];

 
  const theme1 = useTheme();
  const mdUp = useMediaQuery(theme1.breakpoints.up("md"));

 

  
  const { data,status } = useQuery(
    "passport",
    function () {
      return supabase
        .from("aram")
        .select("*");
        
    },
    {
      select: ({ data }) => data
    }
  );

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (status === "success") {
      setItems(data);
    }else{
      setItems(B)
    }
  }, [status, data]);

 
  const [filterInput, setFilterInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      Fullname: "",
      Shurename: "",
      Mothername: ""  ,
      Location: ""
    }
  );
  const handleFilterCountries = (event) => {
    const { name, value } = event.target;
    setFilterInput({ [name]: value });
  };

  const filterCountries = (data) => {
    return data.filter((item) => {
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

  const countriesList = filterCountries(items);
console.log(items)
  return status === "success" ? (
    
      
    <div>
    
        
        
    <Grid  style={{ paddingTop: 0 ,paddingRight:70}}>
    
    <Styled.Message>
            هاوڵاتی بەڕێز
            <br />*
            زانیاریەکانی سەر پێناسەکەت لە شوێنی دیاری کراو و بە فۆنتی عەرەبی
            بنووسە .
            <br />*
            زانیاریەکانی سەر پێناسەکەت هاوشێوەی پێناس یان کارتی نیشتیمانیەکەت
            بنووسە .
            <br />*
            لە کاتى سەردانت بۆ وەرگرتنەوەى پاسپۆرتەکەت پێویستە ( کارتى نیشتیمانى
            یان پێناسى بارى شارستانیت) پێبێت .
          </Styled.Message>
         
        </Grid>
      <Grid style={{ paddingBottom: 15 ,
    paddingLeft: 10}}>
        
        <AdvancedFilter
          searchValue={filterInput}
          handleChangeValue={handleFilterCountries}
          onClick={() =>
            setFilterInput({ Fullname: "", Shurename: "", Mothername: "" })
          }
        />
      </Grid>
      
      <div style={{ height: 400, width: "100%" }}>
      <StripedDataGrid
        sx={{
          '& *::-webkit-scrollbar': {
            width: '8px',
            height: 'initial',
          },
          '& *::-webkit-scrollbar-thumb': {
            backgroundColor: "#afb6d055",
            borderRadius: 10
          }
          ,
          "& *::-webkit-scrollbar-track": {
            borderRadius: 4
          },
          
          "& *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#afb6d0",
            borderRadius: 10
          },
          overflowX: "hidden",
          ".MuiTablePagination-toolbar": {
            backgroundColor: "rgba(100,100,100,0.5)"
          },
          ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
            fontWeight: "bold",
            color: "blue"
          }
        }}
        columns={columns}
        rows={countriesList}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
      />
    </div>
      
    
    </div>
 ) : (
  <div>
    
        
        
  <Grid >
  
  <Styled.Message>
          هاوڵاتی بەڕێز
          <br />*
          زانیاریەکانی سەر پێناسەکەت لە شوێنی دیاری کراو و بە فۆنتی عەرەبی
          بنووسە .
          <br />*
          زانیاریەکانی سەر پێناسەکەت هاوشێوەی پێناس یان کارتی نیشتیمانیەکەت
          بنووسە .
          <br />*
          لە کاتى سەردانت بۆ وەرگرتنەوەى پاسپۆرتەکەت پێویستە ( کارتى نیشتیمانى
          یان پێناسى بارى شارستانیت) پێبێت .
        </Styled.Message>
       
      </Grid>
    <Grid style={{ paddingBottom: 15 ,
  paddingLeft: 10}}>
      
      <AdvancedFilter
        searchValue={filterInput}
        handleChangeValue={handleFilterCountries}
        onClick={() =>
          setFilterInput({ Fullname: "", Shurename: "", Mothername: "" })
        }
      />
    </Grid>
    
    <div style={{ height: 400, width: "100%" }}>
      <StripedDataGrid
        sx={{
          '& *::-webkit-scrollbar': {
            width: '8px',
            height: 'initial',
          },
          '& *::-webkit-scrollbar-thumb': {
            backgroundColor: "#afb6d055",
            borderRadius: 10
          }
          ,
          "& *::-webkit-scrollbar-track": {
            borderRadius: 4
          },
          
          "& *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#afb6d0",
            borderRadius: 10
          },
          overflowX: "hidden",
          ".MuiTablePagination-toolbar": {
            backgroundColor: "rgba(100,100,100,0.5)"
          },
          ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
            fontWeight: "bold",
            color: "blue"
          }
        }}
        columns={columns}
        rows={B}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
      />
    </div>
    
  
  </div>
);
};




