import { RECEIVE_CAROUSEL_CAMPAIGNS } from '../actions/carousel_actions';

import merge from 'lodash/merge';

const defaultCarousel = Object.freeze({
  carouselCampaigns: {}
});

const CarouselReducer = (state = defaultCarousel, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CAROUSEL_CAMPAIGNS:
      return merge({}, state, {carouselCampaigns: action.carouselCampaigns});
    default:
      return state;
  }
}

export default CarouselReducer;
