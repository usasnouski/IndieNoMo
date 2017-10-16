import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
  };
};

const mapDispatchToProps = (dispatch, { formType }) => {
  const processForm = (formType === 'login') ? login : signup;
  debugger;
  return {
    processForm: user => dispatch(processForm(user)),
    guestLogin: user => dispatch(login(user)),
    clearErrors: errors => dispatch(clearErrors(errors)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
