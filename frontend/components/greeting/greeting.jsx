import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const sessionLinks = (handleLogin, handleSignup) => {
  return (
    <nav className="login-signup">
    <button className="nav-btn" onClick={handleSignup}>Sign Up</button>
    <button className="nav-btn" onClick={handleLogin}>Log In</button>
  </nav>
  );
};

const personalGreeting = (currentUser, logout) => (
  <nav className="logged-in">
    <span className="nav-btn">{currentUser.email}</span>
    <button className="nav-btn" onClick={logout}>Log Out</button>
	</nav>
);

const Greeting = ({ currentUser, logout, handleLogin, handleSignup }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(handleLogin, handleSignup)
);

export default Greeting;
