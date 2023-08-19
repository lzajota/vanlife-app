import { React, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { signIn } = UserAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(error)
        }
    };

    return (
        <div className="login-container">
            <div >
                <h1>Sign in to your account:</h1>
                <p>Don't have an account? <Link to='/signup' className='signin-btn'>Sign Up</Link></p>
            </div>
            {error &&
                <h3 className="login-error">User Not Found - Incorrect Credentials</h3>
            }

            <form onSubmit={handleSubmit} className="login-form">
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
                    Sign In
                </button>
            </form >
        </div >
    )

}

export default Signin;
