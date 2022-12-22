import React from 'react'
import "../App.css"
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
    const handleResetPassword = () => {
        navigate("/request")
    }
  return (
    <div id='forgot-password'>
        <div id="password-div">
            <h1>Forgot your password?</h1>
            <p>Please enter the email address asociated with your account, and we'll email you a link to reset your password.</p>
            <input id="email-input" type='email' placeholder='Email address'></input>
            <button onClick={handleResetPassword} id='reset-btn'>Reset Password</button>
            <h4>Back</h4>
        </div>
    </div>
  )
}

export default ForgotPassword