import { connect } from 'react-redux';

import CampaignIndex from './campaign_index';
import { requestAllCampaigns } from '../../actions/campaign_actions';
import { selectAllCampaigns } from '../../reducers/selectors';
// import { goga } from './goga';

const mapStateToProps = (state) => {
  return {
    campaigns : selectAllCampaigns(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllCampaigns: () => dispatch(requestAllCampaigns())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignIndex)
