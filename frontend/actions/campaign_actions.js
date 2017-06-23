export const RECEIVE_ALL_CAMPAIGNS = 'RECEIVE_ALL_CAMPAIGNS';
export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const DELETE_CAMPAIGN = 'DELETE CAMPAIGN';

import * as CampAPIUtil from '../util/campaign_util';

export const receiveAllCampaigns = (campaigns) => {
  return {
    type: RECEIVE_ALL_CAMPAIGNS,
    campaigns
  };
};

export const receiveSingleCampaign = (campaign) => {
  return {
    type: RECEIVE_CAMPAIGN,
    campaign
  };
};

export const deleteSingleCampaign = (campaign) => {
  return {
    type: DELETE_CAMPAIGN,
    campaign
  };
};

export const requestAllCampaigns = () => (dispatch) => {
  return CampAPIUtil.fetchAllCampaigns()
    .then(campaigns => dispatch(receiveAllCampaigns(campaigns)));
};
//
export const requestSingleCampaign = (id) => (dispatch) => {
  return CampAPIUtil.fetchSingleCampaign(id)
    .then(campaign => dispatch(receiveSingleCampaign(campaign)));
};

export const createCampaign = (campaign) => (dispatch) => {
  return CampAPIUtil.createCampaign(campaign)
    .then(campaign => dispatch(receiveSingleCampaign(campaign)));
};

export const updateCampaign = (campaign) => (dispatch) => {
  return CampAPIUtil.editCampaign(campaign)
    .then(campaign => dispatch(receiveSingleCampaign(campaign)));
};

export const deleteCampaign = (id) => (dispatch) => {
  return CampAPIUtil.deleteCampaign(id)
    .then(campaign => dispatch(deleteSingleCampaign(campaign)));
};
