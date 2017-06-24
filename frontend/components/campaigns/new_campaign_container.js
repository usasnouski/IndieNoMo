import { connect } from 'react-redux';

import { createCampaign } from '../../actions/campaign_actions';

import StartCampaignForm from './new_campaign';

const mapStateToProps = (state) => {
  return {
    user: session.state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
 return {
   createCampaign: (campaign) => createCampaign(campaign),
 };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartCampaignForm);
