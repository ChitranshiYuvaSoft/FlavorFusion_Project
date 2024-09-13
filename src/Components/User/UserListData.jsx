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
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  editUser,
  getAllUser,
  userDetails,
} from "../../Redux/auth/authSlice";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import CircularLoader from "../Loading/CircularLoader";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

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

const UserListData = () => {
  const { user, allUsers, isLoading } = useSelector((state) => state.auth);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  // api data fetch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Delete User
  const handleUserDelete = (id) => {
    dispatch(deleteUser(id, user.token));
    toast.success("User Successfully Deleted!!");
  };

  // Get All Users
  useEffect(() => {
    dispatch(getAllUser(user.token));
  }, [dispatch, user.token]);

  // Edit User
  const handleUserEdit = (user) => {
    alert("Edit Mode");
    setOpen(true);
    dispatch(editUserReducer(user));
  };

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

  const currentPageData = allUsers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleUserDetails = (userId) => {
    console.log(userId);
    navigate(`/user-details/${userId}`);
  };

  const handleUserUpdate = (user) => {
    console.log(user)
    dispatch(editUser(user));
    navigate(`/user-update/${user.id}`);
  };

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
            fontSize: "1.4rem",
            display: "flex",
            alignItems: "end",
            justifyContent: "start",
          }}
        >
          <HomeIcon
            sx={{ color: "white", fontSize: "3.6rem", marginRight: "1rem" }}
          />{" "}
          / User
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "80%",
          overflowY: "scroll",
        }}
      >
        {isLoading ? (
          <CircularLoader />
        ) : (
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
                      width: "20%",
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      textAlign: "start",
                      color: "white",
                    }}
                  >
                    Id
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "20%",
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
                      width: "30%",
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Email
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
                      }}
                    >
                      {user.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1.3rem",
                        color: "#b0bec5",
                        textAlign: "center",
                      }}
                    >
                      {user.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1.3rem",
                        color: "#b0bec5",
                        textAlign: "center",
                      }}
                    >
                      {user.email}
                    </TableCell>

                    <TableCell
                      sx={{
                        width:"100%",
                        fontSize: "1.rem",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="warning"
                          sx={{ fontSize: "1.2rem", paddingBlock: "0.6rem" }}
                          onClick={() => handleUserUpdate(user)}
                        >
                          <EditIcon />
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          sx={{ fontSize: "1.2rem", paddingBlock: "0.6rem" }}
                          onClick={() => handleUserDelete(user.id)}
                        >
                          <DeleteIcon />
                        </Button>

                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ fontSize: "1rem" , paddingBlock: "0.6rem" }}
                          onClick={() => handleUserDetails(user.id)}
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
        )}
        <Box sx={{ width: "100%", height: "10%" }}>
          <StyledTablePagination
            component="div"
            count={allUsers.length}
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

export default UserListData;
