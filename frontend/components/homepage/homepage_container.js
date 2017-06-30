import { connect } from 'react-redux';
import { requestAllCampaigns } from '../../actions/campaign_actions';

import Homepage from './homepage.jsx';

const mapStateToProps = (store) => {
  return {
    campaign: store.campaign,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllCampaigns : () => dispatch(requestAllCampaigns()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
