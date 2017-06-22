import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const sessionLinks = (handleLogin, handleSignup, guestLogin) => {
  debugger;
  return (
    <nav className="login-signup">
    <button className="nav-btn" onClick={handleSignup}>Sign Up</button>
    <button className="nav-btn" onClick={handleLogin}>Log In</button>
    <button className="nav-btn" onClick={guestLogin}>Guest Log In</button>
  </nav>
  );
};

const personalGreeting = (currentUser, logout) => (
  <nav className="logged-in">
    <span className="nav-btn">{currentUser.email}</span>
    <button className="nav-btn" onClick={logout}>Log Out</button>
	</nav>
);

const Greeting = ({ currentUser, guestLogin, logout, handleLogin, handleSignup }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(handleLogin, handleSignup, guestLogin)
);

export default Greeting;
