import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const AuthRequired = ({ children }) => {
    const { user } = UserAuth();

    return (
        user ? <Outlet /> : <Navigate to='/signin' />
    )
};

export default AuthRequired;