import { connect } from 'react-redux';

import { selectCampaign } from '../../reducers/selectors';
import { createContribution } from '../../actions/contribution_actions';
import { requestSingleCampaign } from '../../actions/campaign_actions';

import ShowCampaign from './show_campaign';

const mapStateToProps = ({ campaign }, ownProps) => {
  const campaignId = ownProps.match.params.campaignId;
  return {
    campaign: campaign[ownProps.match.params.campaignId],
    campaignId,
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
