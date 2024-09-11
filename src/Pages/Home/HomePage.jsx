import React, { useEffect } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Box className="home-page">
        <Box className="home">
          <Card
            sx={{
              backgroundColor: "transparent",
              width: "60%",
              height: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2" sx={{ color: "white" }}>
              Welcome to <span style={{ color: "#D4AF37" }}>Flavor</span>Fusion
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              <Link
                to="/login"
                style={{
                  paddingBlock: "1rem",
                  fontSize: "1.4rem",
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  color="info"
                  fullWidth
                  sx={{ paddingBlock: "1rem", fontSize: "1.4rem" }}
                >
                  Login
                </Button>
              </Link>

              <Link
                to="/register"
                style={{
                  paddingBlock: "1rem",
                  fontSize: "1.4rem",
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  color="info"
                  fullWidth
                  sx={{ paddingBlock: "1rem", fontSize: "1.4rem" }}
                >
                  Register
                </Button>
              </Link>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
