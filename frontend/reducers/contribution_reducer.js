import RECEIVE_CONTRIBUTION from '../actions/contribution_actions';

import merger from 'lodash/merge';

const ContributionReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CONTRIBUTION:
      const contribution = action.contribution;
      return merge({}, state, action.contribution)
    default:
    return state;
  }
};

export default ContributionReducer;
