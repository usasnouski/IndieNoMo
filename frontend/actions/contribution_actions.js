export const RECEIVE_CONTRIBUTION = 'RECEIVE_CONTRIBUTION'

import * as ContributionAPI from '../util/contribution_util';
import { receiveSingleCampaign, requestSingleCampaign } from './campaign_actions';

export const receiveSingleContribution = (contribution) => {
  return {
    type: RECEIVE_CONTRIBUTION,
    contribution
  };
};

export const createContribution = (contribution) => (dispatch) => {
  return ContributionAPI.createContribution(contribution)
    .then(contribution => dispatch(receiveSingleContribution(contribution)));
};
