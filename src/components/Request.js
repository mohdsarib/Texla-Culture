import React from 'react'
import "../Request.css"
import plain from "../assets/plain.png"
import { useNavigate } from "react-router-dom";

function Request() {
  const navigate = useNavigate();
    const handlePasswordChanged = () => {
        navigate("/passwordchanged")
    }
  return (
    <div id='request-container'>
        <div id='request-div'>
            <img src={plain} alt="" srcset="" />
            <h2>Request sent successfully!</h2>
            <p>We've sent a 6-digit confirmation email to you email. Please enter code in below box to verify your email.</p>
            <input type='email' placeholder='Email address'></input>
            <div id="otp-container">
                <input type="text" placeholder='---' className="otp-box" />
                <input type="text" placeholder='---' className="otp-box" />
                <input type="text" placeholder='---' className="otp-box" />
                <input type="text" placeholder='---' className="otp-box" />
                <input type="text" placeholder='---' className="otp-box" />
                <input type="text" placeholder='---' className="otp-box" />
            </div>
            <input type='password' placeholder='Password'></input>
            <input type='password' placeholder='Confirm New Password'></input>
            <button onClick={handlePasswordChanged} id='request-btn'>Change Password</button>
            <p>Don't have a code? <span>Resend code</span></p>
        </div>
    </div>
  )
}

export default Request