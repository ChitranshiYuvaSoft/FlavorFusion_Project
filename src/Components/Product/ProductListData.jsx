import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import HomeIcon from "@mui/icons-material/Home";
  import styled from "styled-components";
  import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
  import EditIcon from "@mui/icons-material/Edit";
  import DeleteIcon from "@mui/icons-material/Delete";
  import { useDispatch, useSelector } from "react-redux";
  import { getAllProducts } from "../../Redux/Products/productSlice";
  import CircularLoader from "../Loading/CircularLoader";
  const allProductsData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Products ${index + 1}`,
    email: `products${index + 1}@example.com`,
    createdAt: `2024-01-${(index % 30) + 1}`,
    updatedAt: `2024-01-${(index % 30) + 1}`,
  }));
  
  const ProductListData = () => {
  
    const {isLoading} = useSelector(state => state.auth);
  
    // Pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllProducts());
    });
  
    const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
      "& .css-levciy-MuiTablePagination-displayedRows": {
        fontSize: "1.6rem",
        color: "white",
      },
      "& .MuiTablePagination-selectLabel": {
        fontSize: "1.6rem",
        color: "white",
      },
      "& .MuiTablePagination-select": {
        fontSize: "1.6rem",
        color: "gray",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      "& .css-i4bv87-MuiSvgIcon-root": {
        fontSize: "2.2rem",
        color: "white",
      },
      "& .MuiTablePagination-selectIcon": {
        fontSize: "1.6rem",
        color: "white",
      },
      "& .MuiTablePagination-spacer": {
        fontSize: "1.6rem",
        color: "white",
      },
      "& .MuiTablePagination-actions": {
        fontSize: "1.6rem",
        color: "white",
      },
    }));
  
    const currentPageData = allProductsData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  
    return (
      <>
        <Box
          sx={{
            width: "100%",
            height: "20%",
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "1.6rem",
              display: "flex",
              alignItems: "end",
              justifyContent: "start",
            }}
          >
            <HomeIcon
              sx={{ color: "white", fontSize: "4rem", marginRight: "1rem" }}
            />{" "}
            / Products
          </Typography>
          <Box
            sx={{
              width: "30%",
              height: "100%",
              display: "flex",
              alignItems: "end",
              justifyContent: "end",
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{
                fontSize: "1.2rem",
                paddingBlock: "0.9rem",
                borderRadius: "0rem",
              }}
            >
              <PlaylistAddIcon sx={{ fontSize: "3.4rem" }} />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "80%",
            overflowY: "scroll",
          }}
        >
          {isLoading ? (
            <>
              <CircularLoader />
            </>
          ) : (
            <>
              <TableContainer
                sx={{
                  width: "100%",
                  height: "85%",
                  minWidth: 700,
                }}
              >
                <Table
                  sx={{
                    width: "100%",
                    height: "100%",
                    // minWidth: 700,
                  }}
                  aria-label="customized table"
                >
                  <TableHead sx={{ width: "100%", height: "8rem" }}>
                    <TableRow>
                      <TableCell
                        sx={{
                          width: "30%",
                          fontSize: "1.6rem",
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Id
                      </TableCell>
                      <TableCell
                        sx={{
                          width: "30%",
                          fontSize: "1.6rem",
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Name
                      </TableCell>
  
                      <TableCell
                        sx={{
                          fontSize: "1.6rem",
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
  
                  <TableBody>
                    {currentPageData.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell
                          sx={{
                            fontSize: "1.4rem",
                            color: "#b0bec5",
                            textAlign: "start",
                          }}
                        >
                          {user.id}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontSize: "1.4rem",
                            color: "#b0bec5",
                            textAlign: "center",
                          }}
                        >
                          {user.name}
                        </TableCell>
  
                        <TableCell
                          sx={{
                            fontSize: "1.4rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                          }}
                        >
                          <Box
                            sx={{
                              width: "60%",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-around",
                            }}
                          >
                            <Button
                              variant="contained"
                              color="warning"
                              sx={{ fontSize: "1.2rem", paddingBlock: "0.95rem" }}
                            >
                              <EditIcon />
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              sx={{ fontSize: "1.2rem", paddingBlock: "0.95rem" }}
                            >
                              <DeleteIcon />
                            </Button>
  
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ fontSize: "1.2rem" }}
                            >
                              View
                            </Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
          <Box sx={{ width: "100%", height: "10%" }}>
            <StyledTablePagination
              component="div"
              count={allProductsData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Box>
      </>
    );
  };
  
  export default ProductListData;
  