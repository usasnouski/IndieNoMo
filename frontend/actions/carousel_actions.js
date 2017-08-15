export const RECEIVE_CAROUSEL_CAMPAIGNS = 'RECEIVE_CAROUSEL_CAMPAIGNS';

import * as CarouselAPIUtil from '../util/carousel_util';

export const receiveCarouselCampaigns = (carouselCampaigns) => {
  return {
    type: RECEIVE_CAROUSEL_CAMPAIGNS,
    carouselCampaigns
  };
};

export const requestCarouselCampaigns = () => (dispatch) => {
  return CarouselAPIUtil.fetchCarouselCampaigns()
  .then(campaigns => dispatch(receiveCarouselCampaigns(campaigns)));
};
