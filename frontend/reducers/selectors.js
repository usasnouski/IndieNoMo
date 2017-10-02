import { values, pickBy } from 'lodash';

export const selectCampaign = ({ campaign }, id) => {
  const camp = campaign[id] || {};
  return camp;
}

export const selectAllCampaigns = ({ campaign }) => {
  return values(campaign);
}

export const selectLaunchedCamps = ({ campaign }) => values(
  // pickBy(campaign, v => (v.launch === true));
);
