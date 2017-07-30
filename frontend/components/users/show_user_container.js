import { connect } from 'react-redux';

import { requestUser, requestUserInfo } from '../../actions/user_actions';
import ShowUser from './show_user';

const mapStateToProps = ({ user, session }) => {
  return ({
    user: user,
    currentUser: session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    requestUser: (id) => dispatch(requestUser(id)),
    requestUserInfo: (id) => dispatch(requestUserInfo(id)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowUser);
