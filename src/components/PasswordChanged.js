import React from 'react'
import "../App.css"
import logo from "../assets/bg-logo.png"
import { useNavigate } from "react-router-dom";

function PasswordChanged() {
  const navigate = useNavigate();
    const handleHomepage = () => {
        navigate("/")
    }
  return (
    <div id='password-changed'>
        <div id="password-changed-div">
            <img src={logo} alt="logo"/>
            <h2>Password changed successfully!</h2>
            <button onClick={handleHomepage} id='homepage-btn'>Go to Homepage</button>
        </div>
    </div>
  )
}

export default PasswordChanged