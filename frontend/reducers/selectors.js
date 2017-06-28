import { values } from 'lodash';

export const selectCampaign = ({ campaign }, id) => {
  const camp = campaign[id] || {};
  return camp;
}

export const selectAllCampaigns = ({ campaign }) => values(campaign);
