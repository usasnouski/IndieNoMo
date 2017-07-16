import { connect } from 'react-redux';

import CampaignIndex from './campaign_index';
import { requestAllCampaigns } from '../../actions/campaign_actions';
import { selectAllCampaigns, selectLaunchedCamps } from '../../reducers/selectors';
// import { goga } from './goga';

const mapStateToProps = (state) => {
  debugger;
  return {
    campaigns : selectAllCampaigns(state),
    launchedCamps : selectLaunchedCamps(state),
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
