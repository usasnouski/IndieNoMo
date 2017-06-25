import { connect } from 'react-redux';

import { createCampaign } from '../../actions/campaign_actions';
import StartCampaignForm from './start_campaign_form';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger;
 return {
   createCampaign: (campaign) => dispatch(createCampaign(campaign)),
 };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartCampaignForm);
