import { connect } from 'react-redux';
import { requestCarouselCampaigns } from '../../actions/carousel_actions';

import CampaignsCarousel from './campaigns_carousel';

const mapStateToProps = ({ carousel }) => {
  return {
    carouselCampaigns: carousel.carouselCampaigns,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestCarouselCampaigns: () => dispatch(requestCarouselCampaigns()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignsCarousel);
