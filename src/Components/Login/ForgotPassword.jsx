import {
    Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPasword } from "../../Redux/auth/authSlice";
import BackBtn from "../Button/BackBtn";

const ForgotPassword = ({ open, handleClose }) => {

    const dispatch = useDispatch();

    const [userEmail, setUserEmail] = useState("");

    const handleForgotPassword = (e) => {
        e.preventDefault();
        dispatch(forgotPasword({
            email : userEmail
        }));
        setUserEmail("");
        console.log("done")
    }

  return (
    <>
      <Dialog open={open} onClose={handleClose} sx={{borderRadius:"0rem", backgroundColor:"#263238"}}      aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
            <Box sx={{width:"50rem", height:"5rem"}}></Box>
        <DialogTitle>
          <Typography variant="h4" sx={{fontWeight:"bold"}}>{"Forgot Password"}</Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
          type="email"
            fullWidth
            id="standard-basic"
            label="Enter Your Email"
            variant="standard"
            sx={{
                "& .MuiInputBase-input": {
                  color: "black",
                  fontSize: "1.4rem",
                },
              }}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" sx={{fontSize:"1rem", borderRadius:"0rem", fontSize:"1.2rem"}} type="submit" onClick={handleForgotPassword}>Forgot Password</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ForgotPassword;
