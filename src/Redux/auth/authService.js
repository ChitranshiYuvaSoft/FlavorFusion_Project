import axios from "axios";
import axiosInstance from "../Interceptors/axiosInterceptors";
import { Password } from "@mui/icons-material";

// Login User
const login = async (formdata) => {
  const response = await axiosInstance.post("/user/login", formdata);
  return response.data.data;
};

// Google Login
const googleUserLogin = async (userToken) => {
  console.log(userToken, "userToken");
  const response = await axiosInstance.post(`/user/google-login`, userToken);
  console.log(response.data.data);
  return response.data.data;
};

// Register User
const register = async (userData) => {
  const response = await axiosInstance.post("/user", userData);
  return response.data.data;
};

// Email Verification
const verification = async (data) => {
  // console.log(data, "service");
  const response = await axiosInstance.get(
    `/user/email/verification?token=${data.token}&userId=${data.id}`
  );
  return response.data;
};

// Get All Users
const allUsers = async () => {
  const response = await axiosInstance.get("/user?pageNumber=1&pageSize=50");
  return response.data.data;
};

// Single User Details
const getUserDetails = async (userId) => {
  console.log(userId, "service");
  const response = await axiosInstance.get(`/user/${userId}`);
  console.log(response.data.user);
  return response.data.user;
};

// Delete User
const removeUser = async (id) => {
  const response = await axiosInstance.delete(`/user/${id}`);
  console.log(response.data, "delte servicre");
  return response.data;
};

// Update User
const updatedUser = async (userData) => {
  console.log(userData, "from UserData Service");
  const response = await axiosInstance.put(`/user/${userData.id}`, {
    name : userData.name,
    email : userData.email,
    password :userData.password
  });
  console.log(response, "From response Service");
  return response.data;
};

// Forgot Password
const userForgetPassword = async(email) => {
  console.log(email);
  const response = await axiosInstance.post(`/user/forgot-password`, email);
  console.log(response);
  return response;
}

// Reset Password
const userPasswordReset = async(data) => {
  const response = await axiosInstance.post(`/user/reset-password`, data);
  console.log(response);
  return response;
}

const authServices = {
  login,
  register,
  allUsers,
  removeUser,
  updatedUser,
  verification,
  googleUserLogin,
  getUserDetails,
  userForgetPassword,
  userPasswordReset
};

export default authServices;
