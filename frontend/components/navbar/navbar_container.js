import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar.jsx';

const mapStateToProps = ({ session: currentUser }) => {
  return {
    currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
