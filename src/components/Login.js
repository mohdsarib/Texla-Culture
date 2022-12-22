import React from 'react'
import bglogo from "../assets/bg-logo.png"
import google from "../assets/google.png"
import "../App.css"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleForgotPassword = () => {
        navigate("/forgotpassword")
    }
  return (
    <div id="login">
        <div id="login-bg">
            <img src={bglogo} alt="bglogo" srcset="" />
            <div id="box1"></div>
            <div id="box2"></div>
            <div id="box-img1" className='bg-img'>
                
            </div>
            <div id="box-img2" className='bg-img'>
                
            </div>
            <div id="box-img3" className='bg-img'>
                
            </div>
        </div>
        <div id="login-card-container">
            <h1>Welcome Back!</h1>
            <div id="login-card">
                <h2>Sign in</h2>
                <p>Enter your details below</p>
                <form>
                    <input type='email' placeholder='Email address'></input>
                    <input type='password' placeholder='Password'></input>
                    <div id="checkbox-password">
                        <div id="checkbox">
                            <input type="checkbox"></input>
                            <p>Remember me</p>
                        </div>
                        <p onClick={handleForgotPassword}>Forgot Password?</p>
                    </div>
                </form>
                <button id='login-btn'>Login</button>
                <div id="hr-or">
                    <hr />
                    <p>OR</p>
                    <hr />
                </div>
                <button id='google-btn'>
                    <img src={google} alt="google"/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login