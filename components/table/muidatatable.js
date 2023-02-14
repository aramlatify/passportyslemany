import React, { useEffect, useState,useRef } from "react";

import {FormControl,
  
  MenuItem,
  TableHead,
  Table,
  TableBody,
  
  TableRow,
  TablePagination,
  Pagination,
  Paper,
  Box,
  Grid,
  Typography, Hidden
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import { tablePaginationClasses } from "@mui/material/TablePagination";
import TableFooter from "@mui/material/TableFooter";

function DataTable({ data }) {
  
   const StyledTextField = styled(TextField)({
    "& .MuiInputLabel-root": {
      color: "green",
      right: 0,
      textAlign: "center",
      fontSize: "1.2rem"
    },
    "& .MuiInputLabel-shrink": {
      margin: "0 auto",
      position: "absolute",
      right: "0",
      left: "0",
      top: "-3px",
      width: "210px", // Need to give it a width so the positioning will work
      background: "white" // Add a white bg
      // display: "none" //if you want to hide it completly
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& legend ": {
        display: "none" // If you want it then you need to position it similar with above
      }
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        "& legend ": {
          display: "none" // If you want it then you need to position it similar with above
        }
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      
    },
  });
  
 
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      fontSize: "1.1rem",
      height: 20,
      padding: 10,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.success.dark,
      borderBottom: `1px solid white`,
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem"
      }
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18
    }
  }));
 

  const SXTableRow = styled(TableRow)(({ theme }) => ({
    cursor: "pointer",
    borderRadius: "inherit",
   
      

    "&:nth-of-type(even)": {
      background: "#81D4FA",
      borderLeft: `6px solid #5f67fc`,
      borderRight: `6px solid #5f67fc`
    },

    // hide last border
    "&:last-child td, &:last-child th": {},
    "&:hover": {
      paddingRight: "7px",
      background: "aqua",
      borderLeft: `8px solid #5f67fc`,
      borderRight: `8px solid #5f67fc`
    },

    "&:nth-of-type(odd)": {
      backgroundColor: "#B39DDB",
      borderRight: `6px solid 
        #01579B`,
      borderLeft: `6px solid 
            #01579B`,

      // hide last border
      "&:last-child td, &:last-child th": {},
      "&:hover": {
        backgroundColor: "#866DC6",
        borderRight: `8px solid 
        #01579B`,
        borderLeft: `8px solid 
            #01579B`
      }
    }
  }));

   const PAGE_OPTIONS = [5, 10, 20, 30, 40, 50, 100];
  const rowsPerPageOptions = [5, 10, 25, { label: "All", value: -1 }];
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const indexOfLastItem = page * rowsPerPage;
  
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);
  
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  function TablePaginationActions(props) {
    const { count, page, rowsPerPage, onPageChange } = props;

    const [totalPages, setTotalPages] = useState(
      rowsPerPage === -1 ? 0 : Math.ceil(count / rowsPerPage)
    );

    console.log(totalPages);

    
    const dataFetchedRef = useRef(false);
    const fetchData = () => {
      
      setTotalPages(rowsPerPage === -1 ? 0 : Math.ceil(count / rowsPerPage));
  }
    useEffect(() => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      fetchData();
     
    }, [count, rowsPerPage]);


 

    return (
      <>
        <Box sx={{ flexShrink: 0 }}>
          <Pagination
            showFirstButton
            showLastButton
            count={totalPages}
            boundaryCount={2}
            shape="rounded"
            page={page + 1}
            onChange={(e, value) => onPageChange(e, value)}
            className={props.className}
            sx={{
              "& .MuiPaginationItem-page.Mui-selected:not(.Mui-disabled)": {
                bgcolor: "orange",
                borderColor: "#000",
                borderWidth: 2,
                color: "#FFF",
                fontFamily: "Verdana",
                fontSize: "1.2rem",
                "&:hover": {
                  bgcolor: "#7087fa"
                }
              },
              "& .MuiPaginationItem-page:not(.Mui-selected):not(.Mui-disabled)": {
                bgcolor: "#866DC6",
                borderColor: "#000",
                borderWidth: 2,
                color: "#FFF",
                fontFamily: "Verdana",
                fontSize: "1.0rem"
              },
              "& .MuiPaginationItem-previousNext.Mui-disabled": {
                bgcolor: "#000",
                color: "#FFF"
              },
              "& .MuiPaginationItem-firstLast.Mui-disabled": {
                bgcolor: "#000",
                color: "#FFF"
              },
              "& .MuiPaginationItem-page.Mui-disabled:not(.Mui-selected)": {
                bgcolor: "#000",
                color: "#FFF",
                opacity: 0.25
              },
              "& .MuiPaginationItem-page.Mui-disabled.Mui-selected": {
                bgcolor: "#000",
                color: "#FFF"
              },
              "& .MuiPaginationItem-root": {
                height: "1.5rem",
                width: "3rem"
              },
              "& .MuiPaginationItem-previousNext": {
                color: "#866DC6",
                "& > svg": {
                  fontSize: 20
                }
              },
              "& .MuiPaginationItem-firstLast": {
                color: "#866DC6",
                "& > svg": {
                  fontSize: 20
                }
              }
            }}
          />
        </Box>
      </>
    );
  }
  

  const [selectedRow, setSelectedRow] = React.useState();

  React.useEffect(() => {
    setSelectedRow(null);
  }, [page]);


  const Nawakan = ({id,Fullname,Shurename,Mothername,Location}) => 
  <SXTableRow
            
  sx={
    id == selectedRow
      ? { backgroundColor: "#fc5f67 !important" }
      : {}
  }
  onClick={() => {
    setSelectedRow(id);
  }}
  key={id}
