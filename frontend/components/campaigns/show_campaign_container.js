import { connect } from 'react-redux';

import { selectCampaign } from '../../reducers/selectors';
import { createContribution } from '../../actions/contribution_actions';
import { requestSingleCampaign } from '../../actions/campaign_actions';

import ShowCampaign from './show_campaign';

const mapStateToProps = (state, ownProps) => {
  const campaignId = parseInt(ownProps.match.params.campaignId);
  const campaign = selectCampaign(state, campaignId);
  return {
    user: state.session.currentUser,
    campaignId,
    campaign
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSingleCampaign: (id) => dispatch(requestSingleCampaign(id)),
    createContribution: (contribution) => dispatch(createContribution(contribution)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCampaign);
