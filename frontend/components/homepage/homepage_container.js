import { connect } from 'react-redux';
import { requestAllCampaigns } from '../../actions/campaign_actions';
import { selectLaunchedCamps } from '../../reducers/selectors';

import Homepage from './homepage.jsx';

const mapStateToProps = (state) => {
  return {
    campaigns: selectLaunchedCamps(state),
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
