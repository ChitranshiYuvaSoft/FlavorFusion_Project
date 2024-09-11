import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({Component}) => {
    const {userToken}= useSelector(state=>state.auth);
  return (
    <>
    {
        userToken ? <Component/> : <Navigate to="/login" />
    }
    </>
  )
}

export default PrivateRoute;
