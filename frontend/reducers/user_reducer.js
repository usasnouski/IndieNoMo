import { RECEIVE_USER, RECEIVE_USER_INFO } from '../actions/user_actions';

import merge from 'lodash/merge';

const defaultUser = Object.freeze({
  user: null,
  userInfo: null,
});

const UserReducer = (state = defaultUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, state, { user });
    case RECEIVE_USER_INFO:
      const userInfo = action.userInfo;
      return merge({}, state, { userInfo });
    default:
      return state;
  }
};

export default UserReducer;
