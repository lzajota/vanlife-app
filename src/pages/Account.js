import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

export default function Account() {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className='login-container'>
            <h1>Account</h1>
            <p>User Email: {user && user.email}</p>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
