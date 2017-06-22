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
  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: errors => dispatch(clearErrors(errors)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
