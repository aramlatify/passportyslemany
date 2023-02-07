import React from "react";

import {
  TableHead,
  Table,
  TableBody,
  
  TableRow,
  TablePagination,
  Pagination,
  Paper,
  Box,
  Grid,
  Typography
} from "@mui/material";
import { styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import { tablePaginationClasses } from "@mui/material/TablePagination";
import TableFooter from "@mui/material/TableFooter";

function DataTable({ data }) {
  
 
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      fontSize: "1.1rem",
      height: 20,
      padding: 10,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.main,
      borderBottom: `1px solid white`,
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem"
      }
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }));
  const StyledTableCellrow = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    
      
      padding: 10,
      
      borderBottom: `1px solid white`,
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem"
      }
    }
  }));

  const SXTableRow = styled(TableRow)(({ theme }) => ({
    cursor: "pointer",
    borderRadius: "inherit",
    

    "&:nth-of-type(even)": {
      background: "#61fcf3",
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
      backgroundColor: "#7087fa",
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

  const rowsPerPageOptions = [5, 10, 25, { label: "All", value: -1 }];
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

  const indexOfLastItem = page * rowsPerPage;
  //console.log(currentPage, "currentPage")
  const pageItem = page - rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);
  console.log(page);
  console.log(rowsPerPage);
  console.log(data);
  console.log(currentItem);
  console.log(indexOfFirstItem, indexOfLastItem);
  // Avoid a layout jump when reaching the last page with empty rows.
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  function TablePaginationActions(props) {
    const { count, page, rowsPerPage, onPageChange } = props;

    const [totalPages, setTotalPages] = React.useState(
      rowsPerPage === -1 ? 0 : Math.ceil(count / rowsPerPage)
    );

    console.log(totalPages);
    React.useEffect(() => {
      setTotalPages(rowsPerPage === -1 ? 0 : Math.ceil(count / rowsPerPage));
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
     <StyledTableCellrow  align="center">{Fullname}</StyledTableCellrow>
     <StyledTableCellrow align="center">{Shurename}</StyledTableCellrow>
     <StyledTableCellrow align="center">{Mothername}</StyledTableCellrow>
     <StyledTableCellrow align="center">{Location}</StyledTableCellrow>
  
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
              labelRowsPerPage={"ژمارەی دێڕەکان لە یەک پەرەیە"}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              labelDisplayedRows={({ from, to, count }) =>
                `پەڕەی ${from}-${to} لە ${count} پەڕەیە${count > 1 ? "" : ""}`
              }
            />
          </TableRow>
        </TableFooter>
      </Table>
      <td
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Grid container style={{ background:  "#282A42", padding: 5 }}>
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
    </Paper>
  );
}

DataTable.defaultProps = {
  title: "No Title"
};

export default DataTable;
