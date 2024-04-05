import React, { useState } from 'react';
import './LoginSignUp.css';

import user_icon from '../Icons/person.png';
import email_icon from '../Icons/email.png';
import password_icon from '../Icons/password.png';

function LoginSignUp() {
  const [action, setAction] = useState("Sign Up");

  const handleSignUpClick = () => {
    setAction("Sign Up");
  };

  const handleLoginClick = () => {
    setAction("Login");
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name' />
        </div>}
        <div className='input'>
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email' />
        </div>
        <div className='input'>
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"}><button onClick={handleSignUpClick}>Sign Up</button></div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"}><button onClick={handleLoginClick}>Login</button></div>
      </div>
    </div>
  );
}

export default LoginSignUp;
