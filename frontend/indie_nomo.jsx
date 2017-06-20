import React from 'react';
import ReactDOM from 'react-dom';

//test
import { signup, login, logout } from './util/session_api_util'
window.signup = signup
window.login = login
window.logout = logout



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hello New App!</h1>, root);
});
