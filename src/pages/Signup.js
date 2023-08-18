import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { createUser } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/account')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };

    return (
        <div className='login-container'>
            <div>
                <h1>Sign up for a free account:</h1>
                <p>Already have an account? <Link to='/login' className='signin-btn'>Sign in</Link></p>
                {error}
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
                < input
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button>
                    Sign Up
                </button>
            </form >
        </div >
    )
}

export default Signup;
