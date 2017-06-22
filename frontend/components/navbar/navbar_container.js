import { connect } from 'react-redux';
import { login, logout, clearErrors } from '../../actions/session_actions';

import NavBar from './navbar.jsx';

const mapStateToProps = ({ session: currentUser }) => {
  return {
    currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
