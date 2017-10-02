import { connect } from 'react-redux';

import CampaignIndex from './campaign_index';
import { requestAllCampaigns } from '../../actions/campaign_actions';
import { selectAllCampaigns, selectLaunchedCamps } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    campaigns: selectAllCampaigns(state),
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
)(CampaignIndex);
