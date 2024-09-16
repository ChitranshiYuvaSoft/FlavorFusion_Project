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

const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
  "& .css-levciy-MuiTablePagination-displayedRows": {
    fontSize: "1.6rem",
    color: "white",
    fontFamily: "Philosopher, sans-serif",
  },
  "& .MuiTablePagination-selectLabel": {
    fontSize: "1.6rem",
    color: "white",
    fontFamily: "Philosopher, sans-serif",
  },
  "& .MuiTablePagination-select": {
    fontSize: "1.6rem",
    color: "gray",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Philosopher, sans-serif",
  },
  "& .css-i4bv87-MuiSvgIcon-root": {
    fontSize: "2.2rem",
    color: "white",
    fontFamily: "Philosopher, sans-serif",
  },
  "& .MuiTablePagination-selectIcon": {
    fontSize: "1.6rem",
    color: "white",
  },
  "& .MuiTablePagination-spacer": {
    fontSize: "1.6rem",
    color: "white",
    fontFamily: "Philosopher, sans-serif",
  },
  "& .MuiTablePagination-actions": {
    fontSize: "1.6rem",
    color: "white",
    fontFamily: "Philosopher, sans-serif",
  },
}));

const ProductListData = () => {
  const { isLoading, allProducts } = useSelector((state) => state.product);

  console.log(allProducts);

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
  }, []);

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
        <p
          style={{
            color: "white",
            fontSize: "1.4rem",
            display: "flex",
            alignItems: "end",
            justifyContent: "start",
            fontFamily: "Philosopher, sans-serif",
          }}
        >
          <HomeIcon
            sx={{ color: "white", fontSize: "3.5rem", marginRight: "1rem" }}
          />{" "}
          / Products
        </p>
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
            sx={{
              fontSize: "1.2rem",
              paddingBlock: "0.9rem",
              borderRadius: "0rem",
              backgroundColor: "#D4AF37",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
                color: "",
              },
            }}
          >
            <PlaylistAddIcon sx={{ fontSize: "3rem" }} />
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
                        fontFamily: "Philosopher, sans-serif",
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
                        fontFamily: "Philosopher, sans-serif",
                      }}
                    >
                      Name
                    </TableCell>

                    <TableCell
                      sx={{
                        width: "40%",
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "white",
                        fontFamily: "Philosopher, sans-serif",
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
                          fontSize: "1.3rem",
                          color: "#b0bec5",
                          textAlign: "start",
                          fontFamily: "Philosopher, sans-serif",
                        }}
                      >
                        {user.id}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "1.3rem",
                          color: "#b0bec5",
                          textAlign: "center",
                          fontFamily: "Philosopher, sans-serif",
                        }}
                      >
                        {user.name}
                      </TableCell>

                      <TableCell
                        sx={{
                          width:"100%",
                          fontSize: "1.4rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "Philosopher, sans-serif",
                        }}
                      >
                        <Box
                          sx={{
                            width: "70%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                          }}
                        >
                          <Button
                            variant="contained"
                            color="warning"
                            sx={{ fontSize: "1rem", paddingBlock: "0.7rem" }}
                          >
                            <EditIcon />
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            sx={{ fontSize: "1rem", paddingBlock: "0.7rem" }}
                          >
                            <DeleteIcon />
                          </Button>

                          <Button
                            variant="contained"
                            sx={{
                              fontSize: "1rem",
                              backgroundColor: "#2e7d32",
                              fontFamily: "Philosopher, sans-serif",
                              "&:hover": {
                                backgroundColor: "#1b5e20",
                                color: "white",
                              },
                            }}
                          >
                            View Details
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
