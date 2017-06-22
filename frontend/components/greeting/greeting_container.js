import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
