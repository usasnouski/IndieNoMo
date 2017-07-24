export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';

import * as UserAPIUtil from '../util/user_util';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveUserInfo = (userInfo) => {
  return {
    type: RECEIVE_USER_INFO,
    userInfo
  }
}

export const requestUser = (id) => (dispatch) => {
  return UserAPIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)));
};

export const requestUserInfo = (id) => (dispatch) => {
  return UserAPIUtil.fetchUserInfo(id)
    .then(userInfo => dispatch(receiveUserInfo(userInfo)));
};
