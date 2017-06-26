import {
  RECEIVE_ALL_CAMPAIGNS,
  RECEIVE_CAMPAIGN,
  DELETE_CAMPAIGN,
} from '../actions/campaign_actions';

import merge from 'lodash/merge';

const CampaignReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CAMPAIGNS:
      return merge({}, state, action.campaigns);
    case RECEIVE_CAMPAIGN:
      const campaign = action.campaign;
      return merge({}, state, {[action.campaign.id] : action.campaign});
    default:
      return state;
  }
};

export default CampaignReducer;
