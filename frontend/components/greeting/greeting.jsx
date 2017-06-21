import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const sessionLinks = (handleLogin, handleSignup) => {
  return (
    <nav className="login-signup">
    <button onClick={handleLogin}>Login</button>
     &nbsp;or&nbsp;
    <button onClick={handleSignup}>Sign Up</button>
  </nav>
  );
};

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.email}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout, handleLogin, handleSignup }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(handleLogin, handleSignup)
);

export default Greeting;