>
     <TableCell  align="center">{Fullname}</TableCell>
     <TableCell align="center">{Shurename}</TableCell>
     <TableCell align="center">{Mothername}</TableCell>
     <TableCell align="center">{Location}</TableCell>
  
  </SXTableRow>
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ناوی سیانی</StyledTableCell>
            <StyledTableCell align="center">نازناو (لقب)</StyledTableCell>
            <StyledTableCell align="center">ناوی دایک</StyledTableCell>
            <StyledTableCell align="center">شوێن</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {currentItem.map(Nawakan)}
        </TableBody>
        <Hidden only={['xs','sm','md']}> 
        <TableFooter>
          <TableRow sx={{}}>
            <TablePagination
              sx={{
                [`& .${tablePaginationClasses.spacer}`]: {
                  display: "none"
                },
                [`& .${tablePaginationClasses.toolbar}`]: {
                  justifyContent: "center",
                  backgroundColor: "#EDE7F6",
                  height: 20
                },
                ".MuiTablePagination-displayedRows": {
                  color: "#866DC6",
                  fontSize: 20
                },

                ".MuiTablePagination-selectLabel": {
                  color: "#866DC6",
                  fontSize: 20
                },
                ".MuiTablePagination-select": {
                  color: "#866DC6",
                  fontSize: 20
                },
                ".Mui-disabled": {
                  color: "#866DC6 !important"
                },
                ".MuiTablePagination-selectIcon": {
                  color: "#866DC6",
                  fontSize: 20
                },
                marginTop: 2
              }}
              rowsPerPageOptions={rowsPerPageOptions}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page - 1}
              labelRowsPerPage={"ژمارەی ناەکان لە یەک پەرەیە"}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              labelDisplayedRows={({ from, to, count }) =>
                `ناوی ${from}-${to} لە ${count} ناوە${count > 1 ? "" : ""}`
              }
            />
          </TableRow>
         
        </TableFooter>
        </Hidden>
        
      </Table>
      <td
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Grid container style={{ background:  "#282A42", padding: 5 ,paddingRight: 15}}>
          <Grid item align="Left">
            <Typography style={{ fontWeight: 600 }}>
              
              ژمارەی ناوەکان
            </Typography>
          </Grid>
          <Grid item align="Right" style={{ margin: "0px 102.56px 0px auto" }}>
            <Typography style={{ fontWeight: 600 }}>{data.length} ناو </Typography>
          </Grid>
        </Grid>
      </td>
      <Hidden lgUp>
      <div className="Appselect">
      <FormControl fullWidth  style={{ background:  "#282A42" }}>
      <StyledTextField
 
 
 InputProps={{
   inputProps: {
     style: { textAlign: "center" }
   }
 }}
 margin="normal"
 fullWidth

 label="ژمارەی ناوەکان لە یەک پەرەیە"
 
 
 select
 value={rowsPerPage}
         
          onChange={handleChangeRowsPerPage}

 
>
 
  {PAGE_OPTIONS?.map((data) => (
       <MenuItem value={data}>{data}</MenuItem>
     ))}
      
</StyledTextField>
       
      </FormControl>
      </div>
      <div className="pagination">
        <Pagination
       
        page={page}
        count={Math.ceil(data.length / rowsPerPage)}
        onChange={handleChangePage}
        variant="outlined"
      />
      </div>
      </Hidden>
    </Paper>
  );
}

DataTable.defaultProps = {
  title: "No Title"
};

export default DataTable;
