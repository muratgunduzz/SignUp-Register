import React from 'react'
import './LoginSignUp.css'

import user_icon from '../Icons/person.png'
import email_icon from '../Icons/email.png'
import password_icon from '../Icons/password.png'

function LoginSignUp() {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>
            <div className='input'>
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
        <div className="submit-container">
            <div className='submit'>Sign Up</div>
            <div className='submit'>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp