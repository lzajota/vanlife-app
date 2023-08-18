import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
// import { loginUser } from "../../api"

export default function Login() {
    // const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    // const [status, setStatus] = React.useState("idle")
    // const [error, setError] = React.useState(null)

    // const location = useLocation()
    // const navigate = useNavigate()

    // const from = location.state?.from || "/host";

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setStatus("submitting")ß
    //     loginUser(loginFormData)
    //         .then(data => {
    //             setError(null)
    //             localStorage.setItem("loggedin", true)
    //             navigate(from, { replace: true })
    //         })
    //         .catch(err => {
    //             setError(err)
    //         })
    //         .finally(() => {
    //             setStatus("idle")
    //         })
    // }

    // function handleChange(e) {
    //     const { name, value } = e.target
    //     setLoginFormData(prev => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

    return (
        <div className="login-container">
            <div >
                <h1>Sign in to your account:</h1>
                <p>Don't have an account? <Link to='/signup' className='signin-btn'>Sign Up</Link></p>
            </div>

            <form className="login-form">
                < input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button>
                    Sign In
                </button>
            </form >
        </div >
    )

}