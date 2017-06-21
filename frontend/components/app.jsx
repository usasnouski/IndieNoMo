import React from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from 'react-modal'

const App = () => {
  // debugger;
  return (
    <div>
      <header>
        <h1>Indie NoMo</h1>
        <NavBarContainer />
      </header>
    </div>
  );
}

export default App;
