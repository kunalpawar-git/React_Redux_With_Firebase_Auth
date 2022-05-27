import React from 'react'
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  LoadingToRedirect  from './LoadingToRedirect';

const UserRoute = (props) => {
    const { currentUser } = useSelector(state => state.user);
    return currentUser ?props.children: <LoadingToRedirect/> ;
};
export default UserRoute;