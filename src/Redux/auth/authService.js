import axios from "axios";
import axiosInstance from "../Interceptors/axiosInterceptors";

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
  const response = await axiosInstance.put(`/user/${userData.id}`, userData);
  console.log(response, "From response Service");
  return response.data;
};

const authServices = {
  login,
  register,
  allUsers,
  removeUser,
  updatedUser,
  verification,
  googleUserLogin,
  getUserDetails,
};

export default authServices;
