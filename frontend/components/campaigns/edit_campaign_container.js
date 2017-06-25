import { connect } from 'react-redux';

import { updateCampaign } from '../../actions/campaign_actions';
import EditCampaign from './edit_campaign';

const mapStateToProps = (state, ownProps) => {
  return {
    campaignId: ownProps.params.match.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCampaign: (campaign) => dispatch(updateCampaign(campaign));
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCampaign);
