import React from 'react';

import Modal from 'react-modal';
import GreetingContainer from '../greeting/greeting_container';
import SessionFormContainer from '../session_form/session_form_container';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      formType: '',
    }

    this.handleLogin= this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeForm = this.changeForm.bind(this);

  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleLogin() {
    this.setState({ isOpen: true, formType: 'login' });
  }

  handleSignup() {
    this.setState({ isOpen: true, formType: 'signup' });

  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  handleOpen() {
    this.setState({ isOpen: true });
  }

  changeForm(e) {
    e.preventDefault();
    if(this.state.formType === 'login') {
      this.setState({ formType: 'signup' });
    } else {
      this.setState({ formType: 'login' });
    }
  }

  render() {
  return  (<nav >
      <div>
      </div>
      <div>
        <GreetingContainer
          onClick={this.handleOpen}
          handleLogin={this.handleLogin}
          handleSignup={this.handleSignup}/>
        <Modal isOpen={this.state.isOpen}
          onRequestClose={this.handleClose}
          style={customStyles}
          contentLabel="">
          <SessionFormContainer
            formType={this.state.formType}
            changeForm={this.changeForm}
            handleClose={this.handleClose} />
        </Modal>
      </div>
    </nav>);
  }
}

export default NavBar;
