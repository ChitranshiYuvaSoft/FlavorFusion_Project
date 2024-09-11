import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CssBaseline,
  Drawer,
  IconButton,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import CircularLoader from "../../Components/Loading/CircularLoader";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../Components/Button/BackBtn";
import { createCategory, updateCategory } from "../../Redux/Categories/categoriesSlice";
import { toast } from "react-toastify";
import { boolean } from "yup";



const CategoryUpdate = () => {
  // Hook Call
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading , edit} = useSelector((state) => state.category);

  const [isClosing, setIsClosing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

 

  // Categary State Define
  const [updatedCategoryData, setUpdatedCategoryData] = useState({
    name: "",
    status: false
  });
  const { name, status } = updatedCategoryData;

  const handleChange = (e) => {
    setUpdatedCategoryData({
      ...updatedCategoryData,
      [e.target.name]: e.target.value,
    });
  };

  // Create and Update Category
   const handleUpdateCategory = (e) => {
    e.preventDefault();
    console.log("Update Category!!")
    if(edit.isEdit){
      dispatch(updateCategory({
        _id : edit.category._id,
        name : name,
        status : status
      }));
      toast.success("Successfully Updated Category!!");
    }
    setUpdatedCategoryData({
      name: "",
      status: "",
    });
    navigate('/category-dashboard')
  }

  useEffect(() => {
    setUpdatedCategoryData({
      name : edit.category.name,
      status : edit.category.status
    })
  },[edit])

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        backgroundColor: "#0c0a0a",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          ml: {
            width: "100%",
            height: "8rem",
            backgroundColor: "#0c0a0a",
          },
        }}
      >
        <Toolbar>
          <Typography
            variant="h3"
            align="right"
            sx={{ width: "42.5%", color: "white" }}
          >
            CATEGORY UPDATE
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
        ></Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          open
        ></Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "none",
          boxShadow: "none",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#0c0a0a",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", height: "100%", paddingInline: "3rem" }}>
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
                  sx={{
                    color: "white",
                    fontSize: "4rem",
                    marginRight: "1rem",
                  }}
                />{" "}
                / Categories / Update Category
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
                <>
                  <CircularLoader />
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      width: "100%",
                      height: "85%",
                      minWidth: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Card
                      sx={{
                        width: "40%",
                        height: "70%",
                        backgroundColor: "white",
                        borderRadius: "0rem",
                      }}
                    >
                      <BackBtn Location={"/category-dashboard"} />
                      <Paper
                        sx={{
                          width: "100%",
                          height: "70%",
                          borderRadius: "0rem",
                          paddingBlock: "3rem",
                          paddingInline: "5rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          flexDirection: "column",
                        }}
                      >
                       
                          <TextField
                            placeholder="Enter Category Name"
                            fullWidth
                            required
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#212121",
                                },
                              },
                              "& .MuiInputBase-input": {
                                color: "#424242",
                                fontSize: "1.7rem",
                              },
                            }}
                            name="name"
                            value={name}
                            onChange={handleChange}
                          />
                          <Select
                            fullWidth
                            required
                            sx={{
                              color: "#424242",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "#424242",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#212121",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#212121",
                                },
                              },
                              "& .MuiSelect-select": {
                                fontSize: "1.6rem",
                                color: "#424242",
                              },
                            }}
                            name="status"
                            value={status}
                            onChange={handleChange}
                          >
                            <MenuItem
                              value={true}
                              sx={{ fontSize: "1.6rem", color: "#424242" }}
                            >
                              Active
                            </MenuItem>
                            <MenuItem
                              value={false}
                              sx={{ fontSize: "1.6rem", color: "#424242" }}
                            >
                              Inactive
                            </MenuItem>
                          </Select>

                          <Button
                            variant="contained"
                            fullWidth
                            sx={{
                              paddingBlock: "1rem",
                              fontSize: "1.4rem",
                              backgroundColor: "#D4AF37",
                              color: "black",
                              fontWeight: "bold",
                              "&:hover": {
                                backgroundColor: "#0c0a0a",
                                color: "white",
                              },
                            }}
                            type="submit"
                            onClick={handleUpdateCategory}
                          >
                            Update
                          </Button>
                       
                      </Paper>
                    </Card>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryUpdate;
