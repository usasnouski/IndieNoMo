// export const RECEIVE_ALL_REWARDS = 'RECEIVE_ALL_REWARDS';

import { receiveSingleCampaign } from './campaign_actions';
import * as RewardAPIUtil from '../util/reward_util';



export const createReward = (reward) => (dispatch) => {
  return RewardAPIUtil.createReward(reward)
    .then(campaign => dispatch(receiveSingleCampaign(campaign)));
};
